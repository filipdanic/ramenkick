import React, { useState } from 'react';
import Text from '../components/Text';
import TextField from '../components/TextField';

const defaultValues = { secretIdentity: 'Batman', password: 'GothamNeedsMe', username: 'jon', otherUsername: 'notbatman' };

export default () => {
  const [ values, setValues ] = useState(defaultValues);
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <Text h2 className='bg-pink-300 my-8' id="TextField">## TextField</Text>

      <Text h3 className='bg-pink-100 my-4'>### At a Glance</Text>
      <div className='flex w-full mb-6'>
        <div className='w-1/2 px-4'>
          <TextField
            name='secretIdentity'
            placeholder='Batman'
            label='Secret Identity'
            type='text'
            value={values.secretIdentity}
            onChange={handleInputChange}
          />
        </div>
        <div className='w-1/2 px-4'>
          <TextField
            name='password'
            placeholder='************'
            label='Password'
            type='password'
            value={values.password}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <Text h3 className='bg-pink-100 my-4'>### States</Text>
      <div className='flex w-full mb-6'>
        <div className='w-1/2 px-4'>
          <TextField
            name='username'
            placeholder='batman67'
            label='Username'
            type='text'
            validationError={(values.username || '').length > 5 ? undefined : 'Username must contain at least 5 characters.'}
            value={values.username}
            onChange={handleInputChange}
          />
        </div>
        <div className='w-1/2 px-4'>
          <TextField
            name='otherUsername'
            placeholder='batman67'
            label='Username'
            type='text'
            value={values.otherUsername}
            onChange={handleInputChange}
            disabled
          />
        </div>
      </div>
    </>
  );
}
