# Exercise 1: Cats

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


cat1 = Cat("Whiskers", 3)
cat2 = Cat("Mittens", 5)
cat3 = Cat("Shadow", 2)
cats=[cat1, cat2, cat3]
def oldest_cat(*cats):
    oldest = max(cats, key=lambda cat: cat.age)
    return f"The oldest cat is {oldest.name}, and it is {oldest.age} years old."
print(oldest_cat(*cats))

# Exercise 2 : Dogs

class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = int(dog_height)

    def bark(self):
        print(f"{self.name} goes woof 🐶")

    def jump(self):
        print(f"{self.name} jumps {self.height *2} cm high! ")


davids_dog = Dog("Rex", 50)

print(f"Davids dog name is {davids_dog.name} and he height is {davids_dog.height} cm")

davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)

print(f"Sarahs dog name is {sarahs_dog.name} and he height is {sarahs_dog.height} cm")

sarahs_dog.bark()
sarahs_dog.jump()


def bigger_dog(*dogs):
    biggest = max(dogs, key=lambda dog: dog.height)
    return f"The bigger dog is {biggest.name}, and its height is {biggest.height} cm."

print(bigger_dog(davids_dog, sarahs_dog))

# Exercise 3 : Who’s the song producer?

class Song:
    def __init__(self, lyrics):

        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(f"{line}. \n")


stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()

# Exercise 4 : Afternoon at the Zoo


class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        new_animal = new_animal.capitalize()
        if new_animal not in self.animals:
            self.animals.append(new_animal)
        else:
            print(f"{new_animal}is alrady in the zoo")

    def get_animals(self):
        print(f"---- The {self.name} contains now the following animals ----")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        animal_sold = animal_sold.capitalize()

        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        else:
            print(f"{animal_sold} is not in our Zoo")
    
    def sort_animals(self):

        animals_grupe = {}

        sorted_list = sorted(self.animals, key=lambda animal: animal.capitalize())

        for animal in sorted_list:
            first_letter = animal[0].upper()

            if first_letter in animals_grupe:
                animals_grupe[first_letter].append(animal)
            else:
                animals_grupe[first_letter] = [animal]

        return animals_grupe
    
    def get_grupe(self, letter=""):
        letter = letter.capitalize()
        print(f"The animals in the grupe {letter} is :")
        if not letter:
            for grupe in self.sort_animals().items():
                print(grupe)
        else:
            print(self.sort_animals()[letter])


new_york_zoo = Zoo("new york zoo")

# adding animals
new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Crocodail")
new_york_zoo.add_animal("lion")
new_york_zoo.add_animal("Crocodail")
new_york_zoo.add_animal("elphant")
new_york_zoo.add_animal("camal")
new_york_zoo.add_animal("gorilla")
new_york_zoo.add_animal("monky")

new_york_zoo.get_animals()


# selling animal

new_york_zoo.sell_animal("bear")

new_york_zoo.sell_animal("crocodail")

new_york_zoo.get_animals()

# sort and print grupe

new_york_zoo.get_grupe()

new_york_zoo.get_grupe("g")