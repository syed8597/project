import './App.css';
import Navbar from './component/Navbar';
// import About from './component/About';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import React,{useState} from 'react'
function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert('Dark Mode is enabled','success');
      document.title='textTransform Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert('Light Mode is enabled','success');
      document.title='textTransform Light Mode'
    }
  }
  return (
    <>
    {/* sent props title=tex..,heading=enter.. */}
 <Navbar title="TextTransform" mode={mode} toggleMode={toggleMode} />
 <Alert alert={alert}/>
 <div className='container mt-5'>
 <TextForm heading="Enter Your Text" mode={mode} showalert={showAlert}/>
 {/* <About/> */}
 </div>
    </>
  );
}

export default App;