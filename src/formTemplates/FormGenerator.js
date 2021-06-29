import React from "react";
import { reduxForm, getFormValues } from "redux-form";
import { compose } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";

import FormBaseTemplate from "./BaseTemplate";
import { GENERATE_FORM_TYPE_SIMPLE, GENERATE_FORM_TYPE_CHILDREN } from "../constants";

const simpleFormFormat = (props) => {
    const { handleSubmit, name, schemeId, completed, formFieldData, className, conditions } = props;
    
    return (
        <form className={className} onSubmit={handleSubmit}>
            <div className="form-body">
                <FormBaseTemplate data={formFieldData} disabled={completed} conditions={conditions} />
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
    const { formType = GENERATE_FORM_TYPE_SIMPLE, name } = props;

    const dispatch = useDispatch();
    const dirtyFormValues = useSelector(getFormValues(name));

    return formType === GENERATE_FORM_TYPE_SIMPLE ? (
        simpleFormFormat({ dirtyFormValues, ...props })
    ) : formType === GENERATE_FORM_TYPE_CHILDREN ? (
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
