'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';

export default function CardFuncaoGerente() {
  return (
    <>
      <div className='daisy-card daisy-card-side bg-base-100 shadow-xl'>
        <figure>
          <Image
            src={'/Rectangle 15.png'}
            width={1200}
            height={1200}
            alt='carro'
          />
        </figure>
        <div className='daisy-card-body'>
          <h2 className='daisy-card-title'>Editar Funcionários</h2>
          <p>Controle total de todos os clientes cadastrados podendo buscar, excluir e cadastrar novos funcionários para a empresa</p>
          <div className='daisy-card-actions justify-end'>
            <Link href={'/gerente/editarfuncionario'}>
              <FaAngleRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
