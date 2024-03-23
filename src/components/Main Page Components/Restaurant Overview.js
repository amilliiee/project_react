import { Col, Container, Row } from "reactstrap";
import RecipeCards from "./RecipeCards";

const RestaurantOverview = () => {
	return (
		<div>
			<Container>
				<Col>
					<Row>
						<h1>Welcome To "Restaurant Name" !</h1>
						<p>
							Here we have a wide selection of specially crafted
							recipes to chose from!
						</p>
						<p>
							Take A look below at some of the delicious meals we
							have to offer!
						</p>
					</Row>
				</Col>

				<Col>
					<Row>
						<RecipeCards />
					</Row>
				</Col>
			</Container>
		</div>
	);
};

export default RestaurantOverview;
