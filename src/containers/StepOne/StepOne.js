import React from "react";

import { formFields } from "./formConfig";
import { FORM_NAME } from "./constants";

import CreateForm from "../../sampleForms";
import { FORM_TYPE_SIMPLE } from "../../constants";

let StepOne = (props) => {
    return (
        <>
            <CreateForm formFields={formFields} formName={FORM_NAME} formType={FORM_TYPE_SIMPLE} />
        </>
    );
};

export default StepOne;
