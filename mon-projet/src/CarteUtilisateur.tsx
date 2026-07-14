
type Props = {
    utilisateur:{
        id:number,
        nom:string,
        age:number
    }
}

export default function CarteUtilisateur({utilisateur}: Props) {
    return (
        <ul style={{
            padding: 9,
            background: "#333"
        }}>
            <li>{utilisateur.nom} - {utilisateur.age} ans</li>
        </ul>
    )
}