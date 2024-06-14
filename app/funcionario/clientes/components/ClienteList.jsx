'use client';
import Image from 'next/image';
import { FaPen, FaPhone } from 'react-icons/fa6';
import ClienteUser from './ClienteUser';
import { useState } from 'react';

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

export default function ClienteList({ variavel }) {
  const filterSearchClient = clientesDB.filter((people) => {
    const clientLowerCase = people.name.toLowerCase();
    const searchLower = variavel.toLowerCase();

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

      <dialog id='my_modal_1' className='daisy-modal'>
        <div className='daisy-modal-box'>
          <div className='daisy-modal-action'>
            <form method='dialog'>
              <button className='daisy-btn daisy-btn-primary bg-blue-600'>
                Close
              </button>
            </form>
          </div>

          <section className='w-full flex items-center justify-center'>
            <Image
              src={'/foto de Perfil do Funcionário.png'}
              height={1200}
              width={1200}
              alt='foto'
              className='w-20'
            />
          </section>

          <section className='w-full flex flex-col gap-4 py-4'>
            <span className='font-semibold'>Nome: {}</span>
            <span className='font-semibold'>Contato: {}</span>
            <span className='font-semibold'>CPF: {}</span>
            <span className='font-semibold'>Cidade: {}</span>
            <span className='font-semibold'>Endereço: {}</span>
            <span className='font-semibold'>Data de Adesão: 05/06/2008</span>
            <span className='font-semibold'>
              Data de Finalização: --/--/----
            </span>
          </section>
        </div>
      </dialog>
    </>
  );
}
