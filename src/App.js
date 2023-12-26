import React,{useState,useEffect,useMemo} from 'react';
import './App.css';

function App() {
  
const [number,setNumber]=useState(0)
const [dark,setDark]=useState(false)

let doublenumber =useMemo(()=>{
  return slowfunction(number)
},[number])

let themestyles=useMemo(()=>{
return {
  backgroundColor:dark?'black':'white',
  color:dark?'white':'black'
}},[dark])

function slowfunction(num)
{
  console.log("slow function is called");
  for(let i=0;i<10000000000;i++)
  {

  }
  return num*2
}

useEffect(()=>{console.log("Changing theme")},[themestyles])


  return (
    <div className="App">
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
      <button onClick={()=>setDark(!dark)}>Change Theme</button>
      <div  style={themestyles}>{doublenumber}</div>
    </div>
  );




}

export default App;

/*
The problem with the above code was whenever the component was rerendered the slow function was called everytime.On
changing the number as well as clicking on the change theme button ,the slow function was called.But when we use useMemo 
slowfunction was called only when the number is changing,not on clicking on change theme button.

Now one more thing that we will observe over here is that on changing the  number as well as  dark,the useeffect is called 
because of referal equality,so to prevent this we  use useMemo,that is on changing the dark only it will be called.
*/