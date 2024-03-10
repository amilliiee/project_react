import { Col, Row } from "reactstrap";
import RecipeCard from "./RecipeCard";
import { selectAllRecipes } from './RecipesSlice';

const RecipesList = () => {
    const recipes = selectAllRecipes();

    return (
        <Row className="ms-auto">{recipes.map((recipe) => {
            return (
                <Col md='5' className="m-4" key={recipe.id}>
                    <RecipeCard recipe={recipe} />
                </Col>
            );
        })}
        </Row>
    );
}

export default RecipesList;