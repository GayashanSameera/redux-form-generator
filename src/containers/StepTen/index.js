import React from "react";

import formFieldData from "./formConfig.json";
import {conditionHooks} from "./hooks/conditionHooks";
import { FORM_NAME } from "./constants";

import CreateForm from "../../sampleForms";
import { FORM_TYPE_CREATE_FROM_JSON } from "../../constants";

let StepTen = (props) => {
    return (
        <>
            <CreateForm formFieldData={formFieldData} conditionDataHook={conditionHooks({})} formName={FORM_NAME} formType={FORM_TYPE_CREATE_FROM_JSON} />
        </>
    );
};

export default StepTen;
