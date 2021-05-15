import React from 'react';
import ContactForm from '../../components/formComponent';
import Wrapper from '../../components/wrapper';
import Header from '../../components/header';
import { reset, reduxForm } from 'redux-form';
import { sendOrder } from '../../reducers/actions/formActions';

class HomeScreen extends React.Component {
  submit = (values, dispatch) => {
    // print the form values to the console
    dispatch(reset('order')); // string here is the name of the form, check the export default reduxForm below.
    sendOrder(values);
  };
  render() {
    return (
      <Wrapper>
        <Header />
        <ContactForm onSubmit={this.submit} />
      </Wrapper>
    );
  }
}
export default HomeScreen;
