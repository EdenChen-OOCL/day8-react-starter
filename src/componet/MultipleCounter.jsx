import {useState} from "react";
import CounterGroupGenerator from "./CounterGroupGenerator";

const MultipleCounter = () => {
    const [size, setSize] = useState(0);

    const changeSize = (param) => {
        console.log(param);
        // setSize(param);
    };


    return (
        <div>
            <CounterGroupGenerator changeSize={changeSize}/>
        </div>
    );
};

export default MultipleCounter;