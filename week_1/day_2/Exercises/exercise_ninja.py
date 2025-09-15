# Exercise 1: Cars
cars_brands = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet."

cars_brands = cars_brands.split(", ")

print(f"This list has {len(cars_brands)} car brands.")

cars_brands.sort(reverse=True)
print(", ".join(cars_brands))

have_O = [brand for brand in cars_brands if 'o' in brand.lower()]

print(f"This list has {len(have_O)} car brands that contain the letter 'o': {", ".join(have_O)}")

dont_have_I = [brand for brand in cars_brands if 'i' not in brand.lower()]
print(f"This list has {len(dont_have_I)} car brands that do not contain the letter 'i': {", ".join(dont_have_I)}")

cars_brans = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

unique_brands = set(cars_brands)

print(f"This list has {len(unique_brands)} unique car brands: {", ".join(unique_brands)}")

# Exercise 2: full name 

def get_full_name(first="", middle="", last=""):
    if first:
        first = first.capitalize()
    else:
        print("You must provide at least a first and last name .")
    if middle:
        middle = middle.capitalize()
    elif not last:
        print("You must provide at least a first and last name .")
    if last:
        last = last.capitalize()
    else:
        last = middle
        middle = ""
    return f"Hello {first} {middle} {last}! have a good day."

print(get_full_name("John", "Hooker", "lee"))
print(get_full_name("John", last="Kennedy"))
print(get_full_name("bruce", "lee"))

# Exercise 3: englesh to morse code

MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----', ',': '--..--', '.': '.-.-.-', '?': '..--..',
    ' ': '/'  # A space between words will be represented by a slash
}

def text_to_morse(text):
    """Converts a string of English text to Morse code."""
    # Convert the entire text to uppercase to match our dictionary keys
    text = text.upper()
    
    morse_code_list = []
    # Loop through each word in the input text
    for word in text.split(' '):
        morse_chars = []
        # Loop through each character in the word
        for char in word:
            # Find the Morse code for the character and add it to our list.
            # .get() is used to avoid errors if a character is not in the dictionary.
            morse_char = MORSE_CODE_DICT.get(char)
            if morse_char:
                morse_chars.append(morse_char)
        
        # Join the Morse characters for the word with spaces
        morse_code_list.append(' '.join(morse_chars))
        
    # Join the Morse words with a slash and a space
    return ' / '.join(morse_code_list)

print(text_to_morse("Hello, World!"))

# Create an inverted dictionary for morse-to-text translation
MORSE_TO_TEXT_DICT = {morse: char for char, morse in MORSE_CODE_DICT.items()}

def morse_to_text(morse_code):
    """Converts a string of Morse code back to English text."""
    
    english_words = []
    # Split the Morse code into words by the slash separator
    for morse_word in morse_code.split(' / '):
        english_chars = []
        # Split each Morse word into individual characters by the space separator
        for morse_char in morse_word.split(' '):
            # Find the English character for the Morse code
            english_char = MORSE_TO_TEXT_DICT.get(morse_char)
            if english_char:
                english_chars.append(english_char)
        
        # Join the English characters to form a word
        english_words.append(''.join(english_chars))
        
    # Join the English words with spaces to form the final message
    return ' '.join(english_words)

print(morse_to_text(text_to_morse("Hello, World!")))
