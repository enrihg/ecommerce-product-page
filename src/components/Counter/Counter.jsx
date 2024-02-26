import './Counter.css';
import iconMinus from '../../assets/images/icon-minus.svg';
import iconPlus from '../../assets/images/icon-plus.svg';
import { useState } from 'react';

function Counter() {
    const [qty, setQty] = useState(0);
    const add = () => {
        setQty(qty + 1);
    }
    const substract = () => {
        (qty > 0) ? setQty(qty - 1) : '';
    }

    return (
        <div className='counter'>
            <button onClick={substract} className='button-minus'><img src={iconMinus} alt="minus"/></button>
            <span>{qty}</span>
            <button onClick={add} className='button-plus'><img src={iconPlus} alt="plus"/></button>
        </div>
    )
}

export default Counter;