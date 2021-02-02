export interface IForm {
  children: React.ReactNode;
  method: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface IFormInputsBox {
  children: React.ReactNode;
  marginBottom?: string;
}

export interface IFormInput {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFormButton {
  children: React.ReactNode;
  disabled: boolean;
}
export interface IFormImage {
  src: string;
}
