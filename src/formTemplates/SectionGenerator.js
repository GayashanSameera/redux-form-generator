import React from "react";
import { getFormValues, FormSection } from "redux-form";
import { useDispatch, useSelector } from "react-redux";

import FormBaseTemplate from "./BaseTemplate";
import { FORM_SECTION_TYPE_SIMPLE } from "../constants";

const simpleFormSection = (props) => {
    const { formSectionName, formFieldData, disabled } = props;
    return (
        <FormSection name={formSectionName}>
            <FormBaseTemplate data={formFieldData} disabled={disabled} />
        </FormSection>
    );
};

let FormSectionGenerator = (props) => {
    const { formSectionType = FORM_SECTION_TYPE_SIMPLE, formSectionName, formName, disabled } = props;

    const dispatch = useDispatch();
    const dirtyFormValues = useSelector(getFormValues(formName));

    return formSectionType === FORM_SECTION_TYPE_SIMPLE ? simpleFormSection({ dirtyFormValues, ...props }) : <></>;
};

export default FormSectionGenerator;
