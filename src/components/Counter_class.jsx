import React, { useEffect, useState } from 'react'

const Counter_class = () => {
    var _useState = useState(0);
    const c1 = _useState[0];
    const setCounter = _useState[1];
    const [count, setCount]  = useState(0);
    
    useEffect(()=>{
        document.title = `you clicked ${c1} times`;
    })

    useEffect(()=>{
            console.log("useEffect called\n");
            setCount(()=>c1*2)
    },[c1])
  return (
    <div>
        <h3>React demo with useState and useEffect hook </h3>
        <h2>{count}</h2>
        <button onClick={()=>setCounter(c1 + 1)}>count {c1}</button>
    </div>
  )
}

export default Counter_class