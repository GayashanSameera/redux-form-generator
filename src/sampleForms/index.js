import SampleFormOne from './simpleForm';

import {FORM_TYPE_SIMPLE} from '../constants';


let CreateForm = (props) => {
    const { handleSubmit, formType } = props;
    return (
        <>
        {
            formType === FORM_TYPE_SIMPLE ? (<SampleFormOne {...props} />) : null
        }
        </>
    );
};

export default CreateForm;