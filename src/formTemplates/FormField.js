import React from "react";
import { Field } from "redux-form";

import {
    InputField,
    NumberField,
    SelectOptions,
    ButtonGroup,
    DatePicker,
    TextArea,
    AntInputField,
    PhoneNumberField,
} from "../generators/Fields";

import {
    INPUT_FIELD,
    NUMBER_FIELD,
    SELECT_OPTION,
    BUTTON_GROUP,
    DATE_PICKER,
    TEXTAREA,
    ANT_INPUT_FIELD,
    PHONE_NUMBER_FIELD,
} from "./constants";
const formComponents = {
    [INPUT_FIELD]: InputField,
    [NUMBER_FIELD]: NumberField,
    [SELECT_OPTION]: SelectOptions,
    [BUTTON_GROUP]: ButtonGroup,
    [DATE_PICKER]: DatePicker,
    [TEXTAREA]: TextArea,
    [ANT_INPUT_FIELD]: AntInputField,
    [PHONE_NUMBER_FIELD]: PhoneNumberField,
};

const formatInputData = (value) => {
    if (value === "") {
        return null;
    }

    return value;
};

export const FormField = ({ component, disabled, ...props }) => {
    const c = formComponents[component];
    return (
        <Field
            normalize={formatInputData}
            {...props}
            disabled={typeof disabled !== "undefined" ? disabled : props.disabled}
            component={c}
        />
    );
};

export default FormField;
