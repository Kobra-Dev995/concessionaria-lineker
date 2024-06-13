'use client';
import Image from 'next/image';
import { FaPen, FaPhone } from 'react-icons/fa6';

export default function ClienteList() {
  return (
    <>
      <div className='w-full flex justify-around px-3 py-2'>
        <div className='w-1/3 flex items-center justify-center gap-5'>
          <span className='text-lg'>Nº 1</span>
          <span className='font-semibold'>José Levy Fernandes Lacerda</span>
        </div>

        <div className='w-1/3 flex items-center justify-center gap-4'>
          <span className='flex items-center gap-2'>
            <FaPhone />
            (88) 996465522
          </span>

          <button
            className='daisy-btn daisy-btn-primary bg-blue-600'
            onClick={() => document.getElementById('my_modal_1').showModal()}
          >
            <FaPen />
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
                <span className='font-semibold'>Nome: José Levy Fernandes Lacerda</span>
                <span className='font-semibold'>Contato: (88) 996465522</span>
                <span className='font-semibold'>CPF: 080.020.070-07</span>
                <span className='font-semibold'>Cidade: Milagres-CE</span>
                <span className='font-semibold'>Endereço: Centro</span>
                <span className='font-semibold'>Data de Adesão: 05/06/2008</span>
                <span className='font-semibold'>Data de Finalização: --/--/----</span>
              </section>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
}
