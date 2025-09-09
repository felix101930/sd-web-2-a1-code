"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
users.forEach((user) => {

  console.log(user.name);
});

const namesList = document.getElementById("names-list");
users.forEach((user) => {
  const listItem = document.createElement("li");
  listItem.textContent = user.name;
  namesList.appendChild(listItem);
});


// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
users.filter(user => user.age < 40).forEach(user => {
  console.log(user.name);
});


const youngCharactersList = document.getElementById("young-characters-list");

users.filter(user => user.age < 40).forEach(user => {
  const listItem = document.createElement("li");
  listItem.textContent = user.name;
  youngCharactersList.appendChild(listItem);
} );




// Helper function to handle error reporting
function reportError(errorMessages, index) {
  const errorMessage = `Error: Object is missing the name property`;
  console.error(errorMessage);
  const errorDiv = document.createElement("div");
  errorDiv.textContent = errorMessage;
  errorMessages.appendChild(errorDiv);
}

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
function renderNamesList(array, listId) {
  const listElement = document.getElementById(listId);
  const errorMessages = document.getElementById("error-messages");
  
  array.forEach((user, index) => {
    if (!user.hasOwnProperty('name')) {
      reportError(errorMessages, index);
      return;
    }
    const listItem = document.createElement("li");
    listItem.textContent = user.name;
    listElement.appendChild(listItem);
  });
}

renderNamesList(users, "function-list");
// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
function renderFilterList(array, ageThreshold, listId) {
  const listElement = document.getElementById(listId);
  const errorMessages = document.getElementById("error-messages");

  array.forEach((user, index) => {
    if (!user.hasOwnProperty('name')) {
      reportError(errorMessages, index);
      return;
    }
    if (user.age < ageThreshold) {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      listElement.appendChild(listItem);
    }
  });
}

renderFilterList(users, 100, "age-filter-list");

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"
const brokenUsers = [
    { id: 1, age: 25 },                    
    { id: 2, name: "Valid User", age: 28 }, 
    { id: 3 },                           
    { id: 4, name: "Another Valid", age: 34 },
    { age: 40 }                          
];

// Test the renderNamesList function with broken data
renderNamesList(brokenUsers, "broken-array-errors");

// Test the renderFilterList function with broken data
renderFilterList(brokenUsers, 50, "broken-array-errors");
