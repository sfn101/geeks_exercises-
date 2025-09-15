
# Daily Challenge: Letter Index Mapping

def map_letters():
    # Prompt the user to enter a word
    word = input("Enter a word: ")
    
    # prepare a dictionary to hold letters
    letters_dict = {}

    # i use for loop to iterate over the word and enumerater to get index and letter
    for index, letter in enumerate(word):
        # i cheack if a letter is already in the dictionary i append the index to the list
        if letter in letters_dict:
            letters_dict[letter].append(index)
        else:
            # if not i add the letter to the dict with the index in a list
            letters_dict[letter] = [index]
    # print the word 
    print(f"the word is: {word}")
    # print the dictionary
    print(f"the letters index is: \n {letters_dict}")

map_letters()