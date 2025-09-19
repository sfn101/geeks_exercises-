# rock paper scissors game implementation
import random

class Game:
    def __init__(self):
        self.choices = ['rock', 'paper', 'scissors']

    def get_user_choice(self):
        while True:
            user_input = input("Enter (r)ock, (p)aper, or (s)cissors: ").lower()
            user_input = {'r': 'rock', 'p': 'paper', 's': 'scissors'}.get(user_input, user_input)
            
            if user_input in self.choices:
                return user_input
            else:
                print("Invalid choice. Please try again.")

    def get_computer_choice(self):
        return random.choice(self.choices)
    
    def determine_winner(self, user_choice, computer_choice):
        if user_choice == computer_choice:
            return "It's a draw!"
        elif (user_choice == 'rock' and computer_choice == 'scissors') or \
             (user_choice == 'paper' and computer_choice == 'rock') or \
             (user_choice == 'scissors' and computer_choice == 'paper'):
            return "You win!"
        else:
            return "You lose!"
        
    def play(self):
        user_choice = self.get_user_choice()
        computer_choice = self.get_computer_choice()
        
        print(f"You chose: {user_choice}")
        print(f"Computer chose: {computer_choice}")
        print(f"{self.determine_winner(user_choice, computer_choice)}")
        
        result = self.determine_winner(user_choice, computer_choice)
        return result
