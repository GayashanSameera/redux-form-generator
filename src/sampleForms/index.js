import SampleFormOne from './simpleForm';


let ViewForms = (props) => {
    const { handleSubmit, name } = props;
    return (
        <>
        {
            name === 'SAMPLE_FORM_ONE' ? (<SampleFormOne />) : null
        }
        </>
    );
};

export default ViewForms;