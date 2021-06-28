import React from "react";

import CreateForm from "../../finalFormsamples";
import { FORM_TYPE_INITIALIZE_FINAL_FORM } from "../../constants";

let StepSix = (props) => {
    return (
        <>
            <CreateForm  formType={FORM_TYPE_INITIALIZE_FINAL_FORM} /> 
        </>
    );
};

export default StepSix;
