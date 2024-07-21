import {searchRecipe, searchRecipeLocal} from './recipeAPI.js';
import('./common.js');

const recipeDetailsModal = document.querySelector('#recipeDetailsModal');
const recipesGrid = document.querySelector('#recipesGrid');
const dialogDiv = document.querySelector('#dialogDiv');

async function loadRecipes() {
    searchRecipe('sourdough').then(res => {
        console.log(res);
        res.hits.forEach(x => {
            const recipeBlock = document.createElement('div');
            recipeBlock.classList.add('recipeBlock');
            recipeBlock.innerHTML = 
            `
                
                <img src="${x.recipe.image}" alt="${x.recipe.label}">
                <h3>${x.recipe.label}</h3>
                `;
            recipeBlock.addEventListener('click', () => {
                dialogDiv.innerHTML = 
                `
                <img src="${x.recipe.image}" alt="${x.recipe.label}" loading="lazy">
                <div>
                    <h3>${x.recipe.label}</h3>
                    <p><strong>Ingredients:</strong><br>-${x.recipe.ingredientLines.join('<br>-')}</p>
                    <p><strong>Meal Type:</strong> ${x.recipe.mealType}</p>
                    <p><strong>Calories:</strong> ${x.recipe.calories.toFixed(0)}</p>

                    <a href='${x.recipe.url}'>Recipe URL</a>           
                </div>
                `
                displayModal();
            });
            recipesGrid.appendChild(recipeBlock);
        })
    });
}

recipeDetailsModal.addEventListener('click', (event) => {
    if (event.target.id === 'recipeDetailsModal') {
        recipeDetailsModal.close();
    }
});

function displayModal() {
    recipeDetailsModal.showModal();
}

loadRecipes();

function randomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

const dynamicText = document.querySelector('#dynamicText');
async function loadText() {
    var res = await fetch('./data/recipeDynamicText.json');
    res = await res.json();
    var timesVisited = parseInt(localStorage.timesVisited);
    if (timesVisited == 0)  {
        // do nothing
    }
    else if (timesVisited == 1) {
        dynamicText.textContent = res[0];
    }
    else if (timesVisited == 2) {
        dynamicText.textContent = res[1];
    }
    else if (timesVisited == 3) {
        dynamicText.textContent = res[2];
    }
    else if (timesVisited == 4) {
        dynamicText.textContent = res[3];
    }
    else {
        dynamicText.textContent = res[randomNumber(0,4)];
    }
}

localStorage.lastVisited = new Date();
var timesVisitedFromStorage = parseInt(localStorage.timesVisited);
localStorage.timesVisited = timesVisitedFromStorage !== timesVisitedFromStorage ? 0 : timesVisitedFromStorage + 1;
loadText();