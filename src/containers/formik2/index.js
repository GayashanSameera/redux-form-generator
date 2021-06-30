import React, { useState } from "react";
import App from '../../formikFormSamples/formikContextAPI';
import { Formik, Field, ErrorMessage, Form, useFormikContext } from "formik";

let FormikTwo = (props) => {

    const [dynamicValues, setDynamicValues]= useState({});

    const Logger = () => {
        const formik = useFormikContext();
        React.useEffect(() => {
          console.group("Formik State");
          console.log("values", formik.values);
          setDynamicValues(formik.values)
          console.log("errors", formik.errors);
          console.log("touched", formik.touched);
          console.log("isSubmitting", formik.isSubmitting);
          console.log("isValidating", formik.isValidating);
          console.log("submitCount", formik.submitCount);
          console.groupEnd();
        }, [
          formik.values,
          formik.errors,
          formik.touched,
          formik.isSubmitting,
          formik.isValidating,
          formik.submitCount
        ]);
        return null;
      };
console.log('dynamicValues.......',dynamicValues);
    return (
        <>
            <App Logger={Logger} /> 
        </>
    );
};

export default FormikTwo;
