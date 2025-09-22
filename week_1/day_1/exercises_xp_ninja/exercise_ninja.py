# Exercise 1 : Outputs
"""
Predict the output of the following code snippets:

>>> 3 <= 3 < 9
True
>>> 3 == 3 == 3
True
>>> bool(0)
False
>>> bool(5 == "5")
False
>>> bool(4 == 4) == bool("4" == "4")
True
>>> bool(bool(None))
False

x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x)
    x is True
print("y is", y)
    y is False
print("a:", a)
    a: 5
print("b:", b)
    b: 10

    
"""

# Exercise 2 : Longest word without a specific character
"""

len_word = 0
prev_word = ""
while True:
    word = input("Please enter a sentence without the letter A or type 0 to quite the game: ")
    if word.isdigit() and word == '0':
        print("Exiting the program.")
        break
    elif word.isdigit() and word != '0' or word == "":
        print("Invalid input. Please enter a valid word or type 0 to quite the game.")
        continue
    char = "a"
    word = word.lower()
    word = list(word)
    if char not in word and len(word) > len_word and ''.join(word) != prev_word:
        len_word = len(word)
        prev_word = ''.join(word)
        print(f"congrats the word ({''.join(word)}) dont have the letter ({char.upper()}) it is ({len_word}) letters long now try to find longer word")
    elif ''.join(word) == prev_word:
        print(f"sorry the word: ({''.join(word)}) is the same as the previous word please try again")
    elif char in word:
        print(f"sorry the word: ({''.join(word)}) have the letter  ({char.upper()}) please try again")
    elif char not in word and len(word) <= len_word:
        print(f"sorry the word: ({''.join(word)}) is not longer than the previous word ({prev_word})  please try again")
    else:
        print("something went wrong please try again")

        
"""

# Exercise 3: Working on a paragraph

parag = "Flavio Copes has released an updated 2025 edition of his CSS Handbook, covering modern CSS features like container queries, cascade layers, CSS nesting, and new color spaces. The comprehensive guide spans from fundamentals like selectors and the box model to advanced topics including CSS Grid, responsive design, animations, and best practices for maintainable code. "
parag = parag.lower()
sentenses = parag.count(". ") + parag.count("? ") + parag.count("! ")
words = parag.split() 

uni_words = set(words)
non_special_char = 0
dupl_words = set(word for word in words if words.count(word) > 1)
for char in parag:
    if not char.isspace():
        non_special_char += 1




print(f"This paragraph it has {len(parag)} characters. \n It has {sentenses} sentenses. \n it has {len(words)} words. \n it has {len(uni_words)} unique words. \n it has {non_special_char} non-whitespace characters. \n it has {len(dupl_words)} duplicate words. \n the duplicate words are: {', '.join(dupl_words)}. \n the avreg words per sentence is {int(len(words) / sentenses)}. ")