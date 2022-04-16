export interface IFlow {
  steps: IStep[]
}
export interface IStep {
  name: string;
  type: "form" | "approval" | "drive";
  typeInfo: IType;
  value: IForm | IApproval | IDrive
}
export interface IType {
  name: string;
  value: string;
  subtitle: string;
  icon: string;
}
export interface IForm {
  id: number;
  name: string;
  fields: IField[];
  actions: IAction[];
  view: IView;
}
export interface IField {
  name: string;
  label: string;
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
export interface IView {
  url: string;
}
export interface IApproval{

}
export interface IDrive{

}
