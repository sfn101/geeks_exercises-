from dotenv import load_dotenv
from menu_item import MenuItem, get_db

load_dotenv()

class MenuManager:
    
    def __init__(self, name):
        self.name = name.lower()

    @classmethod
    def get_by_name(cls, name):
        with get_db() as conn:
            with conn.cursor() as cursor:
                cursor.execute(
                    "SELECT * FROM menu_items WHERE item_name=%s",
                    (name.lower(),)
                )
                item = cursor.fetchone()
                if item:
                    id, name, price = item
                    return MenuItem(name, price)
                else:
                    return None
    @classmethod
    def all_items(cls):
        with get_db() as conn:
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM menu_items")
                items = cursor.fetchall()
                return [MenuItem(name, price) for id, name, price in items]
