import os
from flask import Flask, jsonify
from config import config
from database import get_db
from blueprints.menu_routes import menu_bp

def create_app(config_name='default'):
    """Application factory function"""
    app = Flask(__name__)
    
    # Load configuration
    app.config.from_object(config[config_name])
    
    # Register blueprints
    app.register_blueprint(menu_bp)
    
    # Root route
    @app.route('/')
    def home():
        return jsonify({
            'message': 'Restaurant Menu Manager API',
            'version': '1.0.0',
            'endpoints': {
                'menu': {
                    'get_all': 'GET /api/menu/items',
                    'get_one': 'GET /api/menu/items/<id>',
                    'create': 'POST /api/menu/items',
                    'update': 'PUT /api/menu/items/<id>',
                    'delete': 'DELETE /api/menu/items/<id>'
                }
            }
        })
    
    # Health check endpoint
    @app.route('/health')
    def health_check():
        try:
            with get_db() as cursor:
                cursor.execute("SELECT 1 as test")
                result = cursor.fetchone()
                return jsonify({
                    'status': 'healthy',
                    'database': 'connected',
                    'test_result': dict(result)
                })
        except Exception as e:
            return jsonify({
                'status': 'unhealthy',
                'database': 'disconnected',
                'error': str(e)
            }), 500
    
    # Error handlers
    @app.errorhandler(404)
    def not_found(error):
        return jsonify({'error': 'Resource not found'}), 404
    
    @app.errorhandler(500)
    def internal_error(error):
        return jsonify({'error': 'Internal server error'}), 500
    
    return app

# Create app instance
app = create_app()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)



