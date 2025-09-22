# Exercise 1 : Pets

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    

first_cat = Bengal("Simsim", 4)
second_cat = Chartreux("Pera", 2)
third_cat = Bengal("Mira", 4 )

all_cats = [first_cat, second_cat, third_cat]

sara_pets = Pets(all_cats)

sara_pets.walk()


# Exercise 2 : Dogs

class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        speed = self.weight/self.age*10
        return int(speed)
    
    def fight(self, other_dog):
        other_dog_name = other_dog.name
        other_dog_speed = other_dog.run_speed()
        other_dog_weight = other_dog.weight
        
        if (self.run_speed() * self.weight) > (other_dog_speed * other_dog_weight):
            return f"The winner is {self.name} 🐶"
        else:
            return f"The winner is {other_dog_name} 🐶"
        

rex = Dog("rex", 2, 40)

tom = Dog("tom", 4, 30)

pep = Dog("pip", 8, 89)

tom.bark()
rex.bark()
pep.bark()


print(f"the dog {rex.name} age is {rex.age} years old and he weghit {rex.weight}km speed is {rex.run_speed()}kh")

print(f"the dog {tom.name} age is {tom.age}  years old  and he weghit {tom.weight}km speed is {tom.run_speed()}kh")

print(f"the dog {pep.name} age is {pep.age}  years old  and he weghit {pep.weight}km speed is {pep.run_speed()}kh")

print(rex.fight(tom))
print(pep.fight(rex))
print(pep.fight(tom))

