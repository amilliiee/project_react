import { Card, CardTitle, CardText, CardBody, CardImg } from "reactstrap";

const RecipeCard = ({ recipe }) => {
    const { name, description, image } = recipe;

    return (
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardImg width='100%' src={image} alt={name} />
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
}

export default RecipeCard;