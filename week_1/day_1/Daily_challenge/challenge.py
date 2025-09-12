#Challenge 1

while True:

    try:
        number = int(input("Enter a number pleas: "))
        length =int(input("Enter the length of the list: "))
        print(f"the number is :{number} and the length is :{length}")
        break
    except ValueError:
        print("Invalid input. Please enter numeric values.")

list_of_numbers = []
for i in range(length):
    if not list_of_numbers:
        list_of_numbers.append(number)
    else:
        list_of_numbers.append(list_of_numbers[-1] + number)
print(f"the list is :{list_of_numbers}")  



#Challenge 2

word = input("Enter a word: ")

result = word[0] 
for char in word:
    if char != result[-1]:
        result += char


print(f"{result}")
