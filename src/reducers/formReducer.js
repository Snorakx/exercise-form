const initialState = {
  isSuccess: null,
  errors: {
    msg: {},
    status: null,
    id: null,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ORDER_SUCCESS:
      return {
        ...state,
        isSuccess: true,
      };
    case ORDER_ERROR:
      return {
        ...state,
        isSuccess: false,
        errors: {
          msg: action.payload.message,
          status: action.payload.status,
          id: action.payload.id,
        },
      };
    default:
      return state;
  }
}
