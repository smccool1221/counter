import React, {useState} from 'react';

const Counter = (props) => {
  
    const { startValue } = props;
    const [counter, setCounter] = useState(startValue);
  
    return (
    <div>
        <p>You have clicked the button {counter} times</p>
        <button onClick={() => setCounter(counter + 1)}>Click Me!</button>

    </div>
  )
}

export default Counter;