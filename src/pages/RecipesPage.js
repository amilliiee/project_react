import { Container, Row, Col } from "reactstrap";
import RecipesList from "../recipes/RecipesList";

const RecipesDirectory = () => {

    return (
        <Container>
            <RecipesList />
        </Container>
    );
}

export default RecipesDirectory;