import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EConfigActions } from '../actions/config.actions';

@Injectable()
export class ConfigEffects {
  constructor(private actions$: Actions) {}
}
