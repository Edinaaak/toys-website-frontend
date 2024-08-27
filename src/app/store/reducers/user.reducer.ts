import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";

import { User } from "src/app/interfaces/User";
import { addArtsPainting, deleteProduct, getProductLength, login, logout, setProducts, updateUser } from "../actions/user.actions";

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
  on(addArtsPainting, (state, {dela}) => ({...state, dela: state.dela.concat(dela)})),

)

export const initialProductState = {
  products: [] as any[]
}

export const productReducer = createReducer(
  initialProductState,
  on(getProductLength, (state) => state),
  on(setProducts, (state, { products }) => ({
    ...state,
    products: products
  })),
  on(deleteProduct, (state, { id }) => ({
    ...state,
    products: state.products.filter(p => p.id !== id)
  })));

export const selectProductState = createFeatureSelector<{ products: any[] }>('products');

// Selector za broj proizvoda
export const selectProductCount = createSelector(
  selectProductState,
  (state) => state.products.length
);
