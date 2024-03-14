import { Card, CardBody, CardImg, CardTitle, CardText, CardGroup } from "reactstrap";
import Gelato from "../img/Food-Images/gelato-3932596_1280.jpg"
import NeapolitanPizza from "../img/Food-Images/pizza-5275191_1280.jpg"
import Ravioli from "../img/Food-Images/ravioli-7379303_1280.jpg"
import Lasagna from "../img/Food-Images/background-8266544_1280.jpg"

const RecipeCards = () => {
    return (
        <div>
            <CardGroup>
                <Card>
                    <CardBody>
                        <CardTitle>Recipe 1</CardTitle>
                        <CardText>Heavenly Gelato</CardText>
                    </CardBody>
                    <CardImg src={Gelato} alt="Gelato"/>
                </Card>
                
                <Card>
                    <CardBody>
                        <CardTitle>Recipe 2</CardTitle>
                        <CardText>Naples Staple Pizza</CardText>
                    </CardBody>
                    <CardImg src={NeapolitanPizza} alt="Neapolitan Pizza"/>
                </Card>
                
                <Card>
                    <CardBody>
                        <CardTitle>Recipe 3</CardTitle>
                        <CardText>Raving Ravioli</CardText>
                    </CardBody>
                    <CardImg src={Ravioli} alt="Ravioli"/>
                </Card>
                
                <Card>
                    <CardBody>
                        <CardTitle>Recipe 4</CardTitle>
                        <CardText>Leaping Lasagna</CardText>
                    </CardBody>
                    <CardImg src={Lasagna} alt="Lasagna"/>
                </Card>
            </CardGroup>
      </div>
    )
}

export default RecipeCards