import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className=" text-center">
       <h1>Counter App</h1>
       <div className='flex div-main'>
         <button className='count-button' onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
         <h1 className={count < 5 ? 'bg-red' : count > 100 ? 'bg-green' : 'count'} >{count}</h1>
         <button className='count-button'  onClick={() => setCount(count + 1)}>+</button>
       </div>
    </div>
  );
}

export default App;
