import os
import psycopg2
from contextlib import contextmanager
from dotenv import load_dotenv

load_dotenv()

@contextmanager
def get_db():
    conn = psycopg2.connect(
        host=os.getenv("HOST"),
        user=os.getenv("USER"),
        password=os.getenv("PASSWORD"),
        port=os.getenv("PORT"),
        database=os.getenv("DATABASE")
    )
    try:
        yield conn
    except psycopg2.Error as e:
        if conn:
            conn.rollback()
        raise e
    finally:
        if conn:
            conn.close()

class MenuItem:
    def __init__(self, name, price):
        self.name =  name.lower()
        self.price = float(price)
        
    def save(self):
        with get_db() as conn:
            with conn.cursor() as cursor:
                cursor.execute(
                    "SELECT COUNT(*) FROM menu_items WHERE item_name=%s",
                    (self.name,)
                )
                if cursor.fetchone()[0] > 0:
                    raise ValueError(f"Menu item with name '{self.name}' already exists.")
                
                
                cursor.execute(
                    "INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s)",
                    (self.name, self.price)
                )
                conn.commit()
                
                
    def update(self, name, price):
        new_name = name.lower()
        new_price = float(price)
        with get_db() as conn:
            with conn.cursor() as cursor:
                cursor.execute(
                    "UPDATE menu_items SET item_name=%s, item_price=%s WHERE item_name=%s",
                    (new_name, new_price, self.name)
                )
                self.name = new_name
                self.price = new_price
                conn.commit()
                
    def delete(self):
        with get_db() as conn:
            with conn.cursor() as cursor:
                cursor.execute(
                    "DELETE FROM menu_items WHERE item_name=%s",
                    (self.name,)
                )
                conn.commit()

    def __str__(self):
        return f"{self.name}: ${self.price:.2f}"
