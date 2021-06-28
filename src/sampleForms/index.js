import SampleFormOne from "./simpleForm";
import FormWithTabs from "./formWithTabs";
import SimpleFormUsingJson from "./SimpleFormUsingJson";


import { FORM_TYPE_SIMPLE, FORM_TYPE_CHILDREN, FORM_TYPE_CREATE_FROM_JSON } from "../constants";

let CreateForm = (props) => {
    const { handleSubmit, formType } = props;
    return (
        <>
            {formType === FORM_TYPE_SIMPLE ? (
                <SampleFormOne {...props} />
            ) : formType === FORM_TYPE_CHILDREN ? (
                <FormWithTabs {...props} />
            ) : formType === FORM_TYPE_CREATE_FROM_JSON ? (
                <SimpleFormUsingJson {...props} />
            ): null}
        </>
    );
};

export default CreateForm;
