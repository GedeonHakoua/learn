"use client";

import React from 'react'
import { Contact } from '@/types/contacts.models';
import { useRouter } from 'next/navigation';

type Props = {
    contact:Contact
}

export default function ContactCardAction({contact}: Props) {
    const router = useRouter()
    const handleNavigate = () => {
        router.push(`/contacts/${contact.id}`)
    }
  return (
    <div className='flex between'>
        <button className='btn btn-neutral' onClick={handleNavigate}>Voir</button>
        <button className='btn btn-danger'>Supprimer</button>
    </div>
  )
}