import CarCarroussel from './CarCarroussel';

export default function Carroussel() {
  return (
    <>
      <div className='daisy-carousel w-full'>
        <CarCarroussel ider={1} Picture={'/carroPromocao.png'} />
        <CarCarroussel ider={2} Picture={'/Promoção 2.png'} />
        <CarCarroussel ider={3} Picture={'/carroPromocao.png'} />
        <CarCarroussel ider={4} Picture={'/Promoção 2.png'} />
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
