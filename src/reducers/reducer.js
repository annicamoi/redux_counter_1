import * as actionType from "../actions/actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionType.DECREMENT:
      return { ...state, counter: state.counter > 0 ? state.counter - 1 : 0 };
    case actionType.ADD:
      return { ...state, counter: state.counter + action.value };
    case actionType.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case actionType.DELETE_RESULT:
      const updateArray = state.results.filter(
        (item) => item.id !== action.item
      );
      return {
        ...state,
        results: updateArray,
      };
    case actionType.RESET:
      return {
        ...state,
        counter: 0,
      };
  }
  return state;
};

const initialState = {
  counter: 0,
  results: [
    {
      id: 1,
      value: "testing",
    },
    {
      id: 2,
      value: "stupid data",
    },
  ],
};

export default reducer;
