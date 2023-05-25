import { useState } from "react";

const Counter = () =>{
        let [count, setCount] = useState(0);
        return (
            <div className="product__counter counter">
                <button className="counter__btnL" onClick={() => {count ===  0 ? setCount(count) : setCount(count-1)}}>-</button>
                <div className="counter__value">{count}</div>
                <button className="counter__btnR" onClick={() => {setCount(count+1)}}>+</button>
            </div>
        )
    }
export default Counter;