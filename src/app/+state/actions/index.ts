import { PassableComponent } from "src/app/models/passable-component";

import { Type } from "@angular/core";
import { createAction, props } from "@ngrx/store";

export const updatePassedComponent = createAction(
  "[App] Update passed component",
  props<{
    passedComponent: Type<PassableComponent>;
  }>()
);
