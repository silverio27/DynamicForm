export interface IForm {
  id: number;
  name: string;
  fields: IField[];
  actions: IAction[];
  view: IView
}
export interface IField {
  name: string;
  label:string;
  type: "text" | "select" | "boolean" | "number" | "action";
  options?: IOption[];
  value?: any;
  key?: boolean;
  visible?: boolean;
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
export interface IView{
  url:string;
}