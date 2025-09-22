# import necessary modules
import os
import time
from pynput import keyboard
from tic_tak_toe import TicTacToe

#create a Game class to manage the game flow

class Game:
    def __init__(self):
        self.ttt = TicTacToe()

    def _clear_screen(self):
        os.system('cls' if os.name == 'nt' else 'clear')
   
    def _display_board(self):
 
        print("    1   2   3")
        print("  ┌───┬───┬───┐")
        for r, row_label in enumerate(['a', 'b', 'c']):
            # Join the characters in each row with vertical bars
            row_contents = " │ ".join(self.ttt.board[r])
            print(f"{row_label} │ {row_contents} │")
            if r < 2:
                print("  ├───┼───┼───┤")
        print("  └───┴───┴───┘")

    
    
    def _get_player_input(self):
        # get input from the player
        while True: # Loop until we get valid input
            move = input(f"Player '{self.ttt.current_player}', enter your move (e.g., b2): ").lower().strip()

            # --- Input Validation ---
            if len(move) != 2:
                print("Invalid input. Please enter a letter followed by a number (e.g., 'b2').")
                continue
            
            row_char, col_char = move[0], move[1]

            if row_char not in ['a', 'b', 'c'] or col_char not in ['1', '2', '3']:
                print("Invalid coordinates. Rows are a, b, c and columns are 1, 2, 3.")
                continue

            # --- Convert input to board indices (0, 1, 2) ---
            row_map = {'a': 0, 'b': 1, 'c': 2}
            row = row_map[row_char]
            col = int(col_char) - 1

            # --- Attempt the move ---
            if self.ttt.make_move(row, col):
                self.ttt.check_winner()
                if not self.ttt.is_game_over():
                    self.ttt.switch_player()
                break # Exit the input loop on a successful move
            else:
                print("That spot is already taken! Try again.")
                # The loop will continue, asking for input again.

    def run(self):
        """Starts and manages the main game loop."""
        while not self.ttt.is_game_over():
            self._clear_screen()
            print("--- Tic-Tac-Toe ---")
            print(f"Player '{self.ttt.current_player}'s turn.")
            self._display_board()
            self._get_player_input()

        # Display final game over screen
        self._clear_screen()
        print("--- Game Over ---")
        self._display_board()
        if self.ttt.winner == 'Tie':
            print("\nIt's a tie!")
        else:
            print(f"\nCongratulations! Player '{self.ttt.winner}' wins!")


if __name__ == "__main__":
    game = Game()
    game.run()