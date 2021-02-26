//import { red } from '@material-ui/core/colors';
import React from 'react';
const Inventario = ({texto}) => {
    //console.log(texto);
    let colorLabel = 'red';
    if (texto === 'En stock') {
        colorLabel = 'lightgreen';
    } else if (texto === 'Limitado') {
        colorLabel = 'orange';
    };
   

    return (
        <label style={{color:colorLabel}}>°{texto}</label>
    );
}

export default Inventario;