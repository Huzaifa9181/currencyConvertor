import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import InputBox from './Components/InputBox';

function App() {
  const [count, setCount] = useState(0)
  const [label , setLabel] = useState('From')
  const [labelAnother , setLabelAnother] = useState('To')
  const [to , setTo] = useState("usd")

  return (
    <>
      <div className="container-fluid bg-secondary w-100 d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
        <div className="Box-container p-4" style={{ width: '45%' }}>
          <InputBox label={label}  labelAnother={labelAnother}  />
          
        </div>
      </div>
    </>
  );
  

}
export default App
