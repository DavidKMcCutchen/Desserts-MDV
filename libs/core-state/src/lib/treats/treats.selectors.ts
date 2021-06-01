import { emptyTreat } from "@dessert/api-interfaces";
import { treatAdapter, TreatState, TREAT_FEATURE_KEY } from "./treats.reducer";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getTreatState = createFeatureSelector<TreatState>(TREAT_FEATURE_KEY);

const { selectAll, selectEntities } = treatAdapter.getSelectors();

export const getTreatsLoaded = createSelector(
  getTreatState,
  (state: TreatState) => state.loaded
)

export const getTreatError = createSelector(
  getTreatState,
  (state: TreatState) => state.error
)

export const getAllTreats = createSelector(
  getTreatState,
  (state: TreatState) => selectAll(state)
)

export const getTreatEntities = createSelector(
  getTreatState,
  (state: TreatState) => selectEntities(state)
)

export const getSelectedTreatId = createSelector(
  getTreatState,
  (state: TreatState) => state.selectedId
)

export const getSelectedTreat = createSelector(
  getTreatEntities,
  getSelectedTreatId,
  (entities, selectedId) => (selectedId && entities[selectedId]) || emptyTreat
)