import React, { useState } from 'react';

const Button = (props) => {
    const [count, setCount] = useState(0);
    const onChangeEvent = () => {
        setCount(count + 1);
        const { onClick } = props;
        onClick("CallBack Data");

    }
    return (
        <div>
            <button onClick={() => onChangeEvent()}>
                Click Here! {count}
            </button>
        </div>
    );
}

export default Button;