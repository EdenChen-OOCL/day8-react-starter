import {useState} from "react";
import CounterGroupGenerator from "./CounterGroupGenerator";
import CounterGroup from "./CounterGroup";
import CounterGroupSum from "./CounterGroupSum";

const MultipleCounter = () => {
    const [counterList, setCounterList] = useState([]);
    
    const [countSum, setCountSum] = useState(0);

    const changeSize = (param) => {
        let counterListLength = parseInt(param, 10);
        setCounterList(new Array(counterListLength).fill(0));
        // Reset sum
        setCountSum(0);
    };

    const changeSum = (addNumber) => {
        setCountSum(countSum + addNumber);
    }

    return (
        <div>
            <CounterGroupGenerator changeSize={changeSize}/>
            <CounterGroupSum countSum={countSum}/>
            <CounterGroup counterList={counterList} changeSum={changeSum}/>
        </div>
    );
};

export default MultipleCounter;