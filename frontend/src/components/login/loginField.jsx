import React from "react";
import { TextField } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const LoginField = ({ name, label, required, type }) => {
  const { control } = useFormContext();

  return (
      <Controller
        as={TextField}
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
        type={type}
        variant = 'outlined'
        margin = 'normal'
        defaultValue = {''}
      />
  );
};

export default LoginField;
