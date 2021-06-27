import React from "react";
import { reduxForm, getFormValues } from "redux-form";
import { compose } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";

import FormBaseTemplate from "./BaseTemplate";

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
    const { formType = "SIMPLE", name } = props;
    
    const dispatch = useDispatch();
    const dirtyFormValues = useSelector(getFormValues(name));

    return formType === "SIMPLE" ? (
        simpleFormFormat({ dirtyFormValues, ...props })
    ) : formType === "SIMPLE_WITH_TABS" ? (
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
