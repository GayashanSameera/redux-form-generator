import React from "react";
import { getFormValues } from "redux-form";
import { useDispatch, useSelector, connect } from "react-redux";

import formFieldData from "./formConfig.json";
import {conditionHooks} from "./hooks/conditionHooks";
import {OnchangeHook} from "./hooks/onChangeHooks";
import { FORM_NAME } from "./constants";

import CreateForm from "../../sampleForms";
import { FORM_TYPE_CREATE_FROM_JSON } from "../../constants";

let StepTen = (props) => {
    const dirtyFormValues = useSelector(getFormValues(FORM_NAME));
    return (
        <>
            <CreateForm formFieldData={formFieldData} formHooks={{...conditionHooks({...dirtyFormValues, step: 9}),...OnchangeHook}} formName={FORM_NAME} formType={FORM_TYPE_CREATE_FROM_JSON} />
        </>
    );
};

export default StepTen;
