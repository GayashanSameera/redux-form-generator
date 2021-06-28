import SimpleArrayFieldForm from "./simpleArrayFieldForm";
import SimpleFieldForm from "./simpleFieldForm";
import SimpleExternalValidations from "./simpleExternalValidation";
import ExternalSubmit from "./externalSubmit";
import InitializeValues from "./InitializeValues";

import {
    FORM_TYPE_SIMPLE_ARRAY_FIELD_FINAL_FORM,
    FORM_TYPE_SIMPLE_FIELD_FINAL_FORM,
    FORM_TYPE_EXTERNAL_VALIDATORS_FINAL_FORM,
    FORM_TYPE_EXTERNAL_SUBMIT_FINAL_FORM,
    FORM_TYPE_INITIALIZE_FINAL_FORM,
} from "../constants";

let CreateForm = (props) => {
    const { handleSubmit, formType } = props;
    return (
        <>
            {formType === FORM_TYPE_SIMPLE_ARRAY_FIELD_FINAL_FORM ? (
                <SimpleArrayFieldForm {...props} />
            ) : formType === FORM_TYPE_SIMPLE_FIELD_FINAL_FORM ? (
                <SimpleFieldForm />
            ) : formType === FORM_TYPE_EXTERNAL_VALIDATORS_FINAL_FORM ? (
                <SimpleExternalValidations />
            ) : formType === FORM_TYPE_EXTERNAL_SUBMIT_FINAL_FORM ? (
                <ExternalSubmit />
            ) : formType === FORM_TYPE_INITIALIZE_FINAL_FORM ? (
                <InitializeValues />
            ) : null}
        </>
    );
};

export default CreateForm;
