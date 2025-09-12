# # Exercise 1 : Hello World
print("Hello World \n" * 4)

# # Exercise 2 : Some Math
print((99^3) * 8)

# # Exercise 3 : What Is your name ?
name = input("What is your name ? ")
print("Hello " + name)  

# # Exercise 4 : Tall enough to ride a roller coaster

height = int(input("Enter your height in centimeters: "))
if height >= 145 : 
    print("You are tall enough to ride the roller coaster")
else :
    print("You need to grow taller before you can ride")

#Exercise 5 : Favorite Numbers

my_favorite_numbers = set([7,6,3,101])
my_favorite_numbers.add(8)
my_favorite_numbers.add(4)
print(my_favorite_numbers)

my_friend_favorite_numbers = set([9,1,6,3])
our_favorite_numbers = my_favorite_numbers.union(my_friend_favorite_numbers)
print(our_favorite_numbers)

#Exercise 6: Tuple

#Given a tuple which value is integers, is it possible to add more integers to the tuple?
#answer: no, tuples are immutable you cant add to them

#Exercise 7: List

basket = ["Banana", "Apples", "Oranges", "Blueberries"];
basket.remove("Banana")
basket.pop(-1)
basket.append("Kiwi")
basket.insert(0, "Apples")
print(basket)

#Exercise 8 : Sandwich Orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

finished_sandwiches = []
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
print("Sorry, we are out of pastrami today")
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    print("I made your " + current_sandwich)
    finished_sandwiches.append(current_sandwich)    

print(f"All finished sandwiches: {finished_sandwiches}")
