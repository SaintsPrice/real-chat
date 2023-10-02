export interface IValidations {
    isEmpty: boolean;
    minLength: number;
    maxLength: number;
    isEmail?: boolean;
    confirmPass?: string;
};

export interface IUseInputReturn {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    isDirty: boolean;
    validMessages: string;
};