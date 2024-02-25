import './Counter.css';
import iconMinus from '../../assets/images/icon-minus.svg';
import iconPlus from '../../assets/images/icon-plus.svg';

function Counter() {
    return (
        <div className='counter'>
            <button className='button-minus'><img src={iconMinus} alt="minus"/></button>
            <span>0</span>
            <button className='button-plus'><img src={iconPlus} alt="plus"/></button>
        </div>
    )
}

export default Counter;