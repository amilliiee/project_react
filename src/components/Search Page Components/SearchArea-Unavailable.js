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

//Proper Form code?
/* <form action="{search}">
    <input name="query" />
    <button type="submit">Search</button>
</form> */

import { Button, Col, Container, Row } from "reactstrap"
import { FormGroup, Label} from "reactstrap"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { validateRequestForm } from "./validateRequestForm"



const SearchAreaDown = () => {
    const handleSubmit = (values, {resetForm}) => {
        const request = {
            name: values.name,
            type: values.type,
            description: values.description
        };
        console.log(request);
        alert("Thank you for your request.");
        resetForm()
    }

    return (
        <Container >
            <Col className="my-5">
                <Row>
                    <div>
                        <h1>Recipe Database</h1>
                        <p>We apologize, but our recipe database is currently offline.</p>
                        <p>In the meantime, you can fill out this form to request new recipes to be added.</p>
                    </div>
                </Row>
            </Col>
                
            <Col>
                <Row>
                    <Formik initialValues={{name: undefined, type: undefined, description: ""}} onSubmit={handleSubmit} validate={validateRequestForm}>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="name">Recipe Name</Label>
                                <Field name="name" placeholder="Your Recipe Name" className="form-control"/>
                                <ErrorMessage name="name">
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="type">Type of Dish</Label>
                                <Field name="type" placeholder="Meat, Vegetable, Entree, etc." className="form-control"/>
                                <ErrorMessage name="type">
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="description">Description</Label>
                                <Field name="description" as="textarea" rows="12" className="form-control" placeholder="A quick description of the dish"/>
                                <ErrorMessage name="description">
                                {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>

                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </Row>
            </Col>
        </Container>
    )
}

export default SearchAreaDown