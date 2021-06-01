import { Injectable } from "@angular/core";
import { Treat } from "@dessert/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { filter, map } from "rxjs/operators";
import * as TreatsActions from './treats.actions';
import * as TreatsSelectors from './treats.selectors';
import * as fromTreats from './treats.reducer';

@Injectable({
  providedIn: 'root',
})
export class TreatFacade {
  allTreats$ = this.store.pipe(
    map((state) => TreatsSelectors.getAllTreats(state)),
  )
  // allTreats$ = this.store.pipe(
  //   select(TreatsSelectors.getAllTreats)
  // );
  selectedTreats$ = this.store.pipe(select(TreatsSelectors.getSelectedTreat));
  loaded$ = this.store.pipe(select(TreatsSelectors.getTreatsLoaded));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
    action.type === TreatsActions.createTreat({} as any) .type ||
    action.type === TreatsActions.deleteTreat({} as any) .type ||
    action.type === TreatsActions.updateTreat({} as any) .type 
  ),
  )
  selectTreat(treatId: string) {
    this.dispatch(TreatsActions.selectTreat({ treatId }));
  }

  loadTreats() {
    this.dispatch(TreatsActions.loadTreats());
  }

  loadTreat(treatId: string) {
    this.dispatch(TreatsActions.loadTreat({ treatId }));
  }

  saveTreat(treat: Treat) {
    treat.id ? this.updateTreat(treat) : this.createTreat(treat);
  }

  createTreat(treat: Treat) {
    this.dispatch(TreatsActions.createTreat({ treat }));
  }

  updateTreat(treat: Treat) {
    this.dispatch(TreatsActions.updateTreat({ treat }));
  }

  deleteTreat(treat: Treat) {
    this.dispatch(TreatsActions.deleteTreat({ treat }))
  }
  
  dispatch(action: Action) {
    this.store.dispatch(action)
  }

  constructor(
    private store: Store<fromTreats.TreatPartialState>,
    private actions$: ActionsSubject
  ) {}
}
