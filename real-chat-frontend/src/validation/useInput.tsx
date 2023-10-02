import { useState } from "react";
import useValidation from "./useValidation";
import { IUseInputReturn, IValidations } from "../types/validationType";

const useInput = (initialValue: string, validations: IValidations): IUseInputReturn => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);

    const validMessages = useValidation(value, validations)

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    };

    function onBlur() {
        setIsDirty(true)
    };

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        validMessages
    }
};

export default useInput;