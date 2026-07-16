"use client";

import { ContactContext } from '@/context/contact-context';
import { Contact } from '@/types/contacts.models';
import { useRouter } from 'next/navigation';
import React, { use } from 'react'

type Props = {}

export default function AddContactForm({}: Props) {
  const router = useRouter()
  const {contacts, setContact} = use(ContactContext)
  const handleSubmitForm = (e:React.SubmitEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget);

    const nouveauContact : Contact = {
      id: Math.round(Math.random() * 100),
      nom: form.get("nom") as string,
      email: form.get("email") as string,
      numTel: form.get("numTel") as string,
      avatar: "https://avatars.rentcircle.ph/public",
    };
    setContact([nouveauContact, ...contacts]);

    // router.push("/contacts")
  };
  return (
    <form className='mt-2 flex' onSubmit={(e)=>handleSubmitForm(e)}>
      <div className='form-group'>
        <label htmlFor="nom">Nom du contact</label>
        <input type="text" name='nom' placeholder="Nelly" required minLength={3}/>
      </div>
      <div className='form-group'>
        <label htmlFor="email">Adresse mail du contact</label>
        <input type="email" name='email' placeholder="example@gmail.com" required/>
      </div>
      <div className='form-group'>
        <label htmlFor="numTel">Numéro de téléphone</label>
        <input type="tel" name='numTel' placeholder="255-566-8907" required/>
      </div>

      <button type='submit' className='btn w-full'>Ajouter le contact</button>
    </form>
  )
}

// Essayons de déboguer l'erreur ensemble:
// Question : Pourquoi lorsque je clique sur "Ajouter le contact" rien ne se passe ??
// Response :
// 1. Vérifie que le composant est bien importé et rendu dans ta page.
// 2. Vérifie que le contexte est bien fournisseur.
// 3. Vérifie que le formulaire est bien soumis.
// 4. Vérifie que la fonction handleSubmitForm est bien appelée.
// 5. Vérifie que la fonction setContact est bien appelée.
// 6. Vérifie que le contact est bien ajouté à la liste.
// 7. Vérifie que la liste est bien affichée.
// 8. Vérifie que le formulaire est bien réinitialisé.

