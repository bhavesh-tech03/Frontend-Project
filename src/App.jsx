import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Counter_class from './components/Counter_class';
function App() {
  const [name,setName] = useState(" ");
  return (
    <div>
      {/* <Card title="MyFirstCard1" name={name} setName={setName}/>
      <Card title="MySecondCard2" name={name} setName={setName}/>
      <p>I am inside Parent Component and value of name is : {name}</p> */}

      <Counter_class />
    </div>
  )
}
export default App
