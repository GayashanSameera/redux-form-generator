import React from "react";
import { getFormValues, submit } from "redux-form";
import { useDispatch, useSelector, connect } from "react-redux"; 

import { formFields } from "./formConfig";
import { FORM_NAME } from "./constants";

import FormGenerator from "../../formTemplates/FormGenerator";
import FormHeaderComponent from "../../formTemplates/FormHeader";
import { FORM_ACTION_TYPES } from "../../formTemplates/constants";

let SampleFormOne = (props) => {
    const { submitSimpleFormOne, simpleFormData } = props;
    const dispatch = useDispatch();
    const dirtyFormValues = useSelector(getFormValues(FORM_NAME));

    console.log("dirtyFormValues", dirtyFormValues);
    console.log("simpleFormData", simpleFormData);

    const formSubmit = (formData) => {
        console.log("formData", formData);
    };

    const handleSubmit = (submissionType) => {
        submitSimpleFormOne();
    };

    const formHeaderProps = {
        title: "REQUEST_INITIAL_PROPOSAL_INFORMATION_TITLE",
        actions: [
            {
                type: FORM_ACTION_TYPES.SAVE,
                state: { inProgress: false },
                onClick: () => {
                    handleSubmit("STEP_ACTION_DATA_CHANGE");
                },
                bool: true,
            },
            {
                type: FORM_ACTION_TYPES.SUBMIT,
                title: "SUBMIT",
                state: {
                    inProgress: false,
                },
                onClick: () => {
                    handleSubmit("STEP_ACTION_UPDATE_WORKFLOW");
                },
                bool: true,
            },
        ],
    };

    return (
        <>
            <FormHeaderComponent {...formHeaderProps} />
            <FormGenerator
                className="generate-iaa-manager-letters-form"
                onSubmit={formSubmit}
                name={FORM_NAME}
                formFields={formFields}
                formType = "SIMPLE"
            />
        </>
    );
};

const mapStateToProps = (state) => ({
    simpleFormData: getFormValues(FORM_NAME)(state),
});

const mapDispatchToProps = (dispatch) => ({
    submitSimpleFormOne: () => {
        dispatch(submit(FORM_NAME));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SampleFormOne);
