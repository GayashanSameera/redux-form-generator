import React from "react";

// import { formFields } from "./formConfig";
// import { FORM_NAME } from "./constants";

import CreateForm from "../../finalFormsamples";
import { FORM_TYPE_SIMPLE_ARRAY_FIELD_FINAL_FORM } from "../../constants";
//formFields={formFields} formName={FORM_NAME}
let StepTwo = (props) => {
    return (
        <>
            <CreateForm  formType={FORM_TYPE_SIMPLE_ARRAY_FIELD_FINAL_FORM} /> 
        </>
    );
};

export default StepTwo;
