import {useState} from "react";

const CounterGroupGenerator = (props) => {
    const [size, setSize] = useState(0);

    const handleChange = (event) => {
        var newValue = event.target.value;
        if (newValue < 0) {
            newValue = 0;
        } else if (newValue > 20) {
            newValue = 20;
        }
        setSize(newValue);
    };

    const resetSize = () => {
        props.changeSize(size);
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