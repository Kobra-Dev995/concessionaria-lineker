'use client';

import Image from 'next/image';
import TabelaCarro from './companents/Tabela';
import Link from 'next/link';

const carsDB = [
  {
    id: 1,
    name: 'URUS',
    price: 430095,
    picture: '/arancio-borealis 1 (1).png',
  },
  {
    id: 2,
    name: 'AUDI A6',
    price: 133686,
    picture: '/2517_4 1 (1).png',
  },
  {
    id: 3,
    name: 'BMW X6',
    price: 982095,
    picture: '/destaque-v2 1 (1).png',
  },
];

export default function Carro({ params }) {
  const nameCar = params.carroId.replace(/%20/g, ' ');

  // carsDB.map((carro) => {
  //   if (carro.name === nameCar) {
  //     console.log('carro:>', carro.name);
  //   }
  // });
  var convertToFloatNumber = function (value) {
    value = value.toString();
    if (value.indexOf('.') !== -1 && value.indexOf(',') !== -1) {
      if (value.indexOf('.') < value.indexOf(',')) {
        return parseFloat(value.replace(/,/gi, ''));
      } else {
        return parseFloat(value.replace(/./gi, '').replace(/,/gi, '.'));
      }
    } else {
      return parseFloat(value);
    }
  };

  Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
      c = isNaN((c = Math.abs(c))) ? 2 : c,
      d = d == undefined ? '.' : d,
      t = t == undefined ? ',' : t,
      s = n < 0 ? '-' : '',
      i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + '',
      j = (j = i.length) > 3 ? j % 3 : 0;
    return (
      s +
      (j ? i.substr(0, j) + t : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
      (c
        ? d +
          Math.abs(n - i)
            .toFixed(c)
            .slice(2)
        : '')
    );
  };

  function formatNumber(value) {
    convertToFloatNumber(value);
    return value.formatMoney(2, ',', '.');
  }

  return (
    <>
      <main>
        <section>
          {carsDB.map((carro) => {
            if (carro.name !== nameCar) {
              return;
            }

            return (
              <>
                <div className='flex items-center justify-center bg-zinc-100 relative w-full h-40'>
                  <Image
                    src={carro.picture}
                    width='505'
                    height='220'
                    alt='Carro para comprar'
                    className='absolute pt-[6rem]'
                  />
                </div>

                <div className='bg-primare-blue font-bold text-3xl w-full h-48 flex justify-center items-end p-4 pb-14 gap-8'>
                  <span>{nameCar}</span>
                  <span># {carro.id}</span>
                </div>

                <section className='w-full px-4 py-2 space-y-3'>
                  <h2 className='text-xl font-semibold'>
                    • Informações do Veículo
                  </h2>
                  <TabelaCarro />
                </section>
                <section className='w-full px-4 py-2 flex justify-start gap-80'>
                  <section>
                    <h2 className='text-xl font-semibold'>
                      • Cores do Veículo
                    </h2>
                    <div className='flex gap-2'>
                      <div className='bg-yellow-900 w-8 h-8'></div>
                      <div className='bg-gray-100 w-8 h-8'></div>
                      <div className='bg-blue-950 w-8 h-8'></div>
                      <div className='bg-gray-600 w-8 h-8'></div>
                    </div>
                  </section>
                  <section>
                    <h2 className='text-xl font-semibold'>
                      • Placa do Veículo
                    </h2>
                    <div className='flex gap-2'>
                      <span className='text-xl font-medium'>BR43E19</span>
                    </div>
                  </section>
                </section>

                <section className='w-full px-4 py-2'>
                  <h2 className='text-xl font-semibold'>Valor</h2>
                  <span className='text-xl font-medium'>
                    R$ {formatNumber(carro.price)}
                  </span>
                </section>

                <section className='w-full flex items-center gap-10 px-4 py-2'>
                  <Link
                    href={`/funcionario/${nameCar}/venda`}
                    className='daisy-btn daisy-btn-active daisy-btn-primary bg-blue-800 hover:bg-blue-600 w-40'
                  >
                    Comprar
                  </Link>
                  <Link
                    href={'/funcionario'}
                    replace
                    className='daisy-btn daisy-btn-active daisy-btn-secondary bg-red-800 hover:bg-red-600 w-40'
                  >
                    Cancelar
                  </Link>
                </section>
              </>
            );
          })}
          {/* <div className='bg-primare-blue font-bold text-3xl w-full h-48 flex justify-center items-end p-4 pb-14 gap-8'>
            <span>{nameCar}</span>
            <span>#002</span>
          </div> */}
        </section>
      </main>
    </>
  );
}
