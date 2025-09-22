# Exercise 1: What is the Season?
""" 
while True:
    try:
        month = int(input("Enter the month (1-12): "))
        if 3 <= month <= 5:
            season = "Spring"
        elif 6 <= month <= 8:
            season = "Summer"
        elif 9 <= month <= 11:
            season = "Autumn"
        elif month == 12 or  0 < month <= 2:
            season = "Winter"
        else:
            print("Invalid month. Please enter a month between 1 and 12.")
            continue

        print(f"The season is: {season}")
        break
    except ValueError:
        print("Invalid input. Please enter numeric values.")

"""

# Exercise 2: For Loop
"""
print("Numbers from 1 to 20:")
for i in range(1, 21):
    print(f"the is {i}")
print("End \n")

print("Even index:")

numbers_list = list(range(1, 21))


for i, number in enumerate(numbers_list):
    if i % 2 == 0:
        print(i)    
""" 

# Exercise 3: While Loop
"""
while True:
    name = input("say my name: ")
    if name.lower() == "heisenberg":
        print("You're Goddamn Right")
        break
    else:
        print("am the cook i am the danger")
"""

# Exercise 4: Check the index

"""
member_name = (input("are you member what is your name: "))

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

member_name_lower = member_name.lower()
names_lower = [name.lower() for name in names]

if member_name_lower in names_lower:
    print(f"welcome to the club {member_name} your number is {names_lower.index(member_name_lower)}")
else:
    print(f"sorry {member_name} you are not a member")

"""

# Exercise 5: Greatest Number
"""
while True:
    try:
        first_num = int(input("Pleas enter first number: "))
        second_num = int(input("Pleas enter second number: "))
        third_num = int(input("Pleas enter third number: "))

        if first_num > second_num and first_num > third_num:
            print(f"the gratest number is: {first_num} ")
        elif second_num > first_num and second_num > third_num:
            print(f"the gratest number is: {second_num} ")
        elif third_num > first_num and third_num > second_num:
            print(f"the gratest number is: {third_num} ")
        else:
            print("there is no gratest number")
        break   

    except ValueError:
        print("Invalid input. Please enter numeric values.")
        continue
"""

# Exercise 6: List Operations
import random
wins = 0
losses = 0
while True:
    # i know i can do try except here but i am just lazy :P i did before anyway
    chouce_num = input("Pleas enter a number between 1 and 9 or type X to quite : ")
    random_num = random.randint(1, 9)

    if chouce_num == 'X' or chouce_num == 'x':
        print(f"you win {wins} times and you lose {losses} times")
        break
    elif not chouce_num.isdigit() or not (1 <= int(chouce_num) <= 9):
        print("Invalid input. Please enter numeric values between 1 and 9 or type X to quite.")
        continue
    elif int(chouce_num) == random_num:
        wins += 1
        print(f"correct the number is {random_num} you win")
    elif int(chouce_num) != random_num:
        losses += 1
        print(f"you lose the random number is :{random_num} try again")
    else:
        print("Invalid input. Please enter numeric values between 1 and 9 or type X to quite.")
        continue
    if losses > 0 or wins > 0:
        print(f"you win {wins} times and you lose {losses} times")
