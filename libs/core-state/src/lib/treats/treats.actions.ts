import { Treat } from "@dessert/api-interfaces";
import { createAction, props } from "@ngrx/store";

// Select Entity

export const selectTreat = createAction(
  '[TREAT] Select Treat',
  props<{ treatId: string}>()
);

// Load all Entities

export const loadTreats = createAction(
  '[TREAT] Load Treats',
);

export const loadTreatsSuccess = createAction(
  '[TREAT] Treats Loaded Success',
  props<{treats: Treat[]}>()
)
export const loadTreatsFailure = createAction(
  '[TREAT] Treats Loaded Failure',
  props<{ error: any }>()
)

// Load Single Entity

export const loadTreat = createAction(
  '[TREAT] Load Treat',
  props<{ treatId: string }>()
);

export const loadTreatSuccess = createAction(
  '[TREAT] Treat Loaded Success',
  props<{ treat: Treat }>()
);

export const loadTreatFailure = createAction(
  '[TREAT] Treat Loaded Failure',
  props<{ error: any }>()
);

// Load Entity Update

export const updateTreat = createAction(
  '[TREAT] Treat Updated',
  props<{ treat: Treat}>()
);

export const updateTreatSuccess = createAction(
  '[TREAT] Treat Updated Success',
  props<{ treat: Treat}>()
);

export const updateTreatFailure = createAction(
  '[TREAT] Treat Updated Failure',
  props<{ error: any}>()
);

// Load Delete Entity 

export const deleteTreat = createAction(
  '[TREAT] Treat Deleted',
  props<{treat: Treat}>()
);

export const deleteTreatSuccess = createAction(
  '[TREAT] Treat Deleted Success',
  props<{treat: Treat}>()
);

export const deleteTreatFailure = createAction(
  '[TREAT] Treat Deleted Failure',
  props<{error: any}>()
);

// Load Create Entity

export const createTreat = createAction(
  '[TREAT] Create Treat',
  props<{ treat: Treat}>()
);

export const createTreatSuccess = createAction(
  '[TREAT] Create Treat Success',
  props<{ treat: Treat}>()
);

export const createTreatFailure = createAction(
  '[TREAT] Create Treat Failure',
  props<{ error: any }>()
);