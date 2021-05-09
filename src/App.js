import React, { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Contas} from './components/Contas';
import {ContaForm} from './components/ContaForm';

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
    fetch("/resultado").then(response => {
      response.json().then(data => {
        //console.log("------data_-------")
        //console.log(data)
        setResul(data);
     })
    
  });
  }, []);

  useEffect(() => {
    fetch("/receber").then(response => {
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
              
            <br></br><hr></hr><br></br><br></br>
              <div class="row">
                <div class="col" style={{textAlign:'center',justifyContent:'center'}}>
                <ContaForm onNewConta={conta =>
                  setContas(currentConta => [conta, ...currentConta])}

                  onNewTeste={teste =>
                    setTeste(currentTeste => [teste])}
                  />
                </div>
               
                </div>
                <div class="row">
                <div class="col" style={{height: 300, overflow:'auto'}}>
                <Contas contas={contas}/>
                </div>
                <div class="col">
                  <br></br><br></br><br></br>
                <h4>Valor anterior: R$: {resul}</h4>
              <h3>Valor Atual: R$: {teste}</h3>
                </div>
               
              </div>
            </div>
      </div>
    
      
      
  );
}

export default App;
