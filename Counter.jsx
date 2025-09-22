import React , {useState} from 'react';

const Counter=() => {
    const[count,setCount] = useState(0);
    const Increment =  () =>
    {
        setCount(count+ 1);
    }
    const Decrement = () =>
    {
        setCount(count- 1);
    }
    const Reset = () =>
    {
        setCount(0);
    }
    return(
        <>
        <button onClick={Increment}> Increment </button>
        <label> {count}</label>
        <button onClick={Decrement}> Decrement</button>
        <button onClick={Reset}> Reset</button>
        </>
    );
}

export default Counter;