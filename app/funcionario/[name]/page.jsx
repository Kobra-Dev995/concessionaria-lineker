'use client';
import {
  useRouter,
  usePathname,
} from 'next/navigation';

export default function ExistingUser() {
  const pathname = usePathname().split('/').at(-1);
  const { push } = useRouter();

  return (
    <>
      <h1>ola {pathname}</h1>
      <button
        onClick={() => push(`/funcionario/${pathname}/profile`)}
        className='daisy-btn daisy-btn-circlex'
      >
        next
      </button>
    </>
  );
}
