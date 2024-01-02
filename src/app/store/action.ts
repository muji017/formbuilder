import { createAction, props } from "@ngrx/store"
import { userModel } from "../model/user.model"


// user login actions
export const loginStart=createAction("loginStart",props<{email:string,password:string}>())
export const loginSuccess=createAction("loginSuccess")
