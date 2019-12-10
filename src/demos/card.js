import React from 'react';
import Text from '../components/Text';
import Card from '../components/Card';

export default () =>
  <>
    <Text h2 className='bg-blue-300 my-8' id="Typography">Card</Text>

    <Text h3 className='bg-indigo-100 my-4'>At a Glance</Text>
    <div className='flex w-full mb-6'>
      <div className='w-1/3 px-4'>
        <Card className='w-64'>
          <Text p>Mini Card</Text>
        </Card>
      </div>

      <div className='w-1/3 px-4'>
        <Card className='w-64 h-32' px={12} py={4} color='bg-indigo-300' shadow='xl'>
          <Text h3>Content</Text>
          <Text p small>Use it all over the place and don’t look back!</Text>
        </Card>
      </div>

      <div className='w-1/3 px-4'>
        <Card className='w-64' px={2} py={4} color='bg-pink-500' shadow='2xl'>
          <Text p center>Button Like?</Text>
        </Card>
      </div>
    </div>

    <Text h3 className='bg-indigo-100 my-4'>Dashboard Vibes</Text>

    <div className='flex w-full mb-6'>
      <div className='w-1/3 px-4'>
        <Card>
          <div className='flex justify-between'>
            <div>
              <Text p uppercase className='text-gray-500'>Savings</Text>
              <Text h2 asElement='span'>$24,000</Text>
            </div>
            <div className='bg-blue-600 rounded-full w-16 h-16 flex items-center'>
              <Text h3 asElement='span' center className='flex-1'>{'💰'}</Text>
            </div>
          </div>
          <Text p small><Text span className='text-green-500 mr-1'>↑ 12%</Text> since last month!</Text>
        </Card>
      </div>

    </div>

  </>;
