// main.js

// Run the init() function when the page has loaded
window.addEventListener('DOMContentLoaded', init);

// Starts the program, all function calls trace back here
function init() {
  // Get the recipes from localStorage
  let recipes = getRecipesFromStorage();
  // Add each recipe to the <main> element
  addRecipesToDocument(recipes);
  // Add the event listeners to the form elements
  initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
  // A9. TODO - Complete the functionality as described in this function
  //           header. It is possible in only a single line, but should
  //           be no more than a few lines.
  const recipeArray = localStorage.getItem('recipes');
  if (!recipeArray) {
    return [];
  }
  return JSON.parse(recipeArray);
  // familarize yourself with JSON documentation and stuff
}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
  // A10. TODO - Get a reference to the <main> element
  let mainEl = document.querySelector('main');

  // A11. TODO - Loop through each of the recipes in the passed in array,
  //            create a <recipe-card> element for each one, and populate
  //            each <recipe-card> with that recipe data using element.data = ...
  //            Append each element to <main>

  recipes.forEach(function(recipe) {
    let newRecipeCard = document.createElement('recipe-card');
    newRecipeCard.data = recipe;
    mainEl.appendChild(newRecipeCard);
  });
  // familarize yourself with forEach notation, and take note that we already set up the .data functionality in RecipeCard.js to allow use to easily do this in two lines.
}

/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
  // EXPLORE - START (All explore numbers start with B)
  // B1. TODO - Complete the functionality as described in this function
  //            header. It is possible in only a single line, but should
  //            be no more than a few lines.
  localStorage.setItem('recipes', JSON.stringify(recipes));
}

/**
 * Adds the necesarry event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {

  // B2. TODO - Get a reference to the <form> element
  const recipeForm = document.getElementById('new-recipe');
  // B3. TODO - Add an event listener for the 'submit' event, which fires when the
  //            submit button is clicked
  recipeForm.addEventListener('submit', (event) => {
    const formData = new FormData(event.target);

    const newRecipeData = {
      imgSrc: formData.get('imgSrc'),
      imgAlt: formData.get('imgAlt'),
      titleLnk: formData.get('titleLnk'),
      titleTxt: formData.get('titleTxt'),
      organization: formData.get('organization'),
      rating: formData.get('rating'),
      numRatings: formData.get('numRatings'),
      lengthTime: formData.get('lengthTime'),
      ingredients: formData.get('ingredients')
    };
    addRecipesToDocument([newRecipeData]);
    saveRecipesToStorage(getRecipesFromStorage().concat(newRecipeCard));
  });

  const clearButton = recipeForm.querySelector('button.danger');

  clearButton.addEventListener('click', (event) => {
    localStorage.clear();
    let mainEl = document.querySelector('main');
    while(mainEl.firstChild) {
      mainEl.removeChild(mainEl.firstChild);
    }
  });
  // Steps B4-B9 will occur inside the event listener from step B3
  // B4. TODO - Create a new FormData object from the <form> element reference above
  // B5. TODO - Create an empty object (I'll refer to this object as recipeObject to
  //            make this easier to read), and then extract the keys and corresponding
  //            values from the FormData object and insert them into recipeObject
  // B6. TODO - Create a new <recipe-card> element
  // B7. TODO - Add the recipeObject data to <recipe-card> using element.data
  // B8. TODO - Append this new <recipe-card> to <main>
  // B9. TODO - Get the recipes array from localStorage, add this new recipe to it, and
  //            then save the recipes array back to localStorage

  // B10. TODO - Get a reference to the "Clear Local Storage" button
  // B11. TODO - Add a click event listener to clear local storage button
  
  // Steps B12 & B13 will occur inside the event listener from step B11
  // B12. TODO - Clear the local storage
  // B13. TODO - Delete the contents of <main>

}
