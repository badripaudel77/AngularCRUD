/**
 * This effect file will be associated with effects associated with api calling for side.
 */

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { JsonPlaceholderUserService } from '../services/json-placeholder-user.service';
import * as apiActions from './api.actions';

@Injectable()
export class ApiEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apiActions.loadUsersFromAPI),
      mergeMap(() =>
        this.jsonPlaceholderUserService.loadUsers().pipe(
          map((users) =>
            apiActions.loadUsersFromAPISuccess({ usersData: users })),
            catchError((error) => of(apiActions.loadUsersFromAPIFailure({ error: error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private jsonPlaceholderUserService: JsonPlaceholderUserService) {

  }
}
