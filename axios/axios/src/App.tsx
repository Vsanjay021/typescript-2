import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
function App() {
  let [data,setData]=useState({});
  axios.defaults.baseURL="https://jsonplaceholder.typicode.com/"
  async function getData(){
    let res=await axios.get(`/posts`, {
      params: {
        id: 2
      }
    });
    setData(res.data[0]);
  }
  //  const placeholderApi = axios.create({
  //   baseURL: 'https://jsonplaceholder.typicode.com/',
  // });
useEffect(()=>{
  getData()
},[])
console.log(data)
  return (
    <div className="App">
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
