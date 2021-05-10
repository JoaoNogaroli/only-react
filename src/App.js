import React, { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Contas} from './components/Contas';
import {ContaForm} from './components/ContaForm';
import {Boot} from './components/Boot';

function App() {
  
  const [contas, setContas] = useState([]);
  const [resul, setResul] = useState([]);
  const [teste, setTeste] = useState('0');
  /*
  useEffect(() => {
    fetch("/deletar").then(response => {
      console.log(response)
    })
  })
  */
  

  useEffect(() => {
    fetch("https://api-only-react.herokuapp.com/resultado").then(response => {
      response.json().then(data => {
        //console.log("------data_-------")
        //console.log(data)
        setResul(data);
     })
    
  });
  }, []);

  useEffect(() => {
    fetch("https://api-only-react.herokuapp.com/receber").then(response => {
        response.json().then(data => {
          //console.log("------data_-------")
          //console.log(data)
          setContas(data);
        })
      
    });
    
  }, []);
  /*
  useEffect(() => {
    fetch("/enviar").then(response => {
      console.log("ok")
    })
  })*/

  return (
   
      <div className='container shadow-sm p-3 mb-5 bg-white rounded' >
        
        
            <div class="container">
            <Boot />
            
            </div>
           
      </div>
    
      
      
  );
}

export default App;
