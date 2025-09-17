from datetime import datetime

class Family:
    def __init__(self, last_name: str, members: list):

        self.last_name = last_name
        self.members = members

    def born(self, **child_info):
 
        new_child = child_info
        new_child['is_child'] = True
        

        self.members.append(new_child)
        
      
        print(f"Congratulations to the {self.last_name} family on their new baby, {new_child['name']}!")

    def is_18(self, name: str) -> bool:


        for member in self.members:
            if member['name'] == name:
                # Check their age and return the result
                return member['age'] >= 18

        print(f"Member '{name}' not found in the family.")
        return False

    def family_presentation(self):

        print(f"--- The {self.last_name} Family ---")
        for member in self.members:
            # Print details for each member
            print(f"  - Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")


initial_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

# Create the Family 
smith_family = Family("Doe", initial_members)

# Call family_presentation
print("Initial family presentation:")
smith_family.family_presentation()
print("\n")

# 4. Call the born method to add a new child
smith_family.born(name='Anna', age=0, gender='Female')
print("\n")

# 5. Call the is_18 method
print("Checking ages:")
print(f"Is Michael over 18? {smith_family.is_18('Michael')}")


print(f"Is Anna over 18? {smith_family.is_18('Anna')}")
print("\n")

# 6. Call family_presentationt
print("Final family presentation:")
smith_family.family_presentation()


class TheIncredibles(Family):
    def use_power(self, name: str):

        for member in self.members:
            if member['name'] == name:
                if member['age'] >= 18:
                    print(f"{member['name']}'s power is: {member['power']}!")
                else:
                    raise Exception(f"{member['name']} is not over 18 years old and cannot use their power yet.")
                return
        print(f"Member '{name}' not found.")

    def incredible_presentation(self):
      
        print("\n** Here is our powerful family **")
        super().family_presentation()

incredibles_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

# Create TheIncredibles
parr_family = TheIncredibles("Incredibles", incredibles_members)

# Call the incredible_presentation method
parr_family.incredible_presentation()

# Use the inherited 'born' method to add a new member
print("\n--- A new member is born! ---")
parr_family.born(name='Jack', age=1, gender='Male', power='Unknown Power', incredible_name='Jack-Jack')

# Call incredible_presentation again to show the new family structure
parr_family.incredible_presentation()

# use_power method and exception
print("\n--- Testing Powers ---")
# This call will succeed
parr_family.use_power('Michael')

try:
    parr_family.use_power('Jack')
except Exception as e:
    print(f"Caught an error: {e}")