import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';

function Counter() {
      const count = useSelector((state) => state.counter.value);
      const dispatch = useDispatch();
      return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                  <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <h1>Counter</h1>
                        <h2>{count}</h2>
                        <div>
                              <button onClick={() => dispatch(increment())}>Increment</button>
                              <button onClick={() => dispatch(decrement())}>Decrement</button>
                              <button onClick={() => dispatch(reset())}>Reset</button>
                        </div>
                  </div>
            </div>

      );
}

export default Counter;
