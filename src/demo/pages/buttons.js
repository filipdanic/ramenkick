import React, { useState } from 'react';
import { DangerButton, PrimaryButton, SecondaryButton } from '../../lib/components/Button';
import Text from '../../lib/components/Text';

export default () => {
  const [ isLoading, toggleLoading ] = useState(false);
  return (
    <>
      <Text h2 className='bg-orange-300 my-8' id="Buttons">Buttons</Text>

      <Text h3 className='bg-orange-100 my-4'>Defaults</Text>
      <div className='flex w-full mb-6'>
        <div className='w-1/3 px-4'>
          <PrimaryButton onClick={() => console.log('I was clicked')}>
            Primary Action
          </PrimaryButton>
        </div>
        <div className='w-1/3 px-4'>
          <SecondaryButton onClick={() => console.log('I was clicked')}>
            Secondary Action
          </SecondaryButton>
        </div>
      </div>

      <Text h3 className='bg-orange-100 my-4'>Disabled State</Text>
      <div className='flex w-full mb-6'>
        <div className='w-1/3 px-4'>
          <PrimaryButton onClick={() => console.log('I was clicked')} disabled>
            Primary Disabled
          </PrimaryButton>
        </div>
        <div className='w-1/3 px-4'>
          <SecondaryButton onClick={() => console.log('I was clicked')} disabled>
            Secondary Disabled
          </SecondaryButton>
        </div>
      </div>

      <Text h3 className='bg-orange-100 my-4'>Loading State</Text>
      <div className='flex w-full mb-6'>
        <div className='w-1/3 px-4'>
          <PrimaryButton onClick={() => console.log('I was clicked')} loading>
            Primary Loading
          </PrimaryButton>
        </div>
        <div className='w-1/3 px-4'>
          <SecondaryButton onClick={() => console.log('I was clicked')} loading>
            Secondary Loading
          </SecondaryButton>
        </div>
      </div>

      <Text h3 className='bg-orange-100 my-4'>Loading State & Disabled Style</Text>
      <div className='flex w-full mb-6'>
        <div className='w-1/3 px-4'>
          <PrimaryButton onClick={() => console.log('I was clicked')} loading disabled>
            Combo State
          </PrimaryButton>
        </div>
        <div className='w-1/3 px-4'>
          <SecondaryButton onClick={() => console.log('I was clicked')} loading disabled>
            Combo State
          </SecondaryButton>
        </div>
      </div>

      <Text h3 className='bg-orange-100 my-4'>Interaction Demo</Text>
      <div className='flex w-full mb-6'>
        <div className='w-1/3 px-4'>
          <PrimaryButton onClick={() => toggleLoading(true)} loading={isLoading}>
            Switch to Loading
          </PrimaryButton>
        </div>
        <div className='w-1/3 px-4'>
          <SecondaryButton onClick={() => toggleLoading(false)}>
            Remove Loading
          </SecondaryButton>
        </div>
      </div>

      <Text h3 className='bg-orange-100 my-4'>Danger Button</Text>
      <div className='flex w-full mb-6'>
        <div className='w-1/3 px-4'>
          <DangerButton onClick={() => console.log('I was clicked')}>
            Danger Button
          </DangerButton>
        </div>
        <div className='w-1/3 px-4'>
          <DangerButton onClick={() => console.log('I was clicked')} loading>
            Danger Button
          </DangerButton>
        </div>
      </div>
    </>
  );
};
