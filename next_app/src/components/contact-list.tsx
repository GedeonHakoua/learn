import contacts from '@/data/contacts'
import React from 'react'

type Props = {}

export default function ContactList({}: Props) {
  return (
    <div>
      {
        contacts.map(contact => (
          
        ))
      }
    </div>
  )
}