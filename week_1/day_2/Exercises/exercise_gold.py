import random

# Exercise 1 & 2: Birthday Look-up 

# Dictionary of names and their birthdays in thd global scope
birthdays = {
        "Soufiane": "1989/11/23",
        "Amine": "1994/05/07",
        "Zinab": "1992/02/15",
        "Yahya": "1999/01/04",
        "Ahmad": "2020/12/10"
    }

def birthday_lookup():

    # Welcome message.
    print("Welcome to the birthday lookup app! 🎂")
    print("You can look up the birthdays of these names:")
    for name in birthdays:
        print(f"- {name}")
    
    print("=" * 20)

    # Ask the user for a name.
    name_to_find = input("Whose birthday would you like to know? ").strip().capitalize()

    # Check if the name is in the dictionary.
    if name_to_find in birthdays:
        
        found_birthday = birthdays[name_to_find]
        print(f"\n{name_to_find}'s birthday is: {found_birthday}")
    else:
        # if the name is not found, inform the user.
        print(f"Sorry, we don't have the birthday for {name_to_find}.")
        
        # Ask the user if they want to add the new name.
        add_new = input(f"Do you want to add a birthday for {name_to_find}? (yes/no): ").strip().lower()
        
        if add_new == 'yes':
            new_birthday = input(f"Please enter the birthday for {name_to_find} (YYYY/MM/DD): ")
            # Add the new name and birthday to the dictionary.
            birthdays[name_to_find] = new_birthday
            print(f"Success! {name_to_find}'s birthday has been added.")
            print(f"Here is the updated list of names: {list(birthdays.keys())}")
        else:
            print("Okay, no changes were made.")

# Run the main function
birthday_lookup()


#Exercise 3: Sum

def sum_of_numbers(x):
    # convert x to string
    x = str(x)

    # convert x to int, x*2 to int, x*3 to int, x*4 to int
    x1 = int(x)
    x2 = int(x * 2)
    x3 = int(x * 3)
    x4 = int(x * 4)

    # sum the numbers
    total = x1 + x2 + x3 + x4   

    return total

print(sum_of_numbers(3))  # Output

# Exercise 4: Double Dice

def throw_dice():
    # dice roll between 1 and 6
    return random.randint(1, 6)

def throw_until_doubles():
    #tuple to store the rolls
    rolls_this_trial = []
    
    # Loop until we get doubles
    while True:
        dice1 = throw_dice()
        dice2 = throw_dice()
        rolls_this_trial.append((dice1, dice2))
        
        if dice1 == dice2:
            break
            
    # Format the output string
    output_string = ", ".join(map(str, rolls_this_trial))
    print(output_string)
    
    #return the rolls
    return len(rolls_this_trial)

def main():
    # print start message
    print("🚀 Starting the dice simulation for 100 trials...")
    
    # List to store the number of throws for each trial
    results = []
    
    # Loop to run 100 times.
    for i in range(100):
        # Print the trial and add now line.
        print(f"Trial {i + 1: >3}: ", end="")
        
        # print the rolls and get the number of throws needed
        throws_needed = throw_until_doubles()
        results.append(throws_needed)
    
    # Calculate the final results
    total_throws = sum(results)
    average_throws = total_throws / len(results)
    
    print("\n--- ✅ Simulation Complete ---")
    print(f"Total throws: {total_throws}")
    print(f"Average throws : {average_throws:.2f}")

# Run the main function
main()

