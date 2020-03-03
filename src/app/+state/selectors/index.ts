import { createSelector } from "@ngrx/store";

import { State } from "../reducers/index";

const getRootState = (state: State) => state;

export const getPassedComponent = createSelector(getRootState, state => {
  return state.dynamic.passedComponent;
});
