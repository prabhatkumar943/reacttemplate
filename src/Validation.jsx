const Validation = (values) => {

    let errors = {};
    //let validpass = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
    //let email=!/\S+@\S+\.S+/;
    if (!values.fullname) {
        errors.fullname = "Full Name is required";
    }
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/(?:[0-9a-zA-Z][a-zA-Z0-9_.]*@[a-zA-Z0-9]+([.][a-zA-Z]+)+)/.test(values.email)) {
        errors.email = "Email is invalid"
    }
    if (!values.password) {
        errors.password = "Password is required";
    }
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@_])/.test(values.password)) {
        errors.password = "Password requires one upper case letter and one special character";
    }
    else if (!/[a-zA-Z0-9_@]{5,12}$/.test(values.password)) {
        errors.password = "Password requires min 5 character and max 13 character";
    }



    // else if (values.password.length < 3 && values.password.length > 8) {
    //     errors.password = "Password requires min 3 and max 8 characters";
    // }
    if (!values.phone) {
        errors.phone = "Phone number is required";
    }
    else if (!/(0|91)?[6-9][6-9]([0-9]{8}$)/.test(values.phone)) {
        errors.phone = "phone should start with 0 or 91 and first digit should be in between 7-9 and it should be not more than 11 digit";
    }
    // else if (!/[0-9]{8}$/.test(values.phone)) {
    //     errors.phone = "phone should start with 0 or 91 and first digit should be in between 7-9 and it should be not more than 11 digit";
    // }

    // else if (values.phone.length < 10) {
    //     errors.phone = "phone length min 10";
    // }
    if (!values.msg) {
        errors.msg = "Message is required";
    }

    return errors;
};
export default Validation;