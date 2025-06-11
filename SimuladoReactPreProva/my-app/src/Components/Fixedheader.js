import { useState } from "react";
import './Fixedheader.css'

function Fixedheader(){

  return(
        <header className="App-header">
          <div>
            <h1>Estrutura de Dados</h1>
          </div>
          <nav>
          <button>Click on me</button>
          </nav>
        </header>
    )
}
export default Fixedheader;