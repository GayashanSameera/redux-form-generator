import React from "react";
import { reduxForm, getFormValues } from "redux-form";
import { compose } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";

import FormBaseTemplate from "./BaseTemplate";
import { FORM_TYPE_SIMPLE, SIMPLE_WITH_TABS } from "../constants";

const simpleFormFormat = (props) => {
    const { handleSubmit, name, schemeId, completed, formFields, className, dirtyFormValues } = props;
    return (
        <form className={className} onSubmit={handleSubmit}>
            <div className="form-body">
                <FormBaseTemplate data={formFields(dirtyFormValues, schemeId)} disabled={completed} />
            </div>
        </form>
    );
};

const simpleFormWithTabsFormat = (props) => {
    const { handleSubmit, className } = props;
    return <form className={className} onSubmit={handleSubmit}></form>;
};

let FormGenerator = (props) => {
    const { formType = FORM_TYPE_SIMPLE, name } = props;

    const dispatch = useDispatch();
    const dirtyFormValues = useSelector(getFormValues(name));

    return formType === FORM_TYPE_SIMPLE ? (
        simpleFormFormat({ dirtyFormValues, ...props })
    ) : formType === SIMPLE_WITH_TABS ? (
        simpleFormWithTabsFormat({ dirtyFormValues, ...props })
    ) : (
        <></>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        form: ownProps.name,
    };
};

export default compose(connect(mapStateToProps), reduxForm({}))(FormGenerator);
