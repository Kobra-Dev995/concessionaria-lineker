'use client';
import Image from 'next/image';
import { FaPen, FaPhone } from 'react-icons/fa6';

import { useState } from 'react';
import ClienteUser from './FuncionarioUser';

const clientesDB = [
  {
    id: 1,
    name: 'José Levy Fernandes Lacerda',
    phone: '996465522',
    cpf: '08002007007',
    city: 'Milagres',
    address: 'Centro',
  },
  {
    id: 2,
    name: 'Yeridson Ruan Nascimento Teixeira',
    phone: '988794460',
    cpf: '08002007007',
    city: 'Abaira',
    address: 'Sítio Areias',
  },
  {
    id: 3,
    name: 'José Daniel de Oliveira Patrício',
    phone: '993774913',
    cpf: '08002007007',
    city: 'Milagres',
    address: 'Sítio Tabocas',
  },
];

export default function FuncionarioList({ list }) {
  const filterSearchClient = clientesDB.filter((people) => {
    const clientLowerCase = people.name.toLowerCase();
    const searchLower = list.toLowerCase();

    console.log(clientLowerCase);
    return clientLowerCase.includes(searchLower);
  });

  return (
    <>
      {filterSearchClient.map((client) => {
        return (
          <ClienteUser
            key={client.id}
            NumberId={client.id}
            Name={client.name}
            Phone={client.phone}
            CPF={client.cpf}
            City={client.city}
            Address={client.address}
          />
        );
      })}

      
    </>
  );
}
