const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN START":
      return {
        user: null,
        isFetching: true,
        error: false,
      }
    case "LOGIN SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      }
    case "LOGIN FAILURE":
      return {
        user: null,
        isFetching: true,
        error: true,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    default:
      return state;
  }
};

export default Reducer;
