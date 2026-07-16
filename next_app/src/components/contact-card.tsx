import contacts from '@/data/contacts'
import React from 'react'
import Image from 'next/image';
import { Contact } from '@/types/contacts.models';
import ContactCardAction from './contact-card-action';
type Props = {
    contact:Contact
}

export default function ContactCard({contact}: Props) {
  return (
    <div className='w-full'>
      {
            <div key={contact.id} className='flex mt-2 between'>
              <Image 
                alt={contact.nom} 
                src={contact.avatar} 
                width={70} 
                height={70} 
              />
              <div className='flex-1'>
                <h4>
                  {contact.id} - {contact.nom}
                </h4>
                <p> {contact.email}</p>
                <p> {contact.numTel}</p>
              </div>
              <ContactCardAction contact={contact}/>
            </div>
      }
   </div>
  )
}