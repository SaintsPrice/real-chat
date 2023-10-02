import { useEffect, useState } from "react";
import { IValidations } from "../types/validationType";

const useValidation = (value: string, validations: IValidations) => {

    const [isEmpty, setIsEmpty] = useState<string>('');
    const [minLengthError, setMinLengthError] = useState<string>('');
    const [maxLengthError, setMaxLengthError] = useState<string>('');
    const [isEmail, setIsEmail] = useState<string>('');
    const [isPasswordsEquals, setIsPasswordsEquals] = useState<string>('');

    const validateEmail = (email: string): RegExpMatchArray | null => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    useEffect(() => {

        if(!value) {
            setIsEmpty('Это обязательное поле')
            setMinLengthError('')
            setMaxLengthError('')
            setIsEmail('')
            setIsPasswordsEquals('')
        }

        else {
            setIsEmpty('')

            for(const validation in validations) {
                switch(validation) {
                    case 'minLength':
                        if(value.length < validations[validation]) {
                            setMinLengthError('Слишком мало символов')
                        }
                        else {
                            setMinLengthError('')
                        }
                    break
    
                    case 'maxLength':
                        if(value.length >= validations[validation]) {
                            setMaxLengthError('Слишком много символов')
                            setIsEmail('')
                        }
                        else {
                            setMaxLengthError('')
                        }
                    break
    
                    case 'isEmail':
                        if(!maxLengthError) {
                            validateEmail(value) === null ? setIsEmail('Введен некорректный email') : setIsEmail('')
                            setMinLengthError('')
                        }
                    break

                    case 'confirmPass':
                        if(value === validations[validation]) {
                            setIsPasswordsEquals('')
                        }
                        else {
                            setIsPasswordsEquals('Пароли не совпадают')
                            setMinLengthError('')
                            setMaxLengthError('')
                        }
                }
            }
        }
    }, [value]);

    const validMessage = [
        isEmpty,
        minLengthError,
        maxLengthError,
        isEmail,
        isPasswordsEquals].filter(message => message != '').join(' ')

    return validMessage
};

export default useValidation;