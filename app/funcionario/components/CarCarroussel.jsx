import Image from 'next/image';

export default function CarCarroussel({ ider, Picture }) {
  return (
    <>
      <div id={`item${ider}`} className='daisy-carousel-item w-full flex justify-center'>
        <Image
          src={Picture}
          width='840'//420
          height='1200'//600
          alt='Promoção'
          loading='lazy'
        />
      </div>
    </>
  );
}
