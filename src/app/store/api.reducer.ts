import {createReducer, on} from "@ngrx/store";
import { loadUsersFromAPI, loadUsersFromAPISuccess, loadUsersFromAPIFailure } from "./api.actions";
import {UserModel} from "../models/User.model";

const initialState = {
  usersData : <UserModel[]>[],
  error : "",
  loading: false
}

export const apiDataReducer = createReducer(
  initialState,
  on(loadUsersFromAPI, (state, action) => {
    console.log("API effect reached in apiDataReducer > loadUsersFromAPI : ", " state = ", state, " action = ", action);
    return {...state, loading: true,  usersData: [], error: '' };
  }),

  on(loadUsersFromAPISuccess, (state, action) => {
    console.log("API effect reached in apiDataReducer > loadUsersFromAPISuccess : ", " state = ", state, " action = ", action );
    return {...state, loading: false,  usersData: action.usersData, error: '' };
  }),

  on(loadUsersFromAPIFailure, (state, action) => {
     console.log("API effect reached in apiDataReducer > loadUsersFromAPIFailure : ", " state = ", state, " action = ", action);
     return {...state, loading: false,  usersData: [], error: '' };
  })

);
