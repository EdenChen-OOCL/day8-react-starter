import Counter from "./Counter";

const CounterGroup = (props) => {
    const changeSum = props.changeSum;

    return (
        props.counterList.map((index) => <Counter changeSum={changeSum}/>)
    );
};

export default CounterGroup;

