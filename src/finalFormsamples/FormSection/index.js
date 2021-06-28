import React from "react";
import { Form, Field } from "react-final-form";

const Address = ({ name, label }) => (
    <React.Fragment>
        <div>
            <label>{label} Street</label>
            <Field name={`${name}.street`} component="input" placeholder={`${label} Street`} />
        </div>
        <div>
            <label>{label} City</label>
            <Field name={`${name}.city`} component="input" placeholder={`${label} City`} />
        </div>
        <div>
            <label>{label} Postal Code</label>
            <Field name={`${name}.postalCode`} component="input" placeholder={`${label} Postal Code`} />
        </div>
    </React.Fragment>
);

const FormSection = () => {
    const onSubmit = async (values) => {
        console.log("values.............", values);
    };
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <Field name="name" component="input" placeholder="Name" />
                    </div>
                    <Address name="billing" label="Billing" />
                    <Address name="shipping" label="Shipping" />
                    <div className="buttons">
                        <button type="submit" disabled={submitting}>
                            Submit
                        </button>
                        <button type="button" onClick={form.reset} disabled={submitting || pristine}>
                            Reset
                        </button>
                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )}
        />
    );
};

export default FormSection;
