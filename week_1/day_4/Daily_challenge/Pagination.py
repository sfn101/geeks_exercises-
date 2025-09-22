import math

class Pagination():
    def __init__(self ,items=None, page_size=10):

        self.items = items if items is not None else []
        
        if not isinstance(page_size, int) or page_size <= 0:
            raise ValueError("page_size must be a positive integer.")
        self.page_size = page_size

        self.current_idx = 0

        if self.items:
            self.total_pages = math.ceil(len(self.items) / self.page_size)
        else:
            self.total_pages = 1 


    def get_visible_items(self):
        #Returns the list of items for the current page.
        start_idx = self.current_idx * self.page_size
        end_idx = start_idx + self.page_size
        return self.items[start_idx:end_idx]

    def go_to_page(self, page_num):
    
        # 1. Check if the page number is less than 1
        if page_num < 1:
            raise ValueError("Page number cannot be less than 1.")
        
        # 2. Check if the page number is greater than the total pages
        elif page_num > self.total_pages:
            # Go to the last page
            self.current_idx = self.total_pages - 1
            
        # 3. If the page number is valid
        else:
            # Convert 1-based page number to 0-based index
            self.current_idx = page_num - 1
            

    def first_page(self):
        """Navigates to the first page."""
        self.current_idx = 0
        return self # Allow chaining

    def last_page(self):
        """Navigates to the last page."""
        if self.total_pages > 0:
            self.current_idx = self.total_pages - 1
        return self # Allow chaining

    def next_page(self):
        """Navigates to the next page, if possible."""
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self # Allow chaining

    def previous_page(self):
        """Navigates to the previous page, if possible."""
        if self.current_idx > 0:
            self.current_idx -= 1
        return self # Allow chaining
        
    def __str__(self):
        """Returns a string representation of the visible items on the current page."""
        visible_items = self.get_visible_items()
        return "\n".join(str(item) for item in visible_items)
    

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

p.go_to_page(10)
print(p.current_idx + 1)
# Output: 7

p.go_to_page(0)
# Raises ValueError