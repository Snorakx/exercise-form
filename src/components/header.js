import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

let Header = () => {
  return (
    <div className="header-box">
      <p>Choose Your favourite dish</p>
    </div>
  );
};
export default Header;
