import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action,
  createReducer,
  on
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { updatePassedComponent } from "../actions";

export interface State {
  dynamic: {
    passedComponent: any;
  };
}

export const initialState: State = {
  dynamic: {
    passedComponent: null
  }
};

export const reducers: ActionReducerMap<State> = {
  dynamic: createReducer(
    initialState.dynamic,
    on(updatePassedComponent, (current, { passedComponent }) => {
      return {
        ...current,
        passedComponent
      };
    })
  )
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
