import React, { useEffect, useState} from 'react';
import {Button, Form} from 'semantic-ui-react';
import Nav from "./Nav";
import {download} from 'downloadjs';

export const Boot = () => {
    const [teste, setTeste] = useState('0');
    const [anterior, setAnterior] = useState('0');
    const [valor, setValor] = useState('');

    const [radio, setRadio] = useState();

    const url_resultado_dev2 = "http://127.0.0.1:8000/resultado";
    const url_resultado_prod2 = "https://api-only-react.herokuapp.com/resultado";
    useEffect(() => {
        fetch(url_resultado_prod2).then(response => {
          response.json().then(data => {
            //console.log("------data_-------")
            //console.log(data)
            setAnterior(data);
         })
        
      });
      }, []);

    /*function pegar(){
            console.log({'radio': radio, 'valor':valor})
            const conta_total = {
                '0':radio,
                '1':valor};

            fetch('https://api-only-react.herokuapp.com/enviar', {
                method:'POST',
                headers:{
                    "content_type":"application/json",
                },
                body: JSON.stringify(conta_total)
            })

        
            fetch('https://api-only-react.herokuapp.com/resultado', {
                method:'POST',
                headers:{
                    "content_type":"application/json",
                },
            }).then(response => {
                response.json().then(data => {
                    const final = data;
                    console.log(data)
                    
                    console.log("----FINAL")
                    console.log(final)
                    setTeste(final)
                });
            }); 
            setValor('');

    }*/
    const url_createfile_dev = "http://127.0.0.1:8000/create_file/";
    const url_createfile_prod = "https://api-only-react.herokuapp.com/create_file/";
    return(
        
    <div >
    <Nav />
        <hr></hr>
    <div class=" register-photo p-6 " style={{backgroundColor:'white'}}>
        <div class="form-container shadow-lg p-3 mb-5 bg-white rounded rainy-ashville-gradien" style={{backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)"}}>
            
            <Form >
                <h2 class="text-center flash animated"><strong>Meu Extrato</strong> ...</h2>
                
                <div class="form-check"><input type="radio" class="form-check-input" 
                onChange={(e) => {setRadio(e.target.value)}} style={{fontSize:18}}
                value="Entrada" name='tipo'  id="formCheck-1" />
                <label style={{fontSize:18}} class="form-check-label" for="formCheck-1">Entrada</label>

                
                </div>
                <br />
                <div class="form-check"><input type="radio" class="form-check-input" 
                onChange={(e) => {setRadio(e.target.value)}} style={{fontSize:18}}
                value="Saida" name='tipo' id="formCheck-2" />
                <label style={{fontSize:18}} class="form-check-label" for="formCheck-2">Saída</label>
                </div>
        <br />
                <div class="form-group"><input class="form-control" value={valor}
                onChange={e => setValor(e.target.value)} style={{fontSize:17}}
                type="valor" name="valor" placeholder="Valor da Conta" /></div>
                
                <div class="form-group">
                <br />

                <Button
                 className="btn btn-primary " 
                 onClick={async () =>{
                    
                    console.log({'radio': radio, 'valor':valor})
                    const conta_total = {
                        '0':radio,
                        '1':valor};
                    
                    const url_enviar_dev = "http://127.0.0.1:8000/enviar";
                    const url_enviar_prod = "https://api-only-react.herokuapp.com/enviar";

                    const response = await fetch(url_enviar_prod, {
                        method:'POST',
                        headers:{
                            "content_type":"application/json",
                        },
                        body: JSON.stringify(conta_total)
                    })
        
                
                    const url_resultado_dev = "http://127.0.0.1:8000/resultado";
                    const url_resultado_prod = "https://api-only-react.herokuapp.com/resultado";
                    const func2 = await fetch(url_resultado_prod, {
                        method:'POST',
                        headers:{
                            "content_type":"application/json",
                        },
                    }).then(response => {
                        response.json().then(data => {
                            const final = data;
                            console.log(data)
                            
                            console.log("----FINAL")
                            console.log(final)
                            setTeste(final)
                        });
                    }); 
                    setValor('');
                 }}>Enviar</Button>
                <br />
                
                
                </div>
            </Form>
        </div>
        <div class="image-holder text-xl-right pulse animated image-holder">
                <br /><br />
                <h5 className="text-center">Valor Passado: <strong>R$: {anterior}</strong></h5><br />
                <h4 className="text-center">Valor Atual:  <strong>R$: {teste}</strong></h4>
        </div>
        <br /><br /><br />
        <a href={url_createfile_prod} method='POST' class="btn btn-primary btn-lg" >Clique aqui para exportar o Extrato em .Csv</a>
    </div>
    </div>

    )
}
