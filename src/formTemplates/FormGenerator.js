import React from "react";
import { reduxForm, getFormValues } from "redux-form";
import { compose } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";

import FormBaseTemplate from "./BaseTemplate";
import { FORM_TYPE_SIMPLE, FORM_TYPE_CHILDREN } from "../constants";

const simpleFormFormat = (props) => {
    const { handleSubmit, name, schemeId, completed, formFieldData, className } = props;
    return (
        <form className={className} onSubmit={handleSubmit}>
            <div className="form-body">
                <FormBaseTemplate data={formFieldData} disabled={completed} />
            </div>
        </form>
    );
};

const formWithChildrenFormat = (props) => {
    const { handleSubmit, children, className } = props;
    return (
        <form className={className} onSubmit={handleSubmit}>
            {children}
        </form>
    );
};

let FormGenerator = (props) => {
    const { formType = FORM_TYPE_SIMPLE, name } = props;

    const dispatch = useDispatch();
    const dirtyFormValues = useSelector(getFormValues(name));

    return formType === FORM_TYPE_SIMPLE ? (
        simpleFormFormat({ dirtyFormValues, ...props })
    ) : formType === FORM_TYPE_CHILDREN ? (
        formWithChildrenFormat({ dirtyFormValues, ...props })
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
