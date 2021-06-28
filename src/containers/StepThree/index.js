import React from "react";

// import { formFields } from "./formConfig";
// import { FORM_NAME } from "./constants";

import CreateForm from "../../finalFormsamples";
import { FORM_TYPE_SIMPLE_FIELD_FINAL_FORM } from "../../constants";
//formFields={formFields} formName={FORM_NAME}
let StepThree = (props) => {
    return (
        <>
            <CreateForm  formType={FORM_TYPE_SIMPLE_FIELD_FINAL_FORM} /> 
        </>
    );
};

export default StepThree;
