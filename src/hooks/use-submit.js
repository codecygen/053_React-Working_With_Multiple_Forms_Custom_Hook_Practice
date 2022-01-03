import { useState } from 'react';

const useSubmit = () => {

    const [inputValue, setIntputValue] = useState('');

    const inputChangeHandler = event => {
        setIntputValue(event.target.value);
    };

    return {
        inputValue,
        inputChangeHandler
    };
};

export default useSubmit;
