import { createReducer, on } from "@ngrx/store"
import { formState } from "./state"
import { getFormSuccess } from "./action"

// trainer
const _allFormsReducer= createReducer(
    formState,
    on(getFormSuccess, (_state, { forms}) => {
        console.log(forms);
      return  Object.values(forms)
      
    }),
  )

  export function allFormsReducer(state:any, action:any){
    return _allFormsReducer(state,action)
  }