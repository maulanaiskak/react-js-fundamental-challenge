import { useEffect, useState } from 'react';
import useMyHook from '../components/MyHook/UseMyHook';
import './Calculator.css';

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operator, setOperator] = useState(null);
    const [display, setDisplay] = useState(0);
    const { result, add, min, multiply, divide } = useMyHook(num1, num2);

    useEffect(() => {
        setDisplay(result);
        return () => console.log('call');
    }, [result]);

    const handleChange = (event) => {
        const value = Number(num2 + event.target.value);
        console.log(value);
        setNum2(value);
        setDisplay(value);
    };

    const handleOperator = (event) => {
        const value = event.target.value;
        console.log(value);
        setOperator(value);
        setDisplay(value);
        setNum1(num2);
        setNum2(0);
    };

    const handleClear = () => {
        setNum1(0);
        setNum2(0);
        setOperator(null);
        setDisplay(0);
    };

    const handleResult = () => {
        switch (operator) {
            case '+':
                add();
                break;
            case '-':
                min();
                break;
            case 'x':
                multiply();
                break;
            case '/':
                divide();
                break;
            default:
                break;
        }
    };

    return (
        <div className="container">
            <div className="screen">{display}</div>
            <div className="button-container">
                <button className="button" value="9" onClick={handleChange}>
                    9
                </button>
                <button className="button" value="8" onClick={handleChange}>
                    8
                </button>
                <button className="button" value="7" onClick={handleChange}>
                    7
                </button>
                <button
                    className="button opr"
                    value="+"
                    onClick={handleOperator}
                >
                    +
                </button>
                <button className="button" value="6" onClick={handleChange}>
                    6
                </button>
                <button className="button" value="5" onClick={handleChange}>
                    5
                </button>
                <button className="button" value="4" onClick={handleChange}>
                    4
                </button>
                <button
                    className="button opr"
                    value="-"
                    onClick={handleOperator}
                >
                    -
                </button>
                <button className="button" value="3" onClick={handleChange}>
                    3
                </button>
                <button className="button" value="2" onClick={handleChange}>
                    2
                </button>
                <button className="button" value="1" onClick={handleChange}>
                    1
                </button>
                <button
                    className="button opr"
                    value="x"
                    onClick={handleOperator}
                >
                    x
                </button>
                <button className="button" value="0" onClick={handleChange}>
                    0
                </button>
                <button className="button clear" onClick={handleClear}>
                    C
                </button>
                <button className="button equals" onClick={handleResult}>
                    =
                </button>
                <button
                    className="button opr"
                    value="/"
                    onClick={handleOperator}
                >
                    :
                </button>
            </div>
        </div>
    );
};

export default Calculator;
