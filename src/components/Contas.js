import React from 'react';
import {List} from "semantic-ui-react";

export const Contas = ({ contas }) => {

    return  (
        
        <List>
        {contas.map(conta => {
            return(
                <List.Item key={conta}>
                    <a>{conta[0]} : </a><a>  {conta[1]}</a>
                </List.Item>
            );
        })}
        </List>
    )
    
}