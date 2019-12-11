import React from 'react';
import Text from '../../lib/components/Text';
import Avatar from '../../lib/components/Avatar';

export default () =>
  <>
    <Text h2 className='bg-indigo-300 my-8' id="Buttons">Avatar</Text>

    <Text h3 className='bg-indigo-100 my-4'>Circle & Background Image</Text>
    <div className='flex w-full'>
      <Avatar className='m-1' imageUrl='https://picsum.photos/id/1027/480/480' circle xs />
      <Avatar className='m-1' imageUrl='https://picsum.photos/id/1027/480/480' circle sm />
      <Avatar className='m-1' imageUrl='https://picsum.photos/id/1027/480/480' circle md />
      <Avatar className='m-1' imageUrl='https://picsum.photos/id/1027/480/480' circle lg />
      <Avatar className='m-1' imageUrl='https://picsum.photos/id/1027/480/480' circle xl />
    </div>

    <Text h3 className='bg-indigo-100 my-4'>Rounded & Background Image</Text>
    <div className='flex w-full'>
      <Avatar className='m-1' imageUrl='https://picsum.photos/id/1027/480/480' rounded xs />
      <Avatar className='m-1' imageUrl='https://picsum.photos/id/1027/480/480' rounded sm />
      <Avatar className='m-1' imageUrl='https://picsum.photos/id/1027/480/480' rounded md />
      <Avatar className='m-1' imageUrl='https://picsum.photos/id/1027/480/480' rounded lg />
      <Avatar className='m-1' imageUrl='https://picsum.photos/id/1027/480/480' rounded xl />
    </div>

    <Text h3 className='bg-indigo-100 my-4'>Regular & Background Image</Text>
    <div className='flex w-full'>
      <Avatar className='m-1' imageUrl='https://picsum.photos/id/1027/480/480' xs />
      <Avatar className='m-1' imageUrl='https://picsum.photos/id/1027/480/480' sm />
      <Avatar className='m-1' imageUrl='https://picsum.photos/id/1027/480/480' md />
      <Avatar className='m-1' imageUrl='https://picsum.photos/id/1027/480/480' lg />
      <Avatar className='m-1' imageUrl='https://picsum.photos/id/1027/480/480' xl />
    </div>

    <Text h3 className='bg-indigo-100 my-4'>Text</Text>
    <div className='flex w-full'>
      <Avatar className='m-1' text='DK' circle xs />
      <Avatar className='m-1' text='DK' circle sm />
      <Avatar className='m-1' text='DK' circle md />
      <Avatar className='m-1' text='DK' circle lg />
      <Avatar className='m-1' text='DK' circle xl />
    </div>
    <div className='flex w-full'>
      <Avatar className='m-1' text='お茶' circle xs />
      <Avatar className='m-1' text='お茶' circle sm />
      <Avatar className='m-1' text='お茶' circle md />
      <Avatar className='m-1' text='お茶' circle lg />
      <Avatar className='m-1' text='お茶' circle xl />
    </div>
    <div className='flex w-full'>
      <Avatar className='m-1' text='ЧЙ' circle xs />
      <Avatar className='m-1' text='ЧЙ' circle sm />
      <Avatar className='m-1' text='ЧЙ' circle md />
      <Avatar className='m-1' text='ЧЙ' circle lg />
      <Avatar className='m-1' text='ЧЙ' circle xl />
    </div>

    <Text h3 className='bg-indigo-100 my-4'>Customized Styles</Text>
    <div className='flex w-full'>
      <Avatar className='m-1 border-pink-400 border-4' imageUrl='https://picsum.photos/id/1027/480/480' lg circle />
      <Avatar className='m-1 border-blue-500 border-4' text='AD' lg circle />
      <Avatar className='m-1 font-sans font-black' text='FC' lg rounded />
      <Avatar className='m-1 text-4xl font-black' text='gz' lg circle />
      <Avatar className='m-1 font-black' text='lo' color='bg-indigo-300' lg circle />
      <Avatar className='m-1 font-sans' text='vi' color='bg-red-900' lg circle />
    </div>
  </>
// VISUALIZATION_COLORS[Math.floor(name.length % VISUALIZATION_COLORS.length)];
