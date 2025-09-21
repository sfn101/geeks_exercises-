#!/bin/bash

# Gunicorn start script for Flask Todo App
# Make this file executable: chmod +x start_gunicorn.sh

# Set environment variables
export FLASK_APP=app.py
export FLASK_ENV=production

# Activate virtual environment
source .venv/bin/activate

# Run database migrations
flask db upgrade

# Start Gunicorn with optimal settings for production
exec gunicorn \
    --bind 0.0.0.0:5000 \
    --workers 3 \
    --worker-class sync \
    --worker-connections 1000 \
    --timeout 30 \
    --keepalive 2 \
    --max-requests 1000 \
    --max-requests-jitter 50 \
    --preload \
    --access-logfile - \
    --error-logfile - \
    app:app