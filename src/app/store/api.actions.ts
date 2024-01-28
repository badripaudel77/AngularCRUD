/**
 *
 */
import {createAction, props} from "@ngrx/store";
import { UserModel } from "../models/User.model";

export const loadUsersFromAPI = createAction('[Load Users From API] Load Users');

export const loadUsersFromAPISuccess = createAction('[Load Users from API Success] Load Users Success',
  props<{ usersData: UserModel[] }>());

export const loadUsersFromAPIFailure = createAction('[Load Users from API Failure] Load Users Failure',
  props<{ error: string }>());

