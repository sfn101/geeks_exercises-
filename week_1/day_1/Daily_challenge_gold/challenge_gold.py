from datetime import datetime

leap_list = [1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024]



while True:
    birthdate = input("Enter your birthdate (DD-MM-YYYY): ")
    try:
        birthdate_obj = datetime.strptime(birthdate, "%d-%m-%Y")
        today = datetime.today()
        age = today.year - birthdate_obj.year
        if (birthdate_obj.month, birthdate_obj.day) > (today.month, today.day):
            age -= 1
        candles = age % 10
        cake = f""" 
           {age}       
       ___{"i"*candles }___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |    {birthdate_obj.strftime('%d-%m-%Y')}   |
   ~~~~~~~~~~~~~~~~~~~

 """
        
        is_leap = 2 if birthdate_obj.year in leap_list else 1
        print(cake * is_leap)
        if is_leap == 2:
            print("You were born in a leap year! Enjoy an extra cake!")
        break
    except ValueError:
        print("Invalid date format. Please try again.")
