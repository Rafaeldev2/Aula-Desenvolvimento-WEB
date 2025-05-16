import ListaNomes from "../Components/listaNomes";

let nomes = ["Ana", "João", "Carlos"];

function Sobre(){
    return(
        <h1>Sobre</h1>,
        <ListaNomes nomes = {nomes}/>
    )
}
export default Sobre;