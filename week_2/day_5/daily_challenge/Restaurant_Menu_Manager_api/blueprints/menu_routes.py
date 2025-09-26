from flask import Blueprint, jsonify, request
from database import get_db
from utils import normalize_item_name

menu_bp = Blueprint('menu', __name__, url_prefix='/api/menu')

@menu_bp.route('/items', methods=['GET'])
def get_all_items():
    """Get all menu items"""
    try:
        with get_db() as cursor:
            cursor.execute("SELECT * FROM menu_items ORDER BY item_id")
            items = cursor.fetchall()
            return jsonify([dict(item) for item in items])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@menu_bp.route('/items/<int:item_id>', methods=['GET'])
def get_item(item_id):
    """Get a specific menu item"""
    try:
        with get_db() as cursor:
            cursor.execute("SELECT * FROM menu_items WHERE item_id = %s", (item_id,))
            item = cursor.fetchone()
            if item:
                return jsonify(dict(item))
            return jsonify({'error': 'Item not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@menu_bp.route('/items', methods=['POST'])
def create_item():
    """Create a new menu item"""
    try:
        data = request.json
        if not data or 'item_name' not in data or 'item_price' not in data:
            return jsonify({'error': 'item_name and item_price are required'}), 400
        data['item_name'] = normalize_item_name(data['item_name'])
        
        with get_db() as cursor:
            cursor.execute("""
                           SELECT 1 FROM menu_items WHERE item_name = %s
                           """, (data['item_name'],))
            if cursor.fetchone():
                return jsonify({'error': 'Item with this name already exists'}), 400

            cursor.execute(
                "INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s) RETURNING *",
                (data['item_name'], data['item_price']))
            new_item = cursor.fetchone()
            cursor.connection.commit()
            return jsonify(dict(new_item)), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@menu_bp.route('/items/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    """Update a menu item"""
    try:
        data = request.json
        if not data:
            return jsonify({'error': 'Request body is required'}), 400
        data['item_name'] = normalize_item_name(data['item_name'])
        
        with get_db() as cursor:
            cursor.execute(
                """UPDATE menu_items 
                   SET item_name = COALESCE(%s, item_name), 
                       item_price = COALESCE(%s, item_price)
                   WHERE item_id = %s RETURNING *""",
                (data.get('item_name'), data.get('item_price'), item_id)
            )
            updated_item = cursor.fetchone()
            if updated_item:
                cursor.connection.commit()
                return jsonify(dict(updated_item))
            return jsonify({'error': 'Item not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@menu_bp.route('/items/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    """Delete a menu item"""
    try:
        with get_db() as cursor:
            cursor.execute("DELETE FROM menu_items WHERE item_id = %s RETURNING item_id", (item_id,))
            deleted = cursor.fetchone()
            if deleted:
                cursor.connection.commit()
                return jsonify({'message': 'Item deleted successfully'})
            return jsonify({'error': 'Item not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500