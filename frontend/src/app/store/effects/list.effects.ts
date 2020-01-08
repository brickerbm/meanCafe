import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ListActions from '../actions/list.actions';
import { HttpService } from '../../services/http.service';
import { Report } from '../../models/ngrxReport.model';

@Injectable()
export class ListEffects {
  constructor(private hs: HttpService, private action$: Actions) {}

  GetReports$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ListActions.beginGetReports),
      mergeMap(action =>
        this.hs.getReports().pipe(
          map((data: Report[]) => {
            return ListActions.successGetReports({ payload: data });
          }),
          catchError((error: Error) => {
            return of(ListActions.errorGettingReports(error));
          })
        )
      )
    )
  );

  // DeleteReport$: Observable<Action> = createEffect(() => );
}
