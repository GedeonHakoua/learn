import { Contact } from "@/types/contacts.models";


const contacts: Contact[] = [
  {
    id: 1,
    nom: 'Stéphane Query',
    email: 'john.doe@example.com',
    avatar: 'https://avatars.rentcircle.ph/public/boy',
    numTel: '+1 234 567 890'
  },
  {
    id: 2,
    nom: 'Sophie Martin',
    email: 'sophie.martin@example.com',
    avatar: 'https://avatars.rentcircle.ph/public/girl',
    numTel: '+33 612 345 678'
  },
  {
    id: 3,
    nom: 'Lucas Bernard',
    email: 'lucas.bernard@example.com',
    avatar: 'https://avatars.rentcircle.ph/public/boy',
    numTel: '+33 765 432 109'
  },
  {
    id: 4,
    nom: 'Emma Dubois',
    email: 'emma.dubois@example.com',
    avatar: 'https://avatars.rentcircle.ph/public/girl',
    numTel: '+33 698 765 432'
  }
];

export default contacts;