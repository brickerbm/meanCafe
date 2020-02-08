import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as ConfigActions from '../actions/config.actions';
import { HttpService } from '../../services/http.service';

@Injectable()
export class ConfigEffects {
  constructor(private hs: HttpService, private actions$: Actions) {}

  GetFixtures$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ConfigActions.getFixtures),
      mergeMap(action =>
        this.hs.getFixtures().pipe(
          map((data: string[]) =>
            ConfigActions.successGetFixtures({ fixtures: data })
          ),
          catchError((error: Error) =>
            of(ConfigActions.errorGettingFixtures(error))
          )
        )
      )
    )
  );

  SubmitConfig$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ConfigActions.submitConfig),
      mergeMap(action =>
        this.hs.sendConfigData(action.config).pipe(
          map((data: string) =>
            ConfigActions.successSubmitConfig({ payload: data })
          ),
          catchError((error: Error) =>
            of(ConfigActions.errorSubmitConfig(error))
          )
        )
      )
    )
  );
}
