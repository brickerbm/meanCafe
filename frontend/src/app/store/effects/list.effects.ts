import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ListActions from '../actions/list.actions';
import { HttpService } from '../../services/http.service';
import { Report } from '../../models';

@Injectable()
export class ListEffects {
  constructor(
    private hs: HttpService,
    private action$: Actions
  ) {}

  GetReports$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ListActions.GetReports, ListActions.DeleteReportSuccess),
      mergeMap(() =>
        this.hs.getReports().pipe(
          map((reports: Report[]) => ListActions.GetReportsSuccess({ reportsList: reports })),
          catchError((error: Error) => of(ListActions.GetReportsFail(error)))
        )
      )
    )
  );

  DeleteReport$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ListActions.DeleteReport),
      mergeMap(action =>
        this.hs.deleteReport(action.report).pipe(
          map((res: Report) => ListActions.DeleteReportSuccess({ report: res })),
          catchError((error: Error) => of(ListActions.DeleteReportFail(error)))
        )
      )
    )
  );
}
