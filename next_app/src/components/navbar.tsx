import React from 'react';
import Link from 'next/link';

type Props = {}

export default function Navbar({}: Props) {
  return (
    <header className='navbar'>
      <Link href={"/"}>
        <h4>Ged's contacts App</h4>
      </Link>
    </header>
  )
}