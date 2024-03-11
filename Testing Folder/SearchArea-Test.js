//const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${textInput}`

const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=burger&diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C%20gluten&number=10&offset=0&type=main%20course';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cffec0f1a9mshe6496d3dd1e4d5bp1e89aajsn84a054023cb8',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

async function recipeSearch() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    }
    catch (error) {
        console.error(error);
    }
}

//Component
/*const SearchArea = () => {
    return (
        <div>
            <h1>Search For A Recipe</h1>
            <input type ="text"></input>
        </div>
    )
}
*/

// function jsTest() {
//     console.log("Script Is Connected")
// }