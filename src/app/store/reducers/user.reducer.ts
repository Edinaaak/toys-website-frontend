import { createReducer, on } from "@ngrx/store";

import { User } from "src/app/interfaces/User";
import { addArtsPainting, login, logout, updateUser } from "../actions/user.actions";

export const initialState : User = {
  expires: '',
  token: '',
  painter: null,
  dela: null,
  role: null,
};

export const userReducer = createReducer(
  initialState,
  on(login, (state, user) => Object.assign({}, state, user)),
  on(logout, () => Object.assign({}, initialState)),
  on(updateUser, (state, {painter}) => ({...state, painter:{...state.painter, ...painter}})),
  on(addArtsPainting, (state, {dela}) => ({...state, dela: state.dela.concat(dela)}))
)


