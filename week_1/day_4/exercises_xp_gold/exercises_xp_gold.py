class BankAccount:
    def __init__(self, username, password, balance=0):
        self.username = username
        self.password = password
        self.balance = balance
        self.authenticated = False
    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            print("Authentication successful.")
        else:
            print("Authentication failed.")
            self.authenticated = False

    def deposit(self, amount):
        try:
            if self.authenticated:    
                amount = float(amount)
                if amount <= 0:
                    raise ValueError("Deposit amount must be positive.")
                self.balance += amount
                print(f"Deposited: ${amount:.2f}")
            else:
                raise ValueError("User not authenticated. Please log in.")
        except ValueError as e:
            print(f"Invalid input: {e}")

    def withdraw(self, amount):
        try:
            if self.authenticated:
                amount = float(amount)
                if amount <= 0:
                    raise ValueError("Withdrawal amount must be positive.")
                if amount > self.balance:
                    raise ValueError("Insufficient funds.")
                self.balance -= amount
                print(f"Withdrew: ${amount:.2f}")
            else:
                raise ValueError("User not authenticated. Please log in.")
        except ValueError as e:
            print(f"Invalid input: {e}")


class minimumBalanceAccount(BankAccount):
    def __init__(self, username, password, balance=0, minimum_balance=100):
        super().__init__(username, password, balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        try:
            amount = float(amount)
            if amount <= 0:
                raise ValueError("Withdrawal amount must be positive.")
            if self.balance - amount < self.minimum_balance:
                raise ValueError(f"Cannot withdraw ${amount:.2f}. Minimum balance of ${self.minimum_balance:.2f} must be maintained.")
            self.balance -= amount
            print(f"Withdrew: ${amount:.2f}")
        except ValueError as e:
            print(f"Invalid input: {e}")


class ATM:
    def __init__(self, account_list, try_limit=2):
        try:
            if not all(isinstance(acc,(minimumBalanceAccount, BankAccount)) for acc in account_list):
                raise TypeError("Invalid account type in account list.")

            if try_limit < 1:
                raise TypeError("Try limit must be a positive integer.")
            self.account_list = account_list
            self.try_limit = try_limit
        except TypeError as e:
            print(f"Error initializing ATM: {e}")
        
        current_tries = 0
        self.show_main_menu()

    def show_main_menu(self):
        while True:
            print("\n--- ATM Main Menu ---")
            print("1. Login")
            print("2. Exit")
            choice = input("Select an option: ")
            if choice == '1':
                self.login()
            elif choice == '2':
                print("Exiting ATM. Goodbye!")
                break
            else:
                print("Invalid option. Please try again.")

    def login(self):
        current_tries = 0
        while current_tries < self.try_limit:
            username = input("Enter username: ")
            password = input("Enter password: ")
            account = next((acc for acc in self.account_list if acc.username == username), None)
            if account:
                account.authenticate(username, password)
                if account.authenticated:
                    self.show_account_menu(account)
                    return
                else:
                    current_tries += 1
                    print(f"Incorrect credentials. {self.try_limit - current_tries} attempts left.")
            else:
                current_tries += 1
                print(f"Account not found. {self.try_limit - current_tries} attempts left.")
        print("Maximum login attempts reached. Exiting.")

    def show_account_menu(self, account):
        while True:
            print("\n--- Account Menu ---")
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Check Balance")
            print("4. Logout")
            choice = input("Select an option: ")
            if choice == '1':
                amount = input("Enter deposit amount: ")
                account.deposit(amount)
            elif choice == '2':
                amount = input("Enter withdrawal amount: ")
                account.withdraw(amount)
            elif choice == '3':
                print(f"Current balance: ${account.balance:.2f}")
            elif choice == '4':
                account.authenticated = False
                print("Logged out successfully.")
                break
            else:
                print("Invalid option. Please try again.")

if __name__ == "__main__":
    acc1 = BankAccount("user1", "pass1", 500)
    acc2 = minimumBalanceAccount("user2", "pass2", 300, 100)
    atm = ATM([acc1, acc2], try_limit=3)