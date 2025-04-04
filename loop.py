# #loop control statements
# #1.break
# for i in range(10):
#     print(i)
#     if i==5:
#         break
#     print('hai')

# #2.continue
# for i in range(10):
#     if i==5:
#         continue
#     print(i)

# #3.pass
# for i in range(10):
#     pass

class BankAccount:
    def __init__(self, account_number, account_holder, balance=0):
        self.account_number = account_number
        self.account_holder = account_holder
        self.balance = balance
    
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Deposited ${amount}. New balance: ${self.balance}")
        else:
            print("Deposit amount must be positive.")
    
    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            print(f"Withdrawn ${amount}. Remaining balance: ${self.balance}")
        else:
            print("Invalid withdrawal amount or insufficient balance.")
    
    def check_balance(self):
        print(f"Account Balance: ${self.balance}")


def main():
    print("Welcome to the Python Bank Application")
    account = BankAccount("123456", "John Doe", 500)
    
    while True:
        print("\nChoose an option:")
        print("1. Deposit")
        print("2. Withdraw")
        print("3. Check Balance")
        print("4. Exit")
        
        choice = input("Enter your choice: ")
        
        if choice == "1":
            amount = float(input("Enter deposit amount: "))
            account.deposit(amount)
        elif choice == "2":
            amount = float(input("Enter withdrawal amount: "))
            account.withdraw(amount)
        elif choice == "3":
            account.check_balance()
        elif choice == "4":
            print("Thank you for using the bank application!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
