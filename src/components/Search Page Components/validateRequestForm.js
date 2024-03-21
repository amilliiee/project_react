export const validateRequestForm = (values) => {
    const errors = {};
    if (!values.name < 2) {
        errors.name = "Must be at least 2 characters."
    };

    if (!values.type < 2) {
        errors.type = "Must be at least 2 characters."
    };

    if (!values.description < 5){
        errors.description = "Must be at least 5 characters"
    }

    return errors
}