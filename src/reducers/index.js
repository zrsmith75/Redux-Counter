import { INCREMENT, DECREMENT } from "../actions";

const initialState = {
  count: 0
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      // Fill in the body of this case
      // Assign const and use implicit return to modify
      // state
      // Used standard counter plus 1 method
      const incObject = {
        count: state.count + 1
      };

      return incObject;
    case DECREMENT:
      // Fill in the body of this case
      // Used increment operator here to try both methods
      const decObject = {
        count: --state.count
      };
      return decObject;
    default:
      return state;
  }
};
