import { Treat } from "@dessert/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as TreatsActions from './treats.actions';

export const TREAT_FEATURE_KEY = 'treats';

export interface TreatState extends EntityState<Treat> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface TreatPartialState {
  readonly [TREAT_FEATURE_KEY]: TreatState;
}

export const treatAdapter: EntityAdapter<Treat> = createEntityAdapter<Treat>();

export const initialTreatState: TreatState = treatAdapter.getInitialState(
  {
    loaded: false
  }
);

const onFailure = (state, {error}): TreatState => ({ ...state, error});

const onDispatch = (state, action): TreatState => ({
  ...state,
  loaded: false,
  error: null
});

const _treatReducer = createReducer(
  initialTreatState,
  on(
    TreatsActions.loadTreatFailure,
    TreatsActions.loadTreatsFailure,
    TreatsActions.deleteTreatFailure,
    TreatsActions.updateTreatFailure,
    TreatsActions.createTreatFailure,
    onFailure
  ),
  on(
    TreatsActions.loadTreat,
    TreatsActions.loadTreats,
    TreatsActions.deleteTreat,
    TreatsActions.updateTreat,
    TreatsActions.createTreat,
    onDispatch
  ),
  on(
    TreatsActions.loadTreatSuccess, (state, { treat}) => 
    treatAdapter.upsertOne(treat, {...state, loaded: true })
  ),
  on(
    TreatsActions.selectTreat, (state, {treatId}) => ({
      ...state,
      selectedId: treatId
    })
  ),
  on(
    TreatsActions.loadTreatsSuccess, (state, { treats }) =>
    treatAdapter.setAll(treats, {...state, loaded: true })
  ),
  on(
    TreatsActions.deleteTreatSuccess, (state, { treat }) => 
    treatAdapter.removeOne(treat.id, {...state, loaded: true})
  ),
  on(
    TreatsActions.updateTreatSuccess, (state, { treat }) => 
    treatAdapter.updateOne(
      {id: treat.id, changes: treat },
      {...state, loaded: true}
    )
  ),
  on(
    TreatsActions.createTreatSuccess, (state, { treat }) => 
    treatAdapter.addOne(treat, {...state, loaded: true})
  )
);

export function treatReducer(
  state: TreatState | undefined,
  action: Action
) {
  return _treatReducer(state, action)
}