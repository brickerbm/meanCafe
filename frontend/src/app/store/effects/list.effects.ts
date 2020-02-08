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
  constructor(
    private hs: HttpService,
    private action$: Actions
  ) {}

  GetReports$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ListActions.getReports, ListActions.successDeleteReport),
      mergeMap(action =>
        this.hs.getReports().pipe(
          map((data: Report[]) => ListActions.successGetReports({ reports: data })),
          catchError((error: Error) => of(ListActions.errorGettingReports(error)))
        )
      )
    )
  );

  DeleteReport$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ListActions.deleteReport),
      mergeMap(action =>
        this.hs.deleteReport(action.report).pipe(
          map((data: Report) => ListActions.successDeleteReport({ report: data })),
          catchError((error: Error) => of(ListActions.errorDeletingReport(error)))
        )
      )
    )
  );
}
