import {
  ORDER_ERROR,
  ORDER_SUCCESS,
  ORDER_SENDING,
} from '../actions/formTypes';

export const sendOrder = (data) => {
  const bodyData = {
    ...data,
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  };
  console.log(requestOptions);
  fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
