import { Injectable } from '@angular/core';
import { Treat } from '@dessert/api-interfaces';
import { TreatService } from '@dessert/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TreatsActions from './treats.actions';
import { filter, map, tap } from 'rxjs/operators';
import { fetch, pessimisticUpdate } from '@nrwl/angular';

@Injectable()
export class TreatEffects {
  loadTreat$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TreatsActions.loadTreat),
      fetch({
        run: (action) =>
          this.treatService
            .find(action.treatId)
            .pipe(
              map((treat: Treat) => TreatsActions.loadTreatSuccess({ treat }))
            ),
        onError: (action, error) => TreatsActions.loadTreatFailure({ error }),
      })
    )
  );

  loadTreats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TreatsActions.loadTreats), // filter((action) => action.type === TreatsActions.loadTreats.type)
      fetch({
        run: () =>
          this.treatService
            .all()
            .pipe(
              map((treats: Treat[]) =>
                TreatsActions.loadTreatsSuccess({ treats })
              )
            ),
        onError: (action, error) => TreatsActions.loadTreatsFailure({ error }),
      })
    )
  );

  updateTreat$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TreatsActions.updateTreat),
      pessimisticUpdate({
        run: (action) =>
          this.treatService
            .update(action.treat)
            .pipe(
              map((treat: Treat) => TreatsActions.updateTreatSuccess({ treat }))
            ),
        onError: (action, error) => TreatsActions.updateTreatFailure({ error }),
      })
    )
  );

  deleteTreat$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TreatsActions.deleteTreat),
      pessimisticUpdate({
        run: (action) =>
          this.treatService
            .delete(action.treat)
            .pipe(
              map(() =>
                TreatsActions.deleteTreatSuccess({ treat: action.treat })
              )
            ),
        onError: (action, error) => TreatsActions.deleteTreatFailure({ error }),
      })
    )
  );

  createTreat$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TreatsActions.createTreat),
      pessimisticUpdate({
        run: (action) =>
          this.treatService
            .create(action.treat)
            .pipe(
              map((treat: Treat) => TreatsActions.createTreatSuccess({ treat }))
            ),
        onError: (action, error) => TreatsActions.createTreatFailure({ error }),
      })
    )
  );

  constructor(private actions$: Actions, private treatService: TreatService) {}
}
