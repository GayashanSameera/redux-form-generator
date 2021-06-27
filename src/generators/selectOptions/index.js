import React, { Component } from "react";
import { Select as AntSelect } from "antd";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        const { input } = this.props;

        input.onChange(value);
    }

    render() {
        const {
            input,
            meta: { touched, error },
            options,
            ...props
        } = this.props;
        let hasError = touched && error !== undefined;
        const { defaultValue, dataList } = options;
        return (
            <div className={`field-wrapper select-field ${hasError ? "has-error" : ""}`}>
                <input ref="selectedValue" type="text" {...input} hidden={true} />
                <AntSelect
                    showSearch={this.props.showSearch}
                    disabled={props.disabled}
                    mode={props.mode}
                    dropdownClassName={options.name}
                    value={input.value ? input.value : defaultValue}
                    onChange={this.handleChange}
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className={options.className || ""}
                >
                    {dataList.map((data, dKey) => (
                        <AntSelect.Option className="wrap-option-text" value={data.key} key={dKey}>
                            {data.value}
                        </AntSelect.Option>
                    ))}
                </AntSelect>
                {hasError && <span className="error">{error}</span>}
            </div>
        );
    }
}
