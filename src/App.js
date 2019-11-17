import React from 'react';
import ButtonPage from './demos/buttons';
import TextFieldPage from './demos/textfield';
import TypographyPage from './demos/typography';
import Text from './components/Text';

function App() {

  return (
    <>
      <div className='flex w-full justify-between bg-black px-4 py-2'>
        <div className='flex'>
          <Text h1 className='text-danger-action-700'># RamenKick</Text>
        </div>
        <div className='flex flex-col text-right'>
          <Text p mono className='text-white'>Design System</Text>
          <Text p mono className='text-white'>Made with Tailwind.css</Text>
          <Text p mono className='text-white'>Running with React</Text>
        </div>
      </div>
      <TextFieldPage />
      <TypographyPage />
      <ButtonPage />
    </>
  );
}

export default App;
