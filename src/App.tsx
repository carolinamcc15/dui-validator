import duiValidator from './duiValidator';
import { useState } from 'react';

const validMessage = 'DUI válido';
const invalidMessage = 'El DUI ingresado no es válido';

function App() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    if (duiValidator(value)) {
      setMessage(validMessage);
    } else {
      setMessage(invalidMessage);
    }
  };

  return (
    <div data-testid='App' className='relative bg-slate-300 w-full min-h-screen flex items-center justify-center flex-col'>
      <div className='w-full max-w-lg text-center flex flex-col gap-16'>
        <h1 className='text-5xl font-bold'>Mi DUI es valido?</h1>
        <form
          className='flex flex-col gap-5 items-center'
          onSubmit={e => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <input
            placeholder='000000000'
            className='rounded p-2 w-full'
            value={value}
            onChange={e => {
              setValue(e.target.value);
            }}
          />
          <p className={`font-bold ${message === validMessage ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
          <button className='bg-blue-700 text-white w-auto py-2 px-3 rounded'>Validar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
