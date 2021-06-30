import React from "react";
import { render } from "react-dom";
import { Formik, Field, ErrorMessage, Form, useFormikContext } from "formik";
import * as Yup from "yup";

const App = (props) => {
    const { Logger } = props;
    return (
        <div className="app">
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    isEnabled: true,
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email().required("Not an email"),
                })}
            >
                <Form>
                    <Logger />
                    <label>First Name </label>
                    <Field name="firstName" type="text" />
                    <label>Last Name </label>
                    <Field name="lastName" type="text" />
                    <label>Email </label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />
                    <div>
                        <Field type="checkbox" name="isEnabled" id="isEnabled" />
                        <label className="label-inline" htmlFor="isEnabled">
                            Send a copy to yourself
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default App;
