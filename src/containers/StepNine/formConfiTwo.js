import { required } from "redux-form-validators";

import { INPUT_FIELD, FORM_TEMPLATES } from "../../formTemplates/constants";
const { FULL_CONTAINER } = FORM_TEMPLATES;

export const formFieldTwo = (dirtyFormValues = {}) => {
    console.log('dirtyFormValues...',dirtyFormValues);
    return [
        {
            type: FULL_CONTAINER,
            bool: true,
            label: "Activation code two",
            field: {
                __order: "a",
                name: "activationCode",
                className: "form-control",
                component: INPUT_FIELD,
                validate: [required({ message: "Required" })],
            },
        },
        {
            type: FULL_CONTAINER,
            bool: true,
            label: "Liability",
            field: {
                __order: "B",
                name: "liability",
                className: "form-control",
                component: INPUT_FIELD,
                validate: [required({ message: "Required" })],
            },
        },
    ];
};
