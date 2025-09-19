import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None and diameter is not None:
            raise ValueError("Cannot specify both radius and diameter")
        elif radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Must specify either radius or diameter")
    
    @property
    def diameter(self):
        return self.radius * 2
    
    def area(self):
        return math.pi * self.radius ** 2
    
    def __str__(self):
        return f"Circle(radius={self.radius}, diameter={self.diameter}, area={self.area():.2f})"
    
    def __add__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only add Circle objects")
        return Circle(radius=self.radius + other.radius)
    
    def __gt__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only compare Circle objects")
        return self.radius > other.radius
    
    def __lt__(self, other):
        if not isinstance(other, Circle):
            raise TypeError("Can only compare Circle objects")
        return self.radius < other.radius
    
    def __eq__(self, other):
        if not isinstance(other, Circle):
            return False
        return self.radius == other.radius
    
    def __le__(self, other):
        return self < other or self == other
    
    def __ge__(self, other):
        return self > other or self == other

# Example usage:
if __name__ == "__main__":
    # Create circles
    c1 = Circle(radius=5)
    c2 = Circle(diameter=10)
    c3 = Circle(radius=3)
    
    # Print circles
    print(c1)
    print(c2)
    print(c3)
    
    # Add circles
    c4 = c1 + c3
    print(f"c1 + c3 = {c4}")
    
    # Compare circles
    print(f"c1 > c3: {c1 > c3}")
    print(f"c1 == c2: {c1 == c2}")
    
    # Sort circles
    circles = [c1, c2, c3, c4]
    print("Before sorting:", [c.radius for c in circles])
    circles.sort()
    print("After sorting:", [c.radius for c in circles])
    
   
    screen = turtle.Screen()
    screen.bgcolor("white")
    screen.title("Sorted Circles")
    screen.setup(800, 600)
    
    # Create a turtle
    t = turtle.Turtle()
    t.speed(5)
    
    # Starting position
    start_x = -300
    y = 0
    spacing = 150
    
    # Draw each sorted circle
    for i, circle in enumerate(circles):
        x = start_x + i * spacing
        t.penup()
        t.goto(x, y - circle.radius)  # Move to bottom of circle
        t.pendown()
        t.circle(circle.radius)
        
        # Add label
        t.penup()
        t.goto(x, y - circle.radius - 30)
        t.write(f"r={circle.radius}", align="center", font=("Arial", 12, "normal"))
    
    # Keep window open
    screen.exitonclick()