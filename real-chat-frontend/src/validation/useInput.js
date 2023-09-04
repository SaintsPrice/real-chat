import { useState } from "react";
import useValidation from "./useValidation";

function useInput(initialValue, validations) {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);

    const valid = useValidation(value, validations).filter(i => i != '')
    const validMessages = valid.filter(i => i != '')

    function onChange(e) {
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