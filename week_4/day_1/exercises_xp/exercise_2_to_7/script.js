// --- EXERCISE 2

const winBattle = () => true

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

// --- EXERCISE 3 
const isString = (input) => typeof input === "string";

console.log(isString("hello"));

console.log(isString([1, 2, 3])); 

// --- EXERCISE 4
const sum = (a, b) => a + b;

console.log(sum(2, 2));

console.log(sum(3, 5));


// --- EXERCISE 5
// 1. Function Declaration
function convertKgToGrams(kilograms) {
  return kilograms * 1000;
}

// Invoking the function
console.log(`2.5 kilograms is ${convertKgToGrams(2.5)} grams.`);

// 2. Function Expression
const convertKgToGramsExpression = function(kilograms) {
  return kilograms * 1000;
};

// Invoking the function
console.log(`5 kilograms is ${convertKgToGramsExpression(5)} grams.`);

// ? question : What is the difference between a function declaration and a function expression?
// * answer : A function declaration is hoisted and can be called before it's defined, while a function expression is not hoisted and can only be called after it's defined.

// 3. One-line Arrow Function
const convertKgToGramsArrow = (kilograms) => kilograms * 1000;

// Invoking the function
console.log(`1.8 kilograms is ${convertKgToGramsArrow(1.8)} grams.`);

// and the is iife withch is immediately invoked function expression
((kilograms) => {
  console.log(`3.2 kilograms is ${kilograms * 1000} grams.`);
})(3.2);

// ? question : What is the difference between a function declaration and an IIFE?
// * answer : A function declaration is defined and can be called multiple times, while an IIFE is executed immediately after it's defined and cannot be called again.

// --- EXERCISE 6

((numberOfChildren, partnerName, geographicLocation, jobTitle) => {

    const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;

    const fortuneDisplay = document.createElement('p');
    fortuneDisplay.textContent = sentence;

    document.body.appendChild(fortuneDisplay);

})(2, 'chaima', 'Casablanca', 'Software Engineer');

// --- EXERCISE 7

// Welcome John
const userName = prompt("Please enter your name", "Guest");

if (userName) {
    ((name) => {
        const navbar = document.getElementById('main-navbar');
        
        const userContainer = document.createElement('div');
        userContainer.classList.add('flex', 'items-center', 'gap-3');
    
        const profilePicture = document.createElement('img');
        profilePicture.src = 'https://placehold.co/40';
        profilePicture.alt = 'User profile picture';
        profilePicture.classList.add('rounded-full');
    
        const userNameElement = document.createElement('span');
        userNameElement.textContent = name;
        userNameElement.classList.add('text-white', 'font-semibold');
    
        userContainer.appendChild(profilePicture);
        userContainer.appendChild(userNameElement);
    
        navbar.appendChild(userContainer);
    })(userName);
}