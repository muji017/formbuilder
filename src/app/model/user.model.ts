
export interface userModel{
    token:string,
    email:string,
    password?:string
}

export interface FormModel {
    formName?:string
    _id?: string;
    textbox?: string[];
    dropBox?: { head: string; option: string[] }[];
    checkBox?: { head: string; option: string[] }[];
}

export interface FormList extends FormModel{
    forms:FormModel[]
}