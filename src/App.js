import React, { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Contas} from './components/Contas';
import {ContaForm} from './components/ContaForm';
import {Boot} from './components/Boot';
import Nav from './components/Nav';

// ROUTERS
import { BrowserRouter as Router, Route, Switch , Link, Redirect } from "react-router-dom";

//PAGES
import NotFoundPage from "./pages/404";
import Sobrepag from "./pages/sobre";

function App() {
  
  const [contas, setContas] = useState([]);
  const [resul, setResul] = useState([]);
  const [teste, setTeste] = useState('0');

  const url_resultado_dev = "http://127.0.0.1:8000/resultado";
  const url_resultado_prod = "https://api-only-react.herokuapp.com/resultado";

  const url_enviar_dev = "http://127.0.0.1:8000/enviar";
  const url_enviar_prod = "https://api-only-react.herokuapp.com/enviar";
  
  const url_receber_dev = "http://127.0.0.1:8000/receber";
  const url_receber_prod = "https://api-only-react.herokuapp.com/receber";


  useEffect(() => {
    fetch(url_resultado_prod).then(response => {
      response.json().then(data => {
        //console.log("------data_-------")
        //console.log(data)
        setResul(data);
     })
    
  });
  }, []);

  useEffect(() => {
    fetch(url_receber_prod).then(response => {
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
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Boot}/>
          <Route exact path="/sobre" component={Sobrepag}/>
          <Route exact path="/404" component={NotFoundPage}/>
          <Redirect to="/404"/>
        </Switch>
      </Router>
    </div>    
      
  );
}

export default App;
