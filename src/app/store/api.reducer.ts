import {createReducer, on} from "@ngrx/store";
import { loadUsersFromAPI, loadUsersFromAPISuccess, loadUsersFromAPIFailure } from "./api.actions";
import {UserModel} from "../models/User.model";

export interface ApiDataState {
  usersData : UserModel[];
  error : string,
  loading: boolean
}
const initialState : ApiDataState = {
  usersData : [],
  error : "",
  loading: false
}

export const apiDataReducer = createReducer(
  initialState,
  on(loadUsersFromAPI, (state, action) => {
    console.log("API effect reached in apiDataReducer > loadUsersFromAPI : ", " state = ", state, " action = ", action);
    return {
      ...state, loading: true,  usersData: [], error: ''
    };
  }),

  on(loadUsersFromAPISuccess, (state, { usersData }) => {
    console.log("API effect reached in apiDataReducer > loadUsersFromAPISuccess : ", " state = ", state, " action = ", { usersData } );
    return {...state, loading: false,  usersData: usersData, error: '' };
  }),

  on(loadUsersFromAPIFailure, (state, action) => {
     console.log("API effect reached in apiDataReducer > loadUsersFromAPIFailure : ", " state = ", state, " action = ", action);
     return {...state, loading: false,  usersData: [], error: '' };
  })

);
