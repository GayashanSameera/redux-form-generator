import React from "react";
import { getFormValues } from "redux-form";
import { useDispatch, useSelector, connect } from "react-redux";

import { formFields } from "./formConfig";
import { formFieldTwo } from "./formConfiTwo";

import { FORM_NAME } from "./constants";

import CreateForm from "../../sampleForms";
import { FORM_TYPE_CHILDREN } from "../../constants";

let StepNine = (props) => {
    const dirtyFormValues = useSelector(getFormValues(FORM_NAME));
    console.log("dirtyFormValues:", dirtyFormValues);
    const formTabs = [
        {
            tabKey: "assetFsKey",
            tabName: "assetFsName",
            formSection: formFields(dirtyFormValues),
        },
        {
            tabKey: "liabilitiesFsKey",
            tabName: "liabilitiesFsName",
            formSection: formFieldTwo(dirtyFormValues),
        },
    ];
    return (
        <>
            <CreateForm formName={FORM_NAME} formTabs={formTabs} formType={FORM_TYPE_CHILDREN} />
        </>
    );
};

export default connect(null, null)(StepNine);
