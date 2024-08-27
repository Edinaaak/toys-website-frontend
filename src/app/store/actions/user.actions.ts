import { createAction, props } from "@ngrx/store";

import { User } from "src/app/interfaces/User";

export const login = createAction(
  '[Login Component] LoginUser', props<User>()
);

export const logout = createAction('[Navigation Component LogoutUser]');

export const updateUser = createAction( '[Update-user Component] UpdateUser', props<{ painter: any}>()
);

export const addArtsPainting = createAction('[add-arts-painting]', props<{dela : any}>());

export const getProductLength = createAction('[get-product-length]');

export const setProducts = createAction('[set-products]', props<{products: any}>());

export const deleteProduct = createAction('[delete-product]', props<{id: any}>());