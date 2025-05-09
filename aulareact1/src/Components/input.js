import { useState } from "react";

function Input(){

    const[texto, setTexto] = useState("")

    function handleTexto(event){
        setTexto(event.target.value)
    }

    return(
        <div>
            <h1>{texto}</h1>
            <input type="text" onChange={handleTexto}></input>
        </div>
    )
}
export default Input;