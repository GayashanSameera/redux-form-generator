import React from "react";
import { Form, Field } from "react-final-form";

const ExternalSubmit = () => {
    const onSubmit = async (values) => {
        console.log("values.............", values);
    };
    let submit;
    return (
        <>
            <div className="buttons">
                <button
                    type="submit"
                    onClick={() =>
                        document
                            .getElementById("exampleForm")
                            .dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }))
                    }
                >
                    External Submit via <code>document.getElementById()</code>
                </button>
                <button
                    type="submit"
                    onClick={(event) => {
                        submit(event);
                    }}
                    style={{ marginTop: 10 }}
                >
                    External Submit via closure
                </button>
                <button type="submit" form="exampleForm" style={{ marginTop: 10 }}>
                    External Submit via form attribute
                </button>
            </div>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => {
                    submit = handleSubmit;
                    return (
                        <form id="exampleForm" onSubmit={handleSubmit}>
                            <div>
                                <label>First Name</label>
                                <Field name="firstName" component="input" type="text" placeholder="First Name" />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <Field name="lastName" component="input" type="text" placeholder="Last Name" />
                            </div>
                            <div>
                                <label>Favorite Color</label>
                                <Field name="favoriteColor" component="select">
                                    <option />
                                    <option value="#ff0000">
                                        <span role="img" aria-label="red heart">
                                            ❤️
                                        </span>{" "}
                                        Red
                                    </option>
                                    <option value="#00ff00">
                                        <span role="img" aria-label="green heart">
                                            💚
                                        </span>{" "}
                                        Green
                                    </option>
                                    <option value="#0000ff">
                                        <span role="img" aria-label="blue heart">
                                            💙
                                        </span>{" "}
                                        Blue
                                    </option>
                                </Field>
                            </div>
                            <div className="buttons">
                                <button type="submit" disabled={submitting || pristine}>
                                    Submit
                                </button>
                                <button type="button" onClick={form.reset} disabled={submitting || pristine}>
                                    Reset
                                </button>
                            </div>
                            <pre>{JSON.stringify(values, 0, 2)}</pre>
                        </form>
                    );
                }}
            />
        </>
    );
};

export default ExternalSubmit;
