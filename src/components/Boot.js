import React, { useEffect, useState} from 'react';
import {Button, Form} from 'semantic-ui-react';


import {download} from 'downloadjs';

export const Boot = () => {
    const [teste, setTeste] = useState('0');
    const [anterior, setAnterior] = useState('0');
    const [valor, setValor] = useState('');

    const [radio, setRadio] = useState();

    useEffect(() => {
        fetch("https://api-only-react.herokuapp.com/resultado").then(response => {
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

    return(
        
    
    <div class="register-photo">
        <div class="form-container">
            <div class="image-holder text-center">
                <br /><br />
                <h5>Valor Passado: R$: {anterior}</h5><br />
                <h4>Valor Atual: R$: {teste}</h4>
            </div>
            <Form>
                <h2 class="text-center"><strong>Meu Extrato</strong> ...</h2>
                
                <div class="form-check"><input type="radio" class="form-check-input" 
                onChange={(e) => {setRadio(e.target.value)}}
                value="Entrada" name='tipo' id="formCheck-1" />
                <label class="form-check-label" for="formCheck-1">Entrada</label>
                </div>
                
                <div class="form-check"><input type="radio" class="form-check-input" 
                onChange={(e) => {setRadio(e.target.value)}}
                value="Saída" name='tipo' id="formCheck-2" />
                <label class="form-check-label" for="formCheck-2">Saída</label>
                </div>
        
                <div class="form-group"><input class="form-control" value={valor}
                onChange={e => setValor(e.target.value)}
                type="valor" name="valor" placeholder="Valor da Conta" /></div>
                
                <div class="form-group">
                <br />

                <Button
                 className="btn btn-primary btn-block" 
                 onClick={async () =>{
                    
                    console.log({'radio': radio, 'valor':valor})
                    const conta_total = {
                        '0':radio,
                        '1':valor};
        
                    const response = await fetch('https://api-only-react.herokuapp.com/enviar', {
                        method:'POST',
                        headers:{
                            "content_type":"application/json",
                        },
                        body: JSON.stringify(conta_total)
                    })
        
                
                    const func2 = await fetch('https://api-only-react.herokuapp.com/resultado', {
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
                
               
                    <a href="https://api-only-react.herokuapp.com/create_file/" method='POST' class="btn btn-primary btn-block">Pegue o Arquivo</a>
                 </div>
            </Form>
        </div>
    </div>
    

    )
}
