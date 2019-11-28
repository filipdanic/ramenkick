import React, { useState } from 'react';
import Text from '../components/Text';
import SelectField from '../components/SelectField';

const defaultValues = {
  pepper: 'SR',
  disabled: 'HA',
  error: 'MC'
};

const pepperOptions = [
  { id: 312, label: 'Anaheim Pepper', value: 'AH' },
  { id: 313, label: 'Serrano Pepper', value: 'SR' },
  { id: 314, label: 'Habañero Pepper', value: 'HA' },
  { id: 315, label: 'Piri Piri', value: 'PP' },
  { id: 316, label: 'Mirasol Chili', value: 'MC' },
];

export default () => {
  const [ values, setValues ] = useState(defaultValues);
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className='flex flex-col w-1/2 mx-auto my-12'>
      <Text h2 className='bg-indigo-300 my-8' id="TextField">## SelectField</Text>

      <Text h3 className='bg-indigo-100 my-4'>### At a Glance</Text>
      <div className='flex w-full mb-6'>
        <div className='w-1/3 px-4'>
          <SelectField
            name='pepper'
            label='Favourite Hot Pepper?'
            options={pepperOptions}
            value={values.pepper}
            onChange={handleInputChange}
          />
        </div>
        <div className='w-1/3 px-4'>
          <SelectField
            name='pepper'
            label='Disabled State'
            options={pepperOptions}
            value={values.disabled}
            onChange={handleInputChange}
            disabled
          />
        </div>
        <div className='w-1/3 px-4'>
          <SelectField
            name='error'
            label='Error State'
            options={pepperOptions}
            value={values.error}
            onChange={handleInputChange}
            validationError={values.error === 'MC' ? 'Select anything but the Mirasol Chili!' : undefined}
          />
        </div>
      </div>
    </div>
  );
}
