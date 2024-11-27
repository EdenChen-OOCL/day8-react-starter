import {useState} from "react";
import CounterGroupGenerator from "./CounterGroupGenerator";
import CounterGroup from "./CounterGroup";

const MultipleCounter = () => {
    const [counterList, setCounterList] = useState([]);

    const changeSize = (param) => {
        let counterListLength = parseInt(param, 10);
        setCounterList(new Array(counterListLength).fill(0));
    };

    return (
        <div>
            <CounterGroupGenerator changeSize={changeSize}/>
            <CounterGroup counterList={counterList}/>
        </div>
    );
};

export default MultipleCounter;