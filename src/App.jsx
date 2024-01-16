import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import InputBox from './Components/InputBox';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid bg-secondary w-100 d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url("public/bg-img-2.jpg")' , backgroundSize: 'cover', height: '100vh' }}>
        <div className="Box-container p-4" style={{ width: '45%' ,     background: '#bdb3aa' }}>
          <InputBox/>
          
        </div>
      </div>
    </>
  );
  

}
export default App
