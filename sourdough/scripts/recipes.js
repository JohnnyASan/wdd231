import {searchRecipe, searchRecipeLocal} from './recipeAPI.js';
import('./common.js');

const recipeDetailsModal = document.querySelector('#recipeDetailsModal');
const recipesGrid = document.querySelector('#recipesGrid');
const dialogDiv = document.querySelector('#dialogDiv');

async function loadRecipes() {
    searchRecipeLocal().then(res => {
        console.log(res);
        res.hits.forEach(x => {
            const recipeBlock = document.createElement('div');
            recipeBlock.classList.add('recipeBlock');
            recipeBlock.innerHTML = 
            `
                <h3>${x.recipe.label}</h3>
                <img src="${x.recipe.image}">
            `;
            recipeBlock.addEventListener('click', () => {
                dialogDiv.innerHTML = 
                `
                <img src="${x.recipe.image}">
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