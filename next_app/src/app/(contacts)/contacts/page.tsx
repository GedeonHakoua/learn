import Navbar from '@/components/navbar'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='mt-2'>
      <header className='flex between'>
        <h1>Liste des contacts</h1>
        <Link href={"/add-contact"} className='btn'>
          Ajouer un contact
        </Link>
      </header>
    </div>
    
  );
}