import React from 'react';
import {Input, FormFeedback} from 'reactstrap';
import {ErrorMessage, getIn} from 'formik';

export default function BootstrapField(props) {
    const {field, form, ...rest} = props;
    const touched = getIn(form.touched, field.name);
    const errors = getIn(form.errors, field.name);
    const invalid = touched && errors;
    const valid = touched && !errors;
    return <>
        <Input valid={valid} invalid={invalid} {...field} {...rest}/>
        <ErrorMessage name={field.name}>
            {msg => <FormFeedback valid={!invalid}>{msg}</FormFeedback>}
        </ErrorMessage>
    </>
}