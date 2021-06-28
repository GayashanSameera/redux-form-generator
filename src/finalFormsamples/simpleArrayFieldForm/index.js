import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

const SimpleArrayFieldForm = () => {
    const onSubmit = async (values) => {
        console.log("values.............", values);
    };
    return (
        <Form
            onSubmit={onSubmit}
            mutators={{
                // potentially other mutators could be merged here
                ...arrayMutators,
            }}
            // validate={validate}
            render={({ handleSubmit, pristine, invalid, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <FieldArray name="customers">
                        {({ fields }) => (
                            <div>
                                {fields.map((name, index) => (
                                    <div key={name}>
                                        <div>
                                            <label>First Name</label>
                                            <Field name={`${name}.firstName`} component="input" />
                                        </div>
                                        <div>
                                            <label>Last Name</label>
                                            <Field name={`${name}.lastName`} component="input" />
                                        </div>
                                        <button type="button" onClick={() => fields.remove(index)}>
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button type="button" onClick={() => fields.push({ firstName: "", lastName: "" })}>
                                    Add
                                </button>
                            </div>
                        )}
                    </FieldArray>
                    <button type="submit" disabled={submitting || pristine}>
                        Submit
                    </button>
                </form>
            )}
        />
    );
};

export default SimpleArrayFieldForm;
