import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import CustomButton from '../components/customButton';
import {
  renderTextField,
  renderSelectField,
  renderSliderForm,
} from '../components/materialUiRenderComponents';
import {
  SliderForm,
  NoOfSlicesField,
  SelectDishType,
  DiameterOfPizza,
  CustomField,
} from '../components/additional-inputs';
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }
  if (!values.no_of_slices) {
    errors.no_of_slices = 'Required';
  } else if (values.no_of_slices > 99) {
    errors.no_of_slices = 'Maybe too much?';
  }
  if (!values.slices_of_bread) {
    errors.slices_of_bread = 'Required';
  } else if (values.slices_of_bread > 99) {
    errors.slices_of_bread = 'Maybe too much?';
  }
  if (!values.preparation_time) {
    errors.preparation_time = 'Required';
  }
  if (!values.type) {
    errors.type = 'Required';
  }
  if (!values.diameter) {
    errors.diameter = 'Required';
  }

  return errors;
};

let ContactForm = (props) => {
  const { handleSubmit, whatType } = props;
  return (
    <form className="form-holder" onSubmit={handleSubmit}>
      <div className="primary-options-box">
        <div className="input-label-holder">
          <label>Type dish name:</label>
          <CustomField label="Dish name" name="name" type="text" />
        </div>
        <div className="input-label-holder">
          <label>Preparation time:</label>
          <CustomField type="time" name="preparation_time" step="1" required />
        </div>
        <SelectDishType />
      </div>

      {whatType === 'soup' ? (
        <SliderForm />
      ) : whatType === 'pizza' ? (
        <div className="additional-group-inputs">
          <div className="input-label-holder">
            <NoOfSlicesField
              label="How many slices of pizza You want?"
              name="no_of_slices"
            />
            <DiameterOfPizza />
          </div>
        </div>
      ) : whatType === 'sandwich' ? (
        <div className="additional-group-inputs">
          <div className="input-label-holder">
            <label>How hungry are You?</label>
            <NoOfSlicesField
              name="slices_of_bread"
              label="Slices of bread"
              component={renderTextField}
            />
          </div>
        </div>
      ) : (
        ''
      )}
      <CustomButton handleType="submit">Confirm order</CustomButton>
    </form>
  );
};

ContactForm = reduxForm({
  form: 'order',
  validate,
})(ContactForm);
const selector = formValueSelector('order');
ContactForm = connect((state) => {
  const whatType = selector(state, 'type');
  return {
    whatType,
  };
})(ContactForm);

export default ContactForm;
