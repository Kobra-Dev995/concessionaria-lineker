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
    //
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

  function formatCnpjCpf(value) {
    const cnpjCpf = value.replace(/\D/g, '');

    if (cnpjCpf.length === 11) {
      return cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }

    return cnpjCpf.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
      '$1.$2.$3/$4-$5'
    );
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
            {formataNumeroTelefone(88, Phone)}
          </span>

          <button
            className='daisy-btn daisy-btn-primary bg-blue-600'
            onClick={() => document.getElementById('my_modal_1').showModal()}
          >
            <FaPen />
            Ver
          </button>

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
                <span className='font-semibold'>Nome: {Name}</span>
                <span className='font-semibold'>
                  Contato: {formataNumeroTelefone(88, Phone)}
                </span>
                <span className='font-semibold'>CPF: {formatCnpjCpf(CPF)}</span>
                <span className='font-semibold'>Cidade: {City}</span>
                <span className='font-semibold'>Endereço: {Address}</span>
                <span className='font-semibold'>
                  Data de Adesão: 05/06/2008
                </span>
                <span className='font-semibold'>
                  Data de Finalização: --/--/----
                </span>
              </section>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
}
