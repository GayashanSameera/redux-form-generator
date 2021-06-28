import React, { Suspense } from "react";
import { compose } from "redux";
import { getFormValues, submit } from "redux-form";
import { useDispatch, useSelector, connect } from "react-redux";
import { Tabs } from "antd";

import FormGenerator from "../../formTemplates/FormGenerator";
import SectionGenerator from "../../formTemplates/SectionGenerator";
import FormHeaderComponent from "../../formTemplates/FormHeader";
import { FORM_ACTION_TYPES } from "../../formTemplates/constants";
import { GENERATE_FORM_TYPE_CHILDREN, GENERATE_FORM_SECTION_TYPE_SIMPLE } from "../../constants";

let FormWithTabs = (props) => {
    const { submitFormWithTabs, submitFormWithTabsData, formName, formTabs } = props;
    const dispatch = useDispatch();
    const dirtyFormValues = useSelector(getFormValues(formName));

    console.log("dirtyFormValues", dirtyFormValues);
    console.log("submitFormWithTabsData", submitFormWithTabsData);

    const formSubmit = (formData) => {
        console.log("formData", formData);
    };

    const handleSubmit = (submissionType) => {
        submitFormWithTabs(formName);
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
                formType={GENERATE_FORM_TYPE_CHILDREN}
            >
                <Tabs>
                    {formTabs.map((tab) => (
                        <Tabs.TabPane tab={tab.tabName} key={tab.tabKey} forceRender={true}>
                            <div className="form-body">
                                <Suspense>
                                    {tab.type === "FORM_SECTION" ? (
                                        <SectionGenerator
                                            formSectionType={GENERATE_FORM_SECTION_TYPE_SIMPLE}
                                            formSectionName={tab.tabKey}
                                            formName={formName}
                                            disabled={false}
                                            formFieldData={tab.formFieldData}
                                        />
                                    ) : tab.type === "COMPONENT" ? (
                                        tab.formSection
                                    ) : null}
                                </Suspense>
                            </div>
                        </Tabs.TabPane>
                    ))}
                </Tabs>
            </FormGenerator>
        </>
    );
};

const mapStateToProps = (state, ownProps) => ({
    submitFormWithTabsData: getFormValues(ownProps.formName)(state),
});

const mapDispatchToProps = (dispatch) => ({
    submitFormWithTabs: (FORM_NAME) => {
        dispatch(submit(FORM_NAME));
    },
});
export default compose(connect(mapStateToProps, mapDispatchToProps))(FormWithTabs);
