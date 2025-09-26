import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """Base configuration class"""
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key')
    DATABASE_HOST = os.getenv('HOST')
    DATABASE_PORT = os.getenv('PORT')
    DATABASE_USER = os.getenv('USER')
    DATABASE_PASSWORD = os.getenv('PASSWORD')
    DATABASE_NAME = os.getenv('DATABASE')

class DevelopmentConfig(Config):
    """Development configuration"""
    DEBUG = True

class ProductionConfig(Config):
    """Production configuration"""
    DEBUG = False

# Configuration dictionary
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}