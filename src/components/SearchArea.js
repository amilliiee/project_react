const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${textInput}`

//Component
const SearchArea = () => {
    return (
        <div>
            <h1>Search For A Recipe</h1>
            <input type ="text"></input>
        </div>
    )
}

export default SearchArea