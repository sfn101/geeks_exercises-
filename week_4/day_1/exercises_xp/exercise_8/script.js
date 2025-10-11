// Juice Bar

// Part I
function makeJuice1(size) {
    function addIngredients(ing1, ing2, ing3) {
        const sentence = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, and ${ing3}.`;
        document.getElementById('part1').textContent = sentence;
    }
    addIngredients("apple", "banana", "orange");
}

makeJuice1("medium");


// Part II
function makeJuice2(size) {
    const ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        document.getElementById('part2').textContent = sentence;
    }

    addIngredients("spinach", "kale", "ginger");
    addIngredients("lemon", "carrot", "beetroot");
    displayJuice();
}

makeJuice2("large");