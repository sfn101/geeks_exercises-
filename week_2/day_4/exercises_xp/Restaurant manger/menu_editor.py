from menu_item import MenuItem, get_db
from menu_manager import MenuManager


def show_user_menu():
    def print_menu_options():
        print("\nMenu Management System")
        print("Options:")
        print("  (V)iew item")
        print("  (A)dd a new menu item")
        print("  (U)pdate an existing menu item")
        print("  (S)how all menu items")
        print("  (D)elete a menu item")
        print("  (Q)uit")
    while True:
        print_menu_options()
        choice = input("Select an option: ").strip().upper()
        if choice == 'V' or choice == 'v':
            view_menu_item()
        elif choice == 'A' or choice == 'a':
            add_item_to_menu()
        elif choice == 'D' or choice == 'd':
            remove_item_from_menu()
        elif choice == 'U' or choice == 'u':
            update_menu_item()
        elif choice == 'S' or choice == 's':
            show_all_menu_items()
        elif choice == 'Q' or choice == 'q':
            quit_program()
        else:
            print("Invalid option. Please try again.")
            

def view_menu_item():
    name = input("Enter the name of the menu item to view: ").strip()
    item = MenuManager.get_by_name(name)
    if item:
        print(f"Menu Item: {item.name}, Price: ${item.price:.2f}")
    else:
        print(f"No menu item found with name '{name}'.")
        
def add_item_to_menu():
    name = input("Enter the name of the new menu item: ").strip()
    price = input("Enter the price of the new menu item: ").strip()
    try:
        item = MenuItem(name, price)
        item.save()
        print(f"Menu item '{name}' added successfully.")
    except ValueError as ve:
        print(f"Error: {ve}")
    except Exception as e:
        print(f"An error occurred: {e}")

def remove_item_from_menu():
    name = input("Enter the name of the menu item to delete: ").strip()
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        print(f"Menu item '{name}' deleted successfully.")
    else:
        print(f"No menu item found with name '{name}'.")
        
def update_menu_item():
    current_name = input("Enter the current name of the menu item to update: ").strip()
    item = MenuManager.get_by_name(current_name)
    if item:
        new_name = input(f"Enter the new name for '{current_name}' (or press Enter to keep it the same): ").strip()
        new_price = input(f"Enter the new price for '{current_name}' (or press Enter to keep it the same): ").strip()
        if not new_name:
            new_name = item.name
        if not new_price:
            new_price = item.price
        try:
            item.update(new_name, new_price)
            print(f"Menu item '{current_name}' updated successfully.")
        except Exception as e:
            print(f"An error occurred: {e}")
    else:
        print(f"No menu item found with name '{current_name}'.")
        
def show_all_menu_items():
    items = MenuManager.all_items()
    if items:
        print("Menu Items:")
        for item in items:
            print(f" - {item.name}, Price: ${item.price:.2f}")
    else:
        print("No menu items found.")

def quit_program():
    print("Exiting Menu Management System. Goodbye!")
    exit(0)
if __name__ == "__main__":
    show_user_menu()