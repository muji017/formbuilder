
export interface userModel{
    token:string,
    email:string,
    password?:string
}

export interface FormModel {
    id?: string;
    textbox?: string[];
    dropBox?: { head: string; option: string[] }[];
    checkBox?: { head: string; option: string[] }[];
}