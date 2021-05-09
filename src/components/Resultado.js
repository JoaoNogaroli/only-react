import React from 'react';
import {Button} from 'semantic-ui-react';

export const Resultado = () => {


    return  (
        async () => {
            
            
            const response = await fetch('https://api-only-react.herokuapp.com/resultado', {
                method:'POST',
                headers:{
                    "content_type":"application/json",
                },
            }).then(response => {
                response.json().then(data => {
                        console.log('-----data')

                        console.log(data)
                        

                });
            });   
            if(response.ok){
                
            }
        }
    
        
        
    )
    
}