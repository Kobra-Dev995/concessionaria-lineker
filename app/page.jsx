'use client';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  function handleFormSubmit(e) {
    e.preventDefault();

    const emailUser = e.target[0].value;
    const senhaUser = e.target[1].value;

    console.log('Email: ', emailUser, '\nSenha: ', senhaUser);

    router.replace('/funcionario/');
  }

  return (
    <>
      <main className='flex flex-col h-screen w-screen items-center justify-center'>
        <div className='mx-auto flex w-full max-w-sm flex-col gap-6'>
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-semibold text-zinc-800'>ARCHIP</h1>
            <p className='text-sm text-stone-800 mt-2'>
              Faça login para acessar sua conta
            </p>
          </div>

          <form className='form-group' onSubmit={handleFormSubmit}>
            <div className='form-field'>
              <label className='form-label text-zinc-900'>
                Endereço de Email
              </label>

              <input
                placeholder='Email'
                type='email'
                required
                className='input max-w-full bg-zinc-100 text-zinc-900'
              />
              
            </div>

            <div className='form-field'>
              <label className='form-label text-zinc-900'>Senha</label>
              <div className='form-control'>
                <input
                  placeholder='Senha'
                  type='password'
                  required
                  className='input max-w-full bg-zinc-100 text-zinc-900'
                />
              </div>
            </div>
            <div className='form-field'>
              {/* <div className='form-control justify-between'>
                
                <label className='form-label'>
                  <a className='link link-underline-hover link-primary text-sm'>
                    Forgot your password?
                  </a>
                </label>
              </div> */}
            </div>
            <div className='form-field pt-5'>
              <div className='form-control justify-between'>
                <button
                  type='submit'
                  className='daisy-btn daisy-btn-info w-full rounded-full'
                >
                  Sign in
                </button>
              </div>
            </div>

            {/* <div className='form-field'>
              <div className='form-control justify-center'>
                <a className='link link-underline-hover link-primary text-sm'>
                  Don't have an account yet? Sign up.
                </a>
              </div>
            </div> */}
          </form>
        </div>
      </main>
    </>
  );
}
