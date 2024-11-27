import Counter from "./Counter";

const CounterGroup = (props) => {

    return (
        props.counterList.map((index) => <Counter/>)
    );
};

export default CounterGroup;

