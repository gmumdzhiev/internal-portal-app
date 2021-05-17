import { FC } from 'react';
import { FieldProps, getIn } from 'formik';
import { TextFieldProps, TextField as BaseTextField } from '@material-ui/core';

const TextField: FC<FieldProps & TextFieldProps> = (props) => {
  const { field, ...otherProps } = props;
  const isTouched = getIn(props.form.touched, props.field.name);
  // props.form.touched["email"]
  const errorMessage = getIn(props.form.errors, props.field.name);
  // props.form.errors["email"]

  return (
    <BaseTextField
      error={Boolean(isTouched && errorMessage)}
      helperText={isTouched && errorMessage ? errorMessage : undefined}
      {...otherProps}
      {...field}
    />
  );
};

export default TextField;