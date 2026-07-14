type SalutationProps ={
    nom: string;
    age?: number;
}
const Salut = (props:SalutationProps) => {
    return(
        <p>Bonjour, {props.nom} </p>
    )
}

export default Salut;