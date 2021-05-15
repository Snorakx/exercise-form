import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import {
  renderTextField,
  renderSelectField,
  renderSliderForm,
} from '../components/materialUiRenderComponents';

export const CustomField = (props) => {
  return (
    <Field
      label={props.label}
      name={props.name}
      component={renderTextField}
      type={props.type}
      step={props.step}
      required
    />
  );
};

export const SliderForm = (props) => {
  return (
    <div className="additional-group-inputs">
      <div className="input-label-holder">
        <label>Now a little more specific:</label>
        <Field
          name="spiciness_scale"
          type="number"
          component={renderSliderForm}
          label="Spicenes scale"
          min={1}
          max={10}
          helperText="between 1-10"
          parse={(value) => Number(value)}
        />
      </div>
    </div>
  );
};

export const NoOfSlicesField = (props) => {
  return (
    <Field
      label={props.label}
      name={props.name}
      component={renderTextField}
      type="number"
      min="1"
      value="2"
      required
      parse={(value) => Number(value)}
    />
  );
};

export const SelectDishType = (props) => {
  return (
    <div className="input-label-holder">
      <label>Please choose dish type:</label>
      <Field
        name="type"
        label="Dish type"
        component={renderSelectField}
        required>
        <option value="" disabled />
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </Field>
    </div>
  );
};
export const DiameterOfPizza = (props) => {
  return (
    <div class="second-additional-field">
      <Field
        name="diameter"
        component={renderTextField}
        type="number"
        step="0.2"
        min="22"
        max="77"
        value="33.4"
        label="Choose size."
        helperText="*diameter in cm"
        parse={(value) => Number(value)}
        required
      />
    </div>
  );
};
