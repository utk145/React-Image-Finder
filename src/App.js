import './App.css';
import NavBar from './components/NavBar';
import Breadcrumb from './components/Breadcrumb';
import Images from './components/Images';

import { useState,useEffect } from 'react'; 
// Now you have to import all the useStates here only because the api call received from Breadcrumb has to be displayed in Images component 

import {getImage} from './services/api.js';
import SnackBar from './components/SnackBar';


function App() {

  const [text,setText] = useState("");
  const [count,setCount] = useState(5);


  // Now we have to capture the data
  const [data,setData] = useState([]);

  const[open,setOpen]  = useState(false);


  useEffect(()=>{
    if(count<3 || count>300){
      setOpen(true);
      return;
    }
    setOpen(false);

    const getData = async ()=>{
      const res = await getImage(text,count)
      setData(res.data.hits);
    }
    getData();
  },[text,count]);

  return (
    <div className="App">
      <NavBar/>
      <Breadcrumb setText={setText} setCount={setCount}/>
      <Images data={data}/>
      <SnackBar open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;
