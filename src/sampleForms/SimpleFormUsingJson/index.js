import React from "react";
import { compose } from "redux";
import { getFormValues, submit } from "redux-form";
import { useDispatch, useSelector, connect } from "react-redux";

import FormGenerator from "../../formTemplates/FormGenerator";
import FormHeaderComponent from "../../formTemplates/FormHeader";
import { FORM_ACTION_TYPES } from "../../formTemplates/constants";
import { GENERATE_FORM_TYPE_SIMPLE } from "../../constants";

let SimpleFormUsingJson = (props) => {
    const { submitSimpleFormOne, simpleFormData, formFieldData, formName, formHooks } = props;
    const dispatch = useDispatch();
    const dirtyFormValues = useSelector(getFormValues(formName));

    const formSubmit = (formData) => {
        console.log("formData", formData);
    };

    const handleSubmit = (submissionType) => {
        submitSimpleFormOne(formName);
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
                name={formName}
                formFieldData={formFieldData}
                formType={GENERATE_FORM_TYPE_SIMPLE}
                formHooks = {formHooks}
            />
        </>
    );
};

const mapStateToProps = (state, ownProps) => ({
    simpleFormData: getFormValues(ownProps.formName)(state),
});

const mapDispatchToProps = (dispatch) => ({
    submitSimpleFormOne: (FORM_NAME) => {
        dispatch(submit(FORM_NAME));
    },
});
export default compose(connect(mapStateToProps, mapDispatchToProps))(SimpleFormUsingJson);
