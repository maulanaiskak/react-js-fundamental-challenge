import { useState } from 'react';

const useMyHook = (num1, num2) => {
    const [result, setResult] = useState(0);

    const add = () => {
        console.log(num1, num2, num1 + num2);
        setResult(num1 + num2);
    };

    const min = () => {
        setResult(num1 - num2);
    };

    const multiply = () => {
        setResult(num1 * num2);
    };

    const divide = () => {
        setResult(num1 / num2);
    };

    return {
        result,
        add,
        min,
        multiply,
        divide,
    };
};

export default useMyHook;
