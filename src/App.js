import logo from './logo.svg';
import './App.css';
import Table from './components/Table'
import React, { createElement } from 'react';
import { useState, useEffect } from "react";
import axios from "axios";


function App() {   
  
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.orhanaydogdu.com.tr/deprem/kandilli/live`
        );
        setData(response.data.result);
        setError(null);
        console.log(data);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [loading]);

  return (
    <div className='App'>
      <div id='maindiv' style={{marginTop : '30px'}}>Son Depremler</div>
      <br></br>
      <Table  title = 'Yer' date = 'Tarih' mag = 'Büyüklük' depth = 'Derinlik'/>
      {data && data.map(item => (
        <Table key = {item._id} title = {item.title} date = {item.date} mag = {item.mag} depth = {item.depth}/>
      ))}
      </div>
  );
}

export default App;
