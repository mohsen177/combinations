import logo from './logo.svg';
import './App.css';
import comb from "combinations-generator";
import Spreadsheet from "react-spreadsheet";
import {TableComponent} from "react-spreadsheet"; 
import { useState } from 'react';
function App() {
  const [state,setState] = useState(0);
  const [arrData,setArrData] = useState("");
  const [data,setData] = useState([]);
  
  
  function combination(){

    if(arrData?.length > 0){
        var array = arrData.split(",")
        if(array.length > 0){
          var iterator = comb(array, state);
          let excelData = [];
          for (var item of iterator) {
            let dataItem = [];
            item.forEach((cell)=>{
              dataItem.push({ value: cell });
            })
            excelData.push(dataItem);
            dataItem = [];
          } 
          setData(excelData);
        }


    }


		
	}
	

  const handleChageState = (e)=>{
    const value = e.target.value;
    setState(value);

  }
  const handleChageArrData = (e)=>{
    const value = e.target.value;
    setArrData(value);

  }

  return (
    <div className="App">
      <div>
          <input type="text" placeholder='enter array'  onChange={handleChageArrData} />
          <input type="number" placeholder='enter number'  onChange={handleChageState} />
          <button onClick={combination}>generate</button>
      </div>
      
      <Spreadsheet data={data}/>
    </div>
  );
}

export default App;
