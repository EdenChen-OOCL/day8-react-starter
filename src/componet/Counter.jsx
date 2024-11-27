import {useState} from "react";
import "./Counter.css"

const Counter = () => {

    const [number, setNumber] = useState(0);

    const addNumber = () => {
        setNumber(number + 1);
    };

    const subNumber = () => {
        setNumber(number - 1);
    };

    return (
        <div className="counter-wrapper">
            <button onClick={addNumber}>+</button>
            <div>{number? number: 0}</div>
            <button onClick={subNumber}>-</button>
        </div>
    );
}

export default Counter;