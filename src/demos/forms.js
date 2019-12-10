import React, {useState} from 'react';
import Text from '../components/Text';
import TextField from '../components/TextField';
import Checkbox from '../components/Checkbox';
import Card from '../components/Card';
import { PrimaryButton } from '../components/Button';

const defaultValues = {
  firstName: '',
  lastName: '',
  city: '',
  zip: '',
  state: '',
  email: '',
  password: '',
  confirm: false,
};

export default () => {
  const [ values, setValues ] = useState(defaultValues);
  const handleInputChange = e => {
    const { name, value, checked } = e.target;
    setValues({ ...values, [name]: name === 'confirm' ? checked : value });
  };

  return (
    <div className='w-full lg:max-w-2xl'>
      <Text h2 className='bg-blue-300 my-8' id="Typography">## Forms</Text>

      <Text p>Currently, there are no Form-like abstractions out of the box – you are free to setup wrappers that suit
        your needs. Here are some layouts for inspiration!</Text>

      <Text h3 className='bg-blue-100 my-8' id="Typography">## Signup Form</Text>

      <Card className='max-w-lg'>
        <form
          onSubmit={e => e.preventDefault()}
          className='w-full'
        >
          <div className='flex w-full flex-col'>
            <div className='flex flex-row w-full mb-8'>
              <div className='w-1/2 px-2'>
                <TextField
                  value={values.firstName}
                  name='firstName'
                  type='text'
                  label='First name'
                  placeholder='Bruce'
                  onChange={handleInputChange}
                />
              </div>
              <div className='w-1/2 px-2'>
                <TextField
                  value={values.lastName}
                  name='lastName'
                  type='text'
                  label='Last name'
                  placeholder='Wayne'
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className='flex flex-row w-full mb-8'>
              <div className='w-1/3 px-2'>
                <TextField
                  value={values.city}
                  name='city'
                  type='text'
                  label='City'
                  placeholder='Gotham'
                  onChange={handleInputChange}
                />
              </div>
              <div className='w-1/3 px-2'>
                <TextField
                  value={values.zip}
                  name='zip'
                  type='text'
                  label='ZIP Code'
                  placeholder='53540'
                  onChange={handleInputChange}
                />
              </div>
              <div className='w-1/3 px-2'>
                <TextField
                  value={values.state}
                  name='state'
                  type='text'
                  label='State Code'
                  placeholder='NYC'
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className='flex flex-row w-full mb-8'>
              <div className='w-1/2 px-2'>
                <TextField
                  value={values.email}
                  name='email'
                  type='text'
                  label='Email'
                  placeholder='bruce@waynecorp.org'
                  onChange={handleInputChange}
                />
              </div>
              <div className='w-1/2 px-2'>
                <TextField
                  value={values.password}
                  name='password'
                  type='password'
                  label='Password'
                  placeholder='******'
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className='flex flex-row w-full mb-8'>
              <div className='w-full px-2'>
                <Checkbox
                  name='confirm'
                  label='I solemnly swear that I am not Batman.'
                  value={values.confirm}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className='flex flex-row w-1/2 m-auto mb-8 px-2'>
              <PrimaryButton onClick={() => alert('woohoo')}>Sign up</PrimaryButton>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};
