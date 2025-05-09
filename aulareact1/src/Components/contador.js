import { useState } from 'react';
import './contador.css';

function Contador() {
    const [cont, setCont] = useState(0);
    return(
        <button onClick={() => setCont(cont + 1)}>
        {cont}
        </button>
    ) 
    }
    export default Contador;    