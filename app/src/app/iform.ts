export interface IForm {
  id: number;
  name: string;
  fields: IField[];
  actions: IAction[];
}
export interface IField {
  name: string;
  label:string;
  type: "text" | "select" | "boolean";
  options?: IOption[];
  value: any;
}
export interface IOption {
  id: string;
  value: string;
}
export interface IAction {
  name: string;
  type: "save";
  url: string;
}
