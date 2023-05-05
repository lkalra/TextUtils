import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar.js'
import TextForm from './Components/TextForm'
import Alert from './Components/Alert';

// import About from './Components/About'

// import {
//   BrowserRouter,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light')// whether dark mode enabled or not 

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#042743'
      //showAlert("Dark mode has been enabled!", "success")
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white'
      //showAlert("Light mode has been enabled!", "success")
    }
  }


  return (
    <>


      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert = {alert}/>
        
        <div className="container my-3">  
          {/* <Routes>  */}
            <TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>  
            {/* <Route exact path="/home" Component={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>}/> */}
              
            {/* <Route exact path="/about" Component={About} /> */}
          {/* </Routes> */}
        </div>
        {/* <About/> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
