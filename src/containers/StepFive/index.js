import React from "react";

import CreateForm from "../../finalFormsamples";
import { FORM_TYPE_EXTERNAL_SUBMIT_FINAL_FORM } from "../../constants";

let StepFive = (props) => {
    return (
        <>
            <CreateForm  formType={FORM_TYPE_EXTERNAL_SUBMIT_FINAL_FORM} /> 
        </>
    );
};

export default StepFive;
