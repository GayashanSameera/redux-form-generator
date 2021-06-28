import React from "react";

// import { formFields } from "./formConfig";
import { FORM_NAME } from "./constants";

import CreateForm from "../../sampleForms";
import { FORM_TYPE_CHILDREN } from "../../constants";

let StepNine = (props) => {
    return (
        <>
            <CreateForm  formName={FORM_NAME} formType={FORM_TYPE_CHILDREN} />
        </>
    );
};

export default StepNine;
