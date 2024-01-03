import { createAction, props } from "@ngrx/store"
import { FormModel, userModel } from "../model/user.model"


// user login actions
export const loginStart=createAction("loginStart",props<{email:string,password:string}>())
export const loginSuccess=createAction("loginSuccess")

// form actions
export const getForms=createAction("getForms")
export const getFormSuccess=createAction("getFormSuccess",props<{forms:FormModel[]}>())
export const deleteForm=createAction("deleteForm",props<{id:string}>())

