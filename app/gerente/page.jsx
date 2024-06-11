'use client';

import Header from './components/Header';

const cars = ['nome 1', 'nome 2', 'nome 3', 'nome 4'];

export default function Gerente() {
  return (
    <>
      <Header />

      <h1>Gerente</h1>
      <h2>Area do gerente</h2>

      <div className='daisy-carousel w-full'>
        <div id='item1' className='daisy-carousel-item w-full'>
          <img src='/arancio-borealis 1 (1).png' className='w-full' />
        </div>
        <div id='item2' className='daisy-carousel-item w-full'>
          <img src='/arancio-borealis 1 (1).png' className='w-full' />
        </div>
        <div id='item3' className='daisy-carousel-item w-full'>
          <img src='/arancio-borealis 1 (1).png' className='w-full' />
        </div>
        <div id='item4' className='daisy-carousel-item w-full'>
          <img src='/arancio-borealis 1 (1).png' className='w-full' />
        </div>
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
        <a href='#item1' className='daisy-btn daisy-btn-xs'>
          1
        </a>
        <a href='#item2' className='daisy-btn daisy-btn-xs'>
          2
        </a>
        <a href='#item3' className='daisy-btn daisy-btn-xs'>
          3
        </a>
        <a href='#item4' className='daisy-btn daisy-btn-xs'>
          4
        </a>
      </div>
    </>
  );
}
