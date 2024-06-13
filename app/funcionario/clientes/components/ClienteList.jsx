'use client';
import Image from 'next/image';
import { FaPen, FaPhone } from 'react-icons/fa6';
import ClienteUser from './ClienteUser';

const clientesDB = [
  {
    id: 1,
    name: 'José Levy Fernandes Lacerda',
    phone: '88996465522',
    cpf: '08002007007',
    city: 'Milagres',
    address: 'Centro',
  },
  {
    id: 2,
    name: 'Yeridson Ruan Nascimento Teixeira',
    phone: '88988794460',
    cpf: '08002007007',
    city: 'Abaira',
    address: 'Sítio Areias',
  },
];

export default function ClienteList() {
  return (
    <>
      {clientesDB.map((client) => {
        return <ClienteUser NumberId={client.id} Name={client.name} Phone={client.phone} />;
      })}
    </>
  );
}
