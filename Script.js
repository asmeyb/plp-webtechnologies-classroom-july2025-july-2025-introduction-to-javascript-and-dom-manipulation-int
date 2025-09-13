// =================================================================
// Part 1: Variable Declarations and Conditionals
// =================================================================

// Declare a few variables with different data types.
let userLoggedIn = true;
let userName = "Alice";
const userAge = 30;

// Use a conditional statement to check a condition and update the DOM.
const conditionalOutputDiv = document.getElementById('conditional-output');

if (userLoggedIn) {
    conditionalOutputDiv.innerHTML = `<p>Welcome back, <strong>${userName}</strong>! You are logged in.</p>`;
} else {
    conditionalOutputDiv.innerHTML = `<p>Hello, Guest. Please log in.</p>`;
}

// Check another condition based on a different variable.
if (userAge >= 18) {
    conditionalOutputDiv.innerHTML += `<p>You are an adult and can access this content.</p>`;
} else {
    conditionalOutputDiv.innerHTML += `<p>You are a minor and cannot access this content.</p>`;
}

// =================================================================
// Part 2: Custom Functions
// =================================================================

// A function that checks if a number is even or odd.
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// A function that greets a user by name.
function greetUser(name) {
    return `Hello, ${name}!`;
}

// DOM interaction to use the functions.
const numberInput = document.getElementById('number-input');
const checkButton = document.getElementById('check-button');
const functionOutputDiv = document.getElementById('function-output');

checkButton.addEventListener('click', () => {
    const number = parseInt(numberInput.value);
    if (!isNaN(number)) {
        const result = isEvenOrOdd(number);
        functionOutputDiv.textContent = `The number ${number} is ${result}.`;
    } else {
        functionOutputDiv.textContent = "Please enter a valid number.";
    }
});

// Example of calling the greetUser function.
console.log(greetUser("Bob")); 

// =================================================================
// Part 3: Loops
// =================================================================

const loopOutputDiv = document.getElementById('loop-output');
let loopText = "<h3>For Loop: Counting to 5</h3>";

// Use a for loop to count from 1 to 5.
for (let i = 1; i <= 5; i++) {
    loopText += `<p>Count: ${i}</p>`;
}

loopText += "<h3>While Loop: Counting down from 3</h3>";
let count = 3;

// Use a while loop to count down from 3.
while (count > 0) {
    loopText += `<p>Countdown: ${count}</p>`;
    count--;
}

loopOutputDiv.innerHTML = loopText;

// =================================================================
// Part 4: DOM Interactions
// =================================================================

// 1. Get the button elements by their IDs.
const colorChangeButton = document.getElementById('color-change-button');
const addTextButton = document.getElementById('add-text-button');
const dynamicList = document.getElementById('dynamic-list');

// 2. Add a click event listener to change the background color.
colorChangeButton.addEventListener('click', () => {
    // Generate a random hex color.
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomColor;
    console.log(`Background color changed to ${randomColor}`);
});

// 3. Add a click event listener to add a new list item.
addTextButton.addEventListener('click', () => {
    // Create a new list item element.
    const newListItem = document.createElement('li');
    newListItem.textContent = `This is a new item added at ${new Date().toLocaleTimeString()}.`;

    // Append the new item to the dynamic list.
    dynamicList.appendChild(newListItem);
    console.log("New list item added.");
});

// 4. An example of a third DOM interaction: changing text content.
// We'll change the header text on mouseover as a bonus example.
const mainHeader = document.querySelector('header h1');
mainHeader.addEventListener('mouseover', () => {
    mainHeader.textContent = "Interactive JavaScript!";
});

mainHeader.addEventListener('mouseout', () => {
    mainHeader.textContent = "JavaScript Fundamentals";
});
