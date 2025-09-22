def get_user_menu_choice():
    menu_choice = input("Enter (p)lay, show (r)esults, or (q)uit: ").lower()
    return {'p': 'play', 'r': 'results', 'q': 'quit'}.get(menu_choice, menu_choice)
def print_results(result):
    print(result)
    print() 
    print("Thanks for playing! Goodbye.")

def main():
    from game import Game
    game = Game()
    results = {"wins": 0, "losses": 0, "draws": 0}
    while True:
        choice = get_user_menu_choice()
        if choice == 'play':
            result = game.play()
            if result == "You win!":
                results["wins"] += 1
            elif result == "You lose!":
                results["losses"] += 1
            else:
                results["draws"] += 1 
        elif choice == 'results':
            if any(results.values()):
                print_results(results)
            else:
                print("No games played yet.")
        elif choice == 'quit':
            print_results("Final Results:")
            print_results(results)
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()