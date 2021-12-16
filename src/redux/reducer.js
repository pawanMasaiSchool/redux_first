const reducer = (state, action) => {
  switch (action.type) {
    case "INCREAMENT_COUNTER": {
      return {
        ...state,
        const: state.count + action.payload
      };
    }
    default: {
      return state;
    }
  }
};
