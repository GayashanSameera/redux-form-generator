import React from "react";
import { reduxForm, getFormValues } from "redux-form";
import { compose } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";

import FormBaseTemplate from "./BaseTemplate";

let SimpleFormGenerator = (props) => {
    const { handleSubmit, name, schemeId, completed, formFields, className } = props;
    const dispatch = useDispatch();
    const dirtyFormValues = useSelector(getFormValues(name));
    return (
        <form className={className} onSubmit={handleSubmit}>
            <div className="form-body">
                <FormBaseTemplate data={formFields(dirtyFormValues, schemeId)} disabled={completed} />
            </div>
        </form>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        form: ownProps.name,
    };
};

export default compose(connect(mapStateToProps), reduxForm({}))(SimpleFormGenerator);
