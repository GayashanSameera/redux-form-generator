import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Col, Row } from 'antd';
import { required } from 'redux-form-validators';

import { NumberField } from './generators/Fields';


let SampleFormOne = props => {
  const { handleSubmit } = props;
  return (
    <form className="generate-iaa-manager-letters-form" onSubmit={handleSubmit}>
      <div className="form-body">
        <Row className="input-row">
          <Col xl={12} lg={12} xs={24} className="label-wrapper">
            <label className="input-title">Activation code</label>
          </Col>
          <Col xl={10} lg={12} xs={24} className="input-generate-wrapper">
            <Field
              name="activationCode"
              className="form-control"
              component={NumberField}
              options={{
                decimalScale: 0,
                allowNegative: false,
                allowLeadingZeros: true,
                maxLength: 20
              }}
              validate={required({ message: 'TXT_REQUIRED' })}
            />
          </Col>
        </Row>
      </div>
    </form>
  );
};

SampleFormOne = reduxForm({
  form: 'SAMPLE_FORM_ONE'
})(SampleFormOne);

export default SampleFormOne;
