import {useEffect, useState} from "react";

type Props = {};

export default function App({}: Props) {
    const [compteur, setCompteur] = useState(0);

    useEffect(() =>{
        document.title = `Le compteur est à ${compteur}`
    })
    return (
        <div>
            <h2>Les effets en react</h2>
            <div>
                <button
                onClick={() => setCompteur(compteur + 1)}>
                    Incrémenter
                </button>

                <h3>Voici la valeur du compteur : {compteur}</h3>
            </div>
        </div>
    );
}