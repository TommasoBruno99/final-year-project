export interface IForm {
    children: React.ReactNode;
}

export interface IFormInner {
    children: React.ReactNode;
    method: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface IFormTitle {
    children: React.ReactNode;
}

export interface IFormInput {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFormSubmit {
    children: React.ReactNode;
    disable: boolean;
}

export interface IFormDescription {
    children: React.ReactNode;
}

export interface IFormLink {
    to: string;
    children: React.ReactNode;
}