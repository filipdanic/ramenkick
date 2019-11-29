import React, { useState } from 'react';
import Text from '../components/Text';
import Checkbox from '../components/Checkbox';

const defaultValues = {
  tos: true,
  toc: false,
  newsletter: true,
};

export default () => {
  const [ values, setValues ] = useState(defaultValues);
  const handleInputChange = e => {
    const { name, checked } = e.target;
    setValues({ ...values, [name]: checked });
  };

  return (
    <>
      <Text h2 className='bg-yellow-300 my-8' id="TextField">## Checkbox</Text>

      <Text h3 className='bg-yellow-100 my-4'>### At a Glance</Text>
      <div className='flex w-full mb-6'>
        <div className='w-full px-4'>
          <Checkbox
            name='tos'
            label='I accept the Terms of Service'
            value={values.tos}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <Text h3 className='bg-yellow-100 my-4'>### States</Text>
      <div className='flex w-full mb-6 flex-col'>
        <div className='w-full px-4 mb-6'>
          <Checkbox
            name='newsletter'
            label='I want to receive your dumb newsletter!'
            value={values.newsletter}
            onChange={handleInputChange}
            disabled
          />
        </div>

        <div className='w-full px-4'>
          <Checkbox
            name='toc'
            label='I accept the Terms of Service'
            value={values.toc}
            onChange={handleInputChange}
            validationError={values.toc ? undefined : 'You must accept the Terms and Conditions before continuing!'}
          />
        </div>

      </div>
    </>
  );
}
