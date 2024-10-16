import { useState } from 'react'
import './App.css'

function App() {
  //HOOK useState : chnages state everywhere
  let [count, setCount] = useState(15);
  let [message, setmessage] = useState("");
 
  function addnum(){
    
    if(count==20){
     setmessage("can't add more than 20")
    }
    else{
    setmessage('')
    setCount(count+1);//will update evrywhere and updates count as well
    }
  }

  function decnum(){
    if(count==0){
      setmessage("can't decrease less than 0")
    }
    
    else{
    setmessage('')
    setCount(count-1);
  }}
  return (
    <>
      <div>
       <p>Counter Example</p>
       <p>{message}</p>
      </div>
      <h1>
        <button >Counter : {count}</button>
      </h1>
      <div className="card">
      <button onClick={addnum}>Addd counter : {count}</button>
      <button onClick={decnum}>Decrease Counter : {count}</button>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
       
      </div>
      <p className="read-the-docs">
        <button>Counter :{ count}</button>
      </p>
    </>
  )
}

export default App
