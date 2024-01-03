import { createFeatureSelector, createSelector } from "@ngrx/store"
import { FormModel } from "../model/user.model"

export const formsStateName="formsStateName"


export const formState = createFeatureSelector<FormModel[]>(formsStateName)
export const getAllForms = createSelector(formState,
    (state: FormModel[]) => {
        return state
    }
)
