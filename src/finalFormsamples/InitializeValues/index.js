import React, { useState, useEffect } from "react";
import { Form, Field } from "react-final-form";

const InitializeValues = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        setLoading(true);
        setData({
            username: "erikras",
            firstName: "Erik",
        });
        setLoading(false);
    }, []);

    const onSubmit = async (values) => {
        console.log("values.............", values);
    };

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={data}
            render={({ handleSubmit, pristine, form, submitting, values }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        {loading && <div className="loading" />}
                        <div>
                            <label>Username</label>
                            <Field name="username" component="input" placeholder="Username" />
                        </div>
                        <div>
                            <label>First Name</label>
                            <Field name="firstName" component="input" placeholder="First Name" />
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
    );
};

export default InitializeValues;
