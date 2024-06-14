'use client';

import Image from 'next/image';
import { FaPen, FaPhone } from 'react-icons/fa6';

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
  {
    id: 3,
    name: 'José Daniel de Oliveira Patrício',
    phone: '88993774913',
    cpf: '08002007007',
    city: 'Milagres',
    address: 'Sítio Tabocas',
  },
];

export default function ClienteUser({
  NumberId,
  Name,
  Phone,
  CPF,
  City,
  Address,
}) {

  function click(e) {
    // document.getElementById('my_modal_1').showModal()
    const card =
      e.target.parentNode.parentNode.parentNode.parentNode.children[0].children;
    const card_ =
      e.target.parentNode.parentNode.parentNode.parentNode.children[2];
    console.log(card_);
  }
  function formataNumeroTelefone(ddd, numero) {
    var length = numero.length;
    var telefoneFormatado;

    if (length === 8) {
      telefoneFormatado =
        '(' +
        ddd +
        ') ' +
        numero.substring(0, 4) +
        '-' +
        numero.substring(4, 8);
    } else if (length === 9) {
      telefoneFormatado =
        '(' +
        ddd +
        ') ' +
        numero.substring(0, 5) +
        '-' +
        numero.substring(5, 9);
    }
    return telefoneFormatado;
  }


  return (
    <>
      <div className='w-full flex justify-around px-3 py-2'>
        <div className='name_card w-1/3 flex items-center justify-start gap-5'>
          <span className='text-lg'>Nº {NumberId}</span>
          <span className='font-semibold'>{Name}</span>
        </div>

        <div className='w-1/3 flex items-center justify-end gap-4'>
          <span className='flex items-center justify-center gap-2'>
            <FaPhone />
            {formataNumeroTelefone(88,Phone)}
          </span>

          {/* <button
            className='daisy-btn daisy-btn-primary bg-blue-600'
            onClick={click}
          >
             <FaPen />
            Ver
          </button> */}
        </div>
      </div>
    </>
  );
}
