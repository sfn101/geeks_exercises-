import random


# Exercise 1 : Convert lists into dictionaries

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

my_dict = dict(zip(keys, values))
print(my_dict)

# Exercise 2 : Cinemax 1

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

for name, age in family.items():
    if age < 3:
        print(f" the ticket for {name} is Free")

    elif 3 <= age <= 12:
        print(f" the ticket for {name} is 10$")
        total_cost += 10
    else:
        print(f" the ticket for {name} is 15$")
        total_cost += 15
print(f"The total cost of the family is: {total_cost}$")


# Exercise 2 : Cinemax 2
my_family = {}

while True:
    name = input("Enter the name of the family member (or 'done' to finish): ")
    if name.lower() == 'done':
        break
    age = int(input(f"Enter the age of {name}: "))
    my_family[name] = age

my_total_cost = 0

for name, age in my_family.items():
    if age < 3:
        print(f" the ticket for {name} is Free")

    elif 3 <= age <= 12:
        print(f" the ticket for {name} is 10$")
        my_total_cost += 10
    else:
        print(f" the ticket for {name} is 15$")
        my_total_cost += 15
print(f"The total cost of the family is: {my_total_cost}$")

# Exercise 3 : Zara

zara = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

zara["number_stores"] = 2
print(zara["number_stores"])
print("Zara's clients are:", zara["type_of_clothes"])
zara["country_creation"] = "Spain"
if "international_competitors" in zara:
    zara["international_competitors"].append("Desigual")
del zara["creation_date"]
print(zara["international_competitors"][-1])
print(zara["major_color"]["US"])
print(len(zara))
for key in zara.keys():
    print(key)

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}
zara.update(more_on_zara)
print(zara["number_stores"])




#Exercise 4 : Some Geography
def describe_city(city, country="morocco"):
    print(f"{city} is in {country}")

describe_city("Casablanca")

describe_city("Tokyo", "Japan") 

# Exercise 5 : Random

def random_number_list(n):
    random_number = random.randint(1, 100)
    if n == random_number:
        print(f"Congratulations! You guessed the correct number it is {random_number}.")
    else:
        print(f"Sorry, the correct number was {random_number} and your number is {n} Better luck next time!")

random_number_list(50)

# Exercise 6 : Let’s create some personalized shirts !

def make_shirt(size="L", text="I love Python"):
    print(f"The shirt size is {size} and the message is '{text}'")   

make_shirt()
make_shirt("M")
make_shirt("XXL","soufiane is here")

make_shirt(text="geeks.institute", size="S")


# Exercise 7 : Temperature Advice 1

def get_random_temp():
    temp = random.randint(-10, 40)
    return temp

def main():
    temp_now = get_random_temp()
    print(f"The current temperature is {temp_now}° degrees Celsius.")
    if temp_now < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 <= temp_now < 16:
        print("Quite chilly! Don’t forget your coat")
    elif 16 <= temp_now < 23:
        print("It's a bit cool. A light jacket should be fine.")
    elif 23 <= temp_now < 32:
        print("Nice weather! A t-shirt would be perfect.")
    else:
        print("It's really hot! Stay hydrated and wear sunscreen.")

main()

# Exercise 7 : Temperature Advice 2

def get_random_temp2( season="winter"):
    if season == "winter":
        temp = round(random.uniform(-10.0, 16.0), 1)
    elif season == "spring":
        temp = round(random.uniform(0.0, 23.0), 1)
    elif season == "summer":
        temp = round(random.uniform(16.0, 40.0), 1)
    elif season == "autumn":
        temp = round(random.uniform(0.0, 32.0), 1)
    else:
        print("Invalid season. Please enter winter, spring, summer, or autumn.")
    return temp

def main2():
    season = input("Enter the season (winter, spring, summer, autumn) or the month number : ").lower()

    if season.isdigit():
        month = int(season)
        if 3 <= month <= 5:
            season = "spring"
        elif 6 <= month <= 8:
            season = "summer"
        elif 9 <= month <= 11:
            season = "autumn"
        elif month == 12 or  0 < month <= 2:
            season = "winter"
        else:
            print("Invalid month. Please enter a month between 1 and 12.")
            return
    temp_now = get_random_temp2(season)
    print(f"The season is {season} the current temperature is {temp_now}°degrees Celsius.")
    if temp_now < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 <= temp_now < 16:
        print("Quite chilly! Don’t forget your coat")
    elif 16 <= temp_now < 23:
        print("It's a bit cool. A light jacket should be fine.")
    elif 23 <= temp_now < 32:
        print("Nice weather! A t-shirt would be perfect.")
    else:
        print("It's really hot! Stay hydrated and wear sunscreen.")

main2()

# Exercise 8 : Star Wars Quiz
def star_wars_quiz():
    data = [
        {
            "question": "What is Baby Yoda's real name?",
            "answer": "Grogu"
        },
        {
            "question": "Where did Obi-Wan take Luke after his birth?",
            "answer": "Tatooine"
        },
        {
            "question": "What year did the first Star Wars movie come out?",
            "answer": "1977"
        },
        {
            "question": "Who built C-3PO?",
            "answer": "Anakin Skywalker"
        },
        {
            "question": "Anakin Skywalker grew up to be who?",
            "answer": "Darth Vader"
        },
        {
            "question": "What species is Chewbacca?",
            "answer": "Wookiee"
        }
    ]

    score = 0
    wrong_answers = []
    for item in data:
        print(item["question"])
        user_answer = input("Your answer: ")
        if user_answer.strip().lower() == item["answer"].strip().lower():
            print("Correct!")
            score += 1
        else:
            print("Your answer is Wrong! ")
            wrong_answers.append( (item["question"], item["answer"], user_answer) )


    print(f"\n--- Quiz Over ---")
    print(f"Your total score is: {score}/{len(data)}")
    if wrong_answers:
        print("\n Here are the questions you got wrong:")
        for question, correct_answer, your_answer in wrong_answers:
            print(f"Q: {question}\nYour answer: {your_answer}\nCorrect answer: {correct_answer}\n")
        if len(wrong_answers) >= 3:
            print("too bad try again")
    else:
        print("Great job! You got all questions correct.")

star_wars_quiz()