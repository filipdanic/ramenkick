import React from 'react';

const AppLayout = ({
  navigationBar,
  sidebarContent,
  bodyContent,
}) =>
  <div className='flex flex-col bg-blue-300'>
    {navigationBar}
    <div className='flex flex-col md:flex-row'>
      <div className='bg-blue-300 md:relative z-10 p-6 md:h-screen md:w-1/5'>
        <div className='flex flex-wrap flex-row lg:flex-col md:flex-col'>
          {sidebarContent}
        </div>
      </div>
      <div className='flex-1 bg-gray-100 w-full pb-12 pr-2 md:pr-32 lg:pr-64 pl-2 md:pl-4 lg:pl-8'>
        {bodyContent}
      </div>
    </div>
  </div>;

export default AppLayout;
