import { DISHES } from "../shared/dishes";

export const initialState = {
  dishes: DISHES,
};
//pure function
export const Reducer = (state = initialState, action) => {
  return state;
};
