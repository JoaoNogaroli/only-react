import React, {useState} from 'react';
import { Form, Input, Button} from 'semantic-ui-react';
export const ContaForm = ({onNewTeste, onNewConta}) => {
    const [valor, setValor] = useState('');

    const [radio, setRadio] = useState();
    const styles = {
        
        fontFamily: "KIONA",
        width:'100%',
        

    }
    const styles2 = {
        width:'100%',

        border: "1px solid black",
        borderRadius: "5px",
    }

    return(
        
        <Form style={{fontSize:'20px'}}>
            <div className="form-group">
            <div>

            <Form.Field>
                <label>
                    
                    <input type="radio" 
                    value="Entrada"
                    name="radiogroupe"
                    onChange={(e) => {setRadio(e.target.value)}}
                    />Entrada
                </label>

            </Form.Field>
            <Form.Field>
            <label>
                   
                    <input type="radio" 
                    value="Saída"
                    name="radiogroupe"
                    onChange={(e) => {setRadio(e.target.value)}}                    /> Saída
                </label>
                

            </Form.Field>
            <br></br>
            </div>
            </div>
            <div>
            <Form.Field >
                <Input placeholder="Insira o Valor"
                    name='valor'
                    value={valor}
                    onChange={e => setValor(e.target.value)} />
            </Form.Field>
            <br></br>
            </div>
            
            <Form.Field>
            <Button 
                style={{fontFamily:'KIONA', fontSize:'20px'}}
                className="btn btn-info  w-100 p-3"
                onClick={async () => {
                    

                    const conta_total = {
                        '0':radio,
                        '1':valor};
                    const response = await fetch('/enviar', {
                        method:'POST',
                        headers:{
                            "content_type":"application/json",
                        },
                        body: JSON.stringify(conta_total)
                    })

                    const teste = await fetch('/resultado', {
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
                            onNewTeste(final);
                        });
                    }); 

                    
                    
                    if(response.ok){
                        console.log(response);
                        //console.log(conta_total);
                        
                        
                        onNewConta(conta_total);
                        setValor('');
                    }
                }}
            >Enviar</Button>
            </Form.Field><br></br><br></br><br></br>
        </Form>
      
    )
}