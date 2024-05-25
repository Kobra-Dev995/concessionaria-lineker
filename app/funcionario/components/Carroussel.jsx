import Image from 'next/image';

export default function Carroussel() {
  return (
    <>
      <div className='daisy-carousel w-full'>
        <div id='item1' className='daisy-carousel-item w-full'>
          <Image
            src='/carroPromocao.png'
            width='420'
            height='600'
            alt='Promoção'
            loading='lazy'
          />
        </div>
        <div id='item2' className='daisy-carousel-item w-full'>
          <Image
            src='/carroPromocao.png'
            width='420'
            height='600'
            alt='Promoção'
            loading='lazy'
          />
        </div>
        <div id='item3' className='daisy-carousel-item w-full'>
          <Image
            src='/carroPromocao.png'
            width='420'
            height='600'
            alt='Promoção'
            loading='lazy'
          />
        </div>
        <div id='item4' className='daisy-carousel-item w-full'>
          <Image
            src='/carroPromocao.png'
            width='420'
            height='600'
            alt='Promoção'
            loading='lazy'
          />
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
