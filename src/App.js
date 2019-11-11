import React, { useState } from 'react';
import {DangerButton, PrimaryButton, SecondaryButton} from './components/Button';

function App() {
  const [ isLoading, toggleLoading ] = useState(false);

  return (
    <div className='flex flex-col w-1/2 mx-auto my-12'>
      <h2 className='text-2xl my-2'>Buttons</h2>
      <h3 className='text-lg my-2'>Defaults</h3>
      <div className='flex w-full mb-6'>
        <div className='w-1/2 px-4'>
          <PrimaryButton onClick={() => console.log('I was clicked')}>
            Primary Action
          </PrimaryButton>
        </div>
        <div className='w-1/2 px-4'>
          <SecondaryButton onClick={() => console.log('I was clicked')}>
            Secondary Action
          </SecondaryButton>
        </div>
      </div>

      <h3 className='text-lg my-2'>Disabled State</h3>
      <div className='flex w-full mb-6'>
        <div className='w-1/2 px-4'>
          <PrimaryButton onClick={() => console.log('I was clicked')} disabled>
            Primary Disabled
          </PrimaryButton>
        </div>
        <div className='w-1/2 px-4'>
          <SecondaryButton onClick={() => console.log('I was clicked')} disabled>
            Secondary Disabled
          </SecondaryButton>
        </div>
      </div>

      <h3 className='text-lg my-2'>Loading State</h3>
      <div className='flex w-full mb-6'>
        <div className='w-1/2 px-4'>
          <PrimaryButton onClick={() => console.log('I was clicked')} loading>
            Primary Loading
          </PrimaryButton>
        </div>
        <div className='w-1/2 px-4'>
          <SecondaryButton onClick={() => console.log('I was clicked')} loading>
            Secondary Loading
          </SecondaryButton>
        </div>
      </div>

      <h3 className='text-lg my-2'>Disabled + Loading State</h3>
      <div className='flex w-full mb-6'>
        <div className='w-1/2 px-4'>
          <PrimaryButton onClick={() => console.log('I was clicked')} loading disabled>
            Combo State
          </PrimaryButton>
        </div>
        <div className='w-1/2 px-4'>
          <SecondaryButton onClick={() => console.log('I was clicked')} loading disabled>
            Combo State
          </SecondaryButton>
        </div>
      </div>

      <h3 className='text-lg my-2'>Switch Example</h3>
      <div className='flex w-full mb-6'>
        <div className='w-1/2 px-4'>
          <PrimaryButton onClick={() => toggleLoading(true)} loading={isLoading}>
            Switch to Loading
          </PrimaryButton>
        </div>
        <div className='w-1/2 px-4'>
          <SecondaryButton onClick={() => toggleLoading(false)}>
            Remove Loading
          </SecondaryButton>
        </div>
      </div>

      <h3 className='text-lg my-2'>Danger Button</h3>
      <div className='flex w-full mb-6'>
        <div className='w-1/2 px-4'>
          <DangerButton onClick={() => console.log('I was clicked')}>
            Danger Button
          </DangerButton>
        </div>
        <div className='w-1/2 px-4'>
          <DangerButton onClick={() => console.log('I was clicked')} loading>
            Danger Button
          </DangerButton>
        </div>
      </div>
    </div>
  );
}

export default App;
