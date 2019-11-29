import React, { useState } from 'react';
import Text from '../components/Text';
import TextArea from '../components/TextArea';

const defaultValues = {
  intro: '',
  introDisabled: 'Ut enim ad minim veniam! \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  feedback: 'Some feedback…'
};

export default () => {
  const [ values, setValues ] = useState(defaultValues);
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <Text h2 className='bg-red-300 my-8' id="TextField">## TextArea</Text>

      <Text h3 className='bg-red-100 my-4'>### At a Glance</Text>
      <div className='flex w-full mb-6'>
        <div className='w-full px-4'>
          <TextArea
            name='intro'
            placeholder='The introductory paragraph goes here…'
            label='Intro Blurb'
            value={values.intro}
            onChange={handleInputChange}
            rows={5}
          />
        </div>
      </div>

      <Text h3 className='bg-red-100 my-4'>### States</Text>
      <div className='flex w-full mb-6'>
        <div className='w-1/2 px-4'>
          <TextArea
            name='feedback'
            placeholder='The feedback goes here…'
            label='Feedback'
            value={values.feedback}
            validationError={(values.feedback || '').length > 20 ? undefined : 'Feedback must contain at least 20 characters.'}
            onChange={handleInputChange}
          />
        </div>
        <div className='w-1/2 px-4'>
          <TextArea
            name='introDisabled'
            placeholder='The introductory paragraph goes here…'
            label='Intro Blurb (Disabled)'
            value={values.introDisabled}
            onChange={handleInputChange}
            disabled
          />
        </div>
      </div>
    </>
  );
}
