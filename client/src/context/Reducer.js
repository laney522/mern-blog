const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      }
    case "LOGIN FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    case "UPDATE_START":
      return {
        ...state,
        isFetching: true
      };
    case "UPDATE_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "UPDATE_FAILURE":
      return {
        user: state.user,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default Reducer;
