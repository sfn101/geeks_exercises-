import os
from contextlib import contextmanager
from psycopg2 import connect
from psycopg2.extras import RealDictCursor

@contextmanager
def get_db():
    """Database connection context manager"""
    conn = None
    try:
        conn = connect(
            host=os.getenv("HOST"),
            port=os.getenv("PORT"),
            user=os.getenv("USER"),
            password=os.getenv("PASSWORD"),
            database=os.getenv("DATABASE")
        )
        yield conn.cursor(cursor_factory=RealDictCursor)
    except Exception as e:
        if conn:
            conn.rollback()
        raise e
    finally:
        if conn:
            conn.close()