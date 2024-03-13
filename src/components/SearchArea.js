// const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${textInput}`

//Component
// const SearchArea = () => {
//     return (
//         <div>
//             <h1>Search For A Recipe</h1>
//             <input type ="text"></input>
//         </div>
//     )
// }

// export default SearchArea

import { Col, Container, Row } from "reactstrap"

const SearchArea = () => {
    return (
        <Container>
            <Col>
                <Row>
                    <div>
                        <h1>Search Data Title</h1>
                        <p>Temporary Text For The Page</p>
                    </div>
                </Row>
            </Col>
        </Container>
    )
}

export default SearchArea