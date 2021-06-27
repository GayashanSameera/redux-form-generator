import React from 'react';
import { DatePicker as AntDatePicker, Checkbox, Select, Input } from 'antd';
import moment from 'moment';
import NumberFormat from 'react-number-format';

import Moment from './Moment';

const Option = Select.Option;
const format = /[!#$%^*()+\=\[\]{};:"\\|<>\/?]+/;
const formatMsg = /[#$%^*()+\=\[\]{};':"\\|<>\/]+/;

const PhoneNumberFormat = /^[0-9 ()+-]+$/;

const InputField = ({ input, meta: { touched, error }, disabled, editable, ...props }) => {
  let hasError = touched && error !== undefined;
  const ignoreCharacterValidation =
    props.options && props.options.ignoreCharacterValidation
      ? props.options.ignoreCharacterValidation
      : false;

  if (!hasError) {
    if (format.test(input.value) && !ignoreCharacterValidation) {
      hasError = true;
      input.onChange(input.value.replace(/[!#$%^*()+\=\[\]{};:"\\|<>\/?]+/, ''));
    }
  }

  if (props.isEmail) {
    input.value = input.value.toLocaleLowerCase();
  }

  const { onBlur, ...restInput } = input;

  const className = `input-field ${hasError ? 'has-error' : ''} ${
    props.className ? props.className : ''
  }`;
  return (
    <div
      className={`field-wrapper ${props.prefix && 'prefix-wrapper'} ${props.suffix &&
        'suffix-wrapper'}`}
      title={props.disabled && props.title ? props.title : ''}
    >
      {props.prefix && <span className="prefix">{props.prefix}</span>}
      <input
        disabled={disabled || editable === false}
        {...restInput}
        {...props}
        //onBlur={onBlur}
        className={className}
      />
      {props.suffix && <span className="suffix">{props.suffix}</span>}
      {hasError && <span className="error">{error}</span>}
    </div>
  );
};

const PhoneNumberField = ({
  input,
  meta: { touched, error },
  disabled,
  options,
  editable,
  ...props
}) => {
  let hasError = touched && error !== undefined;

  const className = `input-field ${hasError ? 'has-error' : ''} ${
    props.className ? props.className : ''
  }`;

  return (
    <div
      className={`field-wrapper ${props.prefix && 'prefix-wrapper'} ${props.suffix &&
        'suffix-wrapper'}`}
      title={props.disabled && props.title ? props.title : ''}
    >
      {props.prefix && <span className="prefix">{props.prefix}</span>}
      <input hidden={true} {...input} {...props} />
      <NumberFormat
        {...options}
        type="tel"
        format="+###############"
        allowEmptyFormatting
        disabled={props && (props.disabled || (options && options.disabled))}
        value={input.value}
        className={className}
        placeholder={props && (props.placeholder || (options && options.placeholder))}
        onValueChange={({ formattedValue, value }) => {
          input.onChange('+' + value);
          input.onFocus('+' + value);
        }}
      />
      {props.suffix && <span className="suffix">{props.suffix}</span>}
      {hasError && <span className="error">{error}</span>}
    </div>
  );
};

const AntInputField = ({ input, meta: { touched, error }, disabled, editable, ...props }) => {
  let hasError = touched && error !== undefined;
  const ignoreCharacterValidation =
    props.options && props.options.ignoreCharacterValidation
      ? props.options.ignoreCharacterValidation
      : false;

  if (!hasError) {
    if (format.test(input.value) && !ignoreCharacterValidation) {
      hasError = true;
      
      input.onChange(input.value.replace(/[!#$%^*()+\=\[\]{};':"\\|<>\/?]+/, ''));
    }
  }

  const { onBlur, ...restInput } = input;

  const className = `${hasError ? 'has-error' : ''} ${props.className ? props.className : ''}`;
  return (
    <div
      className={`field-wrapper ${props.prefix && 'prefix-wrapper'} ${props.suffix &&
        'suffix-wrapper'}`}
      title={props.disabled && props.title ? props.title : ''}
    >
      {props.prefix && <span className="prefix">{props.prefix}</span>}
      <Input
        disabled={disabled || editable === false}
        {...restInput}
        {...props}
        //onBlur={onBlur}
        className={className}
      />
      {props.suffix && <span className="suffix">{props.suffix}</span>}
      {hasError && <span className="error">{error}</span>}
    </div>
  );
};

const CheckboxField = ({ input, meta: { touched, error }, disabled, ...props }) => {
  let hasError = touched && error !== undefined;
  return (
    <div className="field-wrapper checkbox-holder">
      <input
        {...input}
        {...props}
        hidden={true}
        type="checkbox"
        value={input.value}
        checked={input.value === true}
      />
      <Checkbox
        checked={(typeof input.value === 'boolean' && input.value) || props.checked}
        onChange={e => input.onChange(e.target.checked)}
        disabled={disabled}
      ></Checkbox>
      {hasError && <span className="error">{error}</span>}
    </div>
  );
};

const CheckboxGroup = ({ input, meta: { touched, error }, ...props }) => {
  let hasError = touched && error !== undefined;

  return (
    <div className="field-wrapper checkbox-holder">
      <Checkbox.Group
        options={props.options}
        {...props}
        value={input.value}
        onChange={e => input.onChange(e)}
      ></Checkbox.Group>
      {hasError && <span className="error">{error}</span>}
    </div>
  );
};

const NumberField = ({ input, meta: { touched, error }, options, ...props }) => {
  let hasError = touched && error !== undefined;

  const className = `input-field ${hasError ? 'has-error' : ''} ${
    props.className ? props.className : ''
  }`;
  const isAllowed = ({ formattedValue, value }) => {
    if (options && options.allowNegative && value === '-') {
      return true;
    }

    if (options && (options.min || options.max)) {
      const min = options && options.min ? options.min : false;
      const max = options && options.max ? options.max : false;

      return value === '' || ((min ? value >= min : true) && (max ? value <= max : true));
    }

    if (options && (options.minLength || options.maxLength)) {
      const minLength = options && options.minLength ? options.minLength : false;
      const maxLength = options && options.maxLength ? options.maxLength : false;

      return (
        value === '' ||
        ((minLength ? value.toString().length >= minLength : true) &&
          (maxLength ? value.toString().length <= maxLength : true))
      );
    }

    return true;
  };
  return (
    <div
      className={`field-wrapper ${props.prefix && 'prefix-wrapper'} ${props.suffix &&
        'suffix-wrapper'}`}
      title={props.disabled && props.title ? props.title : ''}
    >
      {props.prefix && <span className="prefix">{props.prefix}</span>}
      <input hidden={true} {...input} {...props} />
      <NumberFormat
        {...options}
        disabled={props && (props.disabled || (options && options.disabled))}
        value={input.value}
        className={className}
        placeholder={props && (props.placeholder || (options && options.placeholder))}
        isAllowed={isAllowed}
        onValueChange={({ formattedValue, value }) => {
          input.onChange(value);
          input.onFocus(value);
        }}
      />
      {props.suffix && <span className="suffix">{props.suffix}</span>}
      {hasError && <span className="error">{error}</span>}
    </div>
  );
};

const TextArea = ({ input, meta: { touched, error }, ...props }) => {
  let hasError = touched && error !== undefined;
  const ignoreCharacterValidation =
    props.options && props.options.ignoreCharacterValidation
      ? props.options.ignoreCharacterValidation
      : false;
  if (!hasError) {
    if (formatMsg.test(input.value) && !ignoreCharacterValidation) {
      hasError = true;
      input.onChange(input.value.replace(/[#$%^&*()+\=\[\]{};':"\\|<>\/]+/, ''));
    }
  }

  const { onBlur: _, ...restInput } = input;

  const className = `input-field text-area ${hasError ? 'has-error' : ''} ${
    props.className ? props.className : ''
  }`;
  return (
    <div className="field-wrapper">
      <textarea {...restInput} {...props} className={className} />
      {hasError && <span className="error">{error}</span>}
    </div>
  );
};

const ButtonGroup = ({ input, meta: { touched, error }, options, defaultValue, ...props }) => {
  let hasError = touched && error !== undefined;

  return (
    <div className="field-wrapper">
      {options.map((option, oKey) => {
        const checkedBool =
          (input.value && option.value === input.value) ||
          (!input.value && defaultValue && option.value === defaultValue);

        return (
          <label
            key={oKey}
            className={`button-group ${checkedBool ? 'active' : ''}  ${
              props.disabled ? 'cursor-default' : 'cursor-pointer'
            }`}
          >
            <input
              type="radio"
              {...input}
              {...props}
              value={option.value}
              checked={checkedBool || false}
            />
            {option.icon && (
              <span className="button-icon">
                <i className={`fa ${option.icon} icon`} aria-hidden="true"></i>
              </span>
            )}
            {option.title}
          </label>
        );
      })}
      {hasError && <span className="error">{error}</span>}
    </div>
  );
};

const DatePicker = ({ input, meta: { touched, error }, options, ...props }) => {
  let hasError = touched && error !== undefined;
  const { onBlur } = input;
  return (
    <div className={`field-wrapper date-field ${hasError ? 'has-error' : ''}`}>
      <input type="text" {...input} {...props} hidden={true} />
      <AntDatePicker
        {...options}
        disabled={props.disabled}
        value={input.value ? moment(input.value, 'YYYY-MM-DD') : null}
        format="DD-MM-YYYY"
        onBlur={() => setTimeout(onBlur, 500)}
        onChange={(data, dateString) => {
          input.onChange(
            !dateString || Moment.dateOnly(dateString) === 'Invalid date'
              ? null
              : moment(dateString, 'DD-MM-YYYY').format('YYYY-MM-DD')
          );
        }}
      />
      {hasError && <span className="error">{error}</span>}
    </div>
  );
};


export {
  InputField,
  CheckboxField,
  CheckboxGroup,
  NumberField,
  TextArea,
  ButtonGroup,
  DatePicker,
  AntInputField,
  PhoneNumberField
};
