import SampleFormOne from "./simpleForm";
import FormWithTabs from "./formWithTabs";

import { FORM_TYPE_SIMPLE, FORM_TYPE_CHILDREN } from "../constants";

let CreateForm = (props) => {
    const { handleSubmit, formType } = props;
    return (
        <>
            {formType === FORM_TYPE_SIMPLE ? (
                <SampleFormOne {...props} />
            ) : formType === FORM_TYPE_CHILDREN ? (
                <FormWithTabs {...props} />
            ) : null}
        </>
    );
};

export default CreateForm;
