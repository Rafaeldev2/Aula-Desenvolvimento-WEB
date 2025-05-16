let nomes = ["Ana", "João", "Carlos"];

function ListaNomes() {
    return(
        <ul>
            <li>{nomes[0]}</li>
        </ul>,
        <ul>
            <li>{nomes[1]}</li>
        </ul>,
        <ul>
            <li>{nomes[2]}</li>
        </ul>
    )
}
    export default ListaNomes;