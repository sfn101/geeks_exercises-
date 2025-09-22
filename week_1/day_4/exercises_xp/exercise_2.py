from exercise import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False
    def train(self):
        print(self.bark())
        self.trained = True
    def play(self, *dogs):
        dogs_names = ", ".join(dog.name for dog in dogs)
        print(f"{self.name} and {dogs_names} all play together")

    def do_a_trick(self):

        tricks = [
                "does a barrel roll”.",
                "stands on his back legs”.", 
                "shakes your hand”.", 
                "plays dead”."
                ]

        trick = random.choice(tricks)

        if self.trained:
            print(f"{self.name} {trick}")
        else:
            print(f"{self.name} is not trand dog pleas tran it first")

buddy = PetDog("buddy", 3, 37)

print(f"the dog {buddy.name} age is {buddy.age}  years old  and he weghit {buddy.weight}km speed is {buddy.run_speed()}kh")

buddy.bark()

rex = Dog("rex", 2, 40)

tom = Dog("tom", 4, 30)

pep = Dog("pip", 8, 89)

buddy.play(pep, rex, tom)

buddy.do_a_trick()

buddy.train()

buddy.do_a_trick()

