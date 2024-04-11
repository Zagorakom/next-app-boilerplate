'use client';

import { useEffect, useState } from 'react';
import { Validation, ValidationType } from '@utils/validation';

export type ValidationRulesType = {
    [stateObjectKey: string]: ValidationType | ((value: any) => boolean)
};

/*******************************************************
// ---- Пример аргумента rules: ValidationRulesType ----

const validationRulesForHook: ValidationRulesType = {
	phone: 'phone/world',
	email: 'email',
	pin_integration: '123',
	// pin_integration: (val) => Number(val) > 3,
};
*******************************************************/

export type ValidationErrorMessagesType = {
    [stateObjectKey: string]: string
};

/*******************************************************
// ---- Пример аргумента errorMessages: ValidationErrorMessagesType ----

const errorMessagesForHook: ValidationErrorMessagesType = {
	phone: 'Номер телефона (Пример: +7 978 346 22 22)',
	email: 'E-mail (Пример: company1234@gmail.com)',
	pin_integration: 'Только цифры',
};
*******************************************************/

export function useValidation(
    stateObject: any,
    rules: ValidationRulesType,
    errorMessages?: ValidationErrorMessagesType,
): [boolean, ValidationErrorMessagesType] {
    const [errors, setErrors] = useState({
        ...Object.keys(rules).reduce((acc, key) => {
            // @ts-ignore
            acc[key] = '';
            return acc;
        }, {})
	});
    const [isValidAll, setIsValidAll] = useState(true);

    const getErrorMessageByKey = (key: string) => {
        if (errorMessages && errorMessages[key]) {
            return errorMessages[key];
        }
        return 'Неверный формат';
    };
	
    useEffect(
		() => {
			setErrors(
                Object.keys(rules).reduce((acc, stateObjectKey) => {
                    if (typeof rules[stateObjectKey] === 'string') {
                        if (rules[stateObjectKey] !== 'isNotEmpty') {
                            // @ts-ignore
                            acc[stateObjectKey] = (Validation.init(stateObject[stateObjectKey], rules[stateObjectKey]) || stateObject[stateObjectKey] === '') ? '' : getErrorMessageByKey(stateObjectKey);
                        } else {
                            // @ts-ignore
                            acc[stateObjectKey] = Validation.init(stateObject[stateObjectKey], rules[stateObjectKey]) ? '' : getErrorMessageByKey(stateObjectKey);
                        }
                    } else if (typeof rules[stateObjectKey] === 'function') {
                        // @ts-ignore
                        acc[stateObjectKey] = rules[stateObjectKey](stateObject[stateObjectKey]) ? '' : getErrorMessageByKey(stateObjectKey);
                    }
                    return acc;
                }, {})
            );
		},
		// [stateObject, rules]
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
            rules, // eslint-disable-next-line react-hooks/exhaustive-deps
            ...Object.keys(rules).reduce(
                (acc, stateObjectKey) => acc.concat(stateObject[stateObjectKey]),
                []
            )
        ]
	);

    useEffect(
        () => {
            setIsValidAll(
                // @ts-ignore
                Object.keys(errors).every((key) => errors[key] === '')
            );
        },
        [errors]
    );

	return [isValidAll, errors];
}
