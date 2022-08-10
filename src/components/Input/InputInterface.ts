export enum InputTypeEnum {
  TEXT     = 'text',
  PASSWORD = 'password',
  EMAIL    = 'email'
}
export interface InputInterface {
  type: InputTypeEnum,
  name: string,
  placeholder: string,
  [prop: string]: any;
}