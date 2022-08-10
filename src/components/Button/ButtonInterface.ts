export enum ButtonClassNameEnum {
  FULL = 'full'
}

export interface ButtonInterface {
  name: string;
  className?: ButtonClassNameEnum;
  disabled: boolean;
}