import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import TimePicker from '@material-ui/lab/TimePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

export const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  min,
  max,
  step,
  type,
  value,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <TextField
      id="outlined-basic"
      variant="outlined"
      label={label}
      type={type}
      InputProps={{
        inputProps: {
          min: min,
          max: max,
          step: step,
        },
      }}
      {...input}
      {...custom}
    />
    {renderFromHelper({ touched, error })}
  </FormControl>
);

export const renderSelectField = ({
  input,
  name,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="dish-type">Dish type</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      label={label}
      inputProps={{
        name: name,
        id: 'dish_type',
      }}>
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

export const renderSliderForm = ({
  input,
  name,
  min,
  max,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <div>
    <Typography id="discrete-slider" gutterBottom>
      {label}
    </Typography>
    <Slider
      {...input}
      step={1}
      valueLabelDisplay="auto"
      marks
      min={parseInt(min)}
      max={parseInt(max)}
      {...custom}
    />
  </div>
);
