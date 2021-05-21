import React, { useState } from 'react';
import validation from "./Validation";

const ContactUs = () => {

    const [data, setData] = useState({
        fullname: "",
        email: "",
        phone: "",
        password: "",
        msg: "",
    });

    const [errors, setErrors] = useState({});

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            };
        });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My fullname is ${data.fullname} my phone number is ${data.phone} my email is ${data.email} my mesg is ${data.msg} and password is ${data.password}`
        );
        setErrors(validation(data));
    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1"
                                    className="form-label">Full Name</label>
                                <input type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter your name" />
                                <div id="emailHelp" className="form-text">{errors.fullname}</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1"
                                    className="form-label">Email address</label>
                                <input type="email"
                                    className="form-control"
                                    id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="Enter your email"
                                />
                                <div id="emailHelp"
                                    className="form-text">{errors.email}</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1"
                                    className="form-label">Phone</label>
                                <input type="text"
                                    className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Enter your phone"
                                />
                                <div id="emailHelp"
                                    className="form-text">{errors.phone}</div>
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputEmail1"
                                    className="form-label">Password</label>
                                <input type="text"
                                    className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="password"
                                    value={data.password}
                                    onChange={InputEvent}
                                    placeholder="Enter your password"
                                />
                                <div id="emailHelp"
                                    className="form-text">{errors.password}</div>
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputPassword1"
                                    className="form-label">Message</label>
                                <textarea type="text"
                                    className="form-control" id="exampleInputPassword1"
                                    rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                >
                                </textarea>
                                <div id="emailHelp"
                                    className="form-text">{errors.msg}</div>
                            </div>
                            <div className="mb-3  text-center">
                                <button type="submit" className="btn btn-lg btn-outline-primary">Submit</button>
                            </div>


                        </form>
                    </div>
                </div>

            </div>
        </>
    )
};

export default ContactUs;
