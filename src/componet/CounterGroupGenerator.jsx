import {useState} from "react";

const CounterGroupGenerator = (props) => {
    const [size, setSize] = useState(0);

    const handleChange = (event) => {
        setSize(event.target.value);
        props.changeSize(event.target.value);
    };

    const resetSize = () => {
        setSize(0);
        props.changeSize(0);
    };

    return (
        <div>
            <span>Size: </span>
            <input min={0} max={20} type={"number"} value={size} onChange={handleChange}/>
            <button onClick={resetSize}>reset</button>
        </div>
    )
}

export default CounterGroupGenerator;