import { useState } from "react";
type Props = {}

export default function Compteur({ }: Props) {

    const [compteur, setCompteur] = useState(0);
    const handleClickOn = () => {
        setCompteur(compteur + 1);
    }
    const handleClickOff = () => {
        setCompteur(compteur - 1);
    }
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                width: 400,
                justifyContent: "center",
                background: "#333"
            }}
        >

            <button
                onClick={handleClickOff}
            >-</button>
            <h2>Nomre de fois {compteur}</h2>
            <button
                onClick={handleClickOn}
            >+</button>
        </div>
    )
}

// Les composants
// Children & props
// Rendre une liste d'éléments
// Gestion des évènements (UseState)
// Gestion des évènements (UseEffect)