import { INPUT_FIELD, FORM_TEMPLATES } from "../../formTemplates/constants";
const { FULL_CONTAINER } = FORM_TEMPLATES;

export const formFields = (dirtyFormValues = {}, schemeId) => [
    {
        type: FULL_CONTAINER,
        bool: true,
        label: "Activation code",
        field: {
            __order: "a",
            name: "activationCode",
            className: "form-control",
            component: INPUT_FIELD,
        },
    },
];
