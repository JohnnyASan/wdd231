const appId = 'e716f855'
const appKey = '20a20f6cb6c9c91a8e4c4cf49eec1f8b';
const baseURL = 'api.edamam.com';
const recipePath = 'api/recipes/v2';
// https://developer.edamam.com/edamam-docs-recipe-api

export async function searchRecipe(keyword) {
    try {
        const res = await fetch(`https://${baseURL}/${recipePath}?app_id=${appId}&app_key=${appKey}&type=public&q=${keyword}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await res.json();
    }
    catch (err) {
        console.log(err);
    }
}

export async function searchRecipeLocal() {
    try {
        const res = await fetch('./data/recipes.json');
        return await res.json();
    }
    catch {

    }
}
