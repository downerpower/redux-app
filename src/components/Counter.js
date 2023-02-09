import { counterActions } from '../store/counter';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment)
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement)
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter.counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button>Toggle Counter</button>
    </main>
  );
};

export default Counter;
