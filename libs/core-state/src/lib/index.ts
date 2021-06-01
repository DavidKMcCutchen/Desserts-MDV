import { ActionReducerMap } from "@ngrx/store";
import * as fromTreats from './treats/treats.reducer';

export interface AppState {
  [fromTreats.TREAT_FEATURE_KEY]: fromTreats.TreatState
}

export const reducers: ActionReducerMap<AppState> = {
  [fromTreats.TREAT_FEATURE_KEY]: fromTreats.treatReducer
}