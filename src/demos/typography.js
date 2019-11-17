import React from 'react';
import Text from '../components/Text';

export default () =>
  <div className='flex flex-col w-1/2 mx-auto my-12'>
    <Text h2 className='bg-blue-300 my-8' id="Typography">## Typography</Text>

    <Text h3 className='bg-blue-100 my-4'>### Headings</Text>
    <Text h1>The ramen is spicy and has a kick!</Text>
    <Text h2>The ramen is spicy and has a kick!</Text>
    <Text h3>The ramen is spicy and has a kick!</Text>
    <Text h4>The ramen is spicy and has a kick!</Text>
    <Text h5>The ramen is spicy and has a kick!</Text>
    <Text h6>The ramen is spicy and has a kick!</Text>

    <Text h3 className='bg-blue-100 my-4'>### Paragraph</Text>
    <Text p><strong>Ramen</strong> (/ˈrɑːmən/) (拉麺, ラーメン rāmen, IPA: [ɾaꜜːmeɴ]) is a Japanese dish with a translation of <em>“pulled noodles.”</em> […] <strong>Tonkotsu</strong> (豚骨, "pork bone"; not to be confused with tonkatsu) soup usually has a cloudy white colored broth. It is similar to the Chinese baitang(白湯) and has a thick broth </Text>

    <Text h3 className='bg-blue-100 my-4'>### Style and Semantics</Text>
    <Text h2 asElement='p'>Heading 2 styles, but a paragraph element!</Text>
    <Text h4 asElement='p' uppercase>Heading 4 + Uppercase with a paragraph element!</Text>
    <Text h5 asElement='span' lowercase>Heading 5 + Lowercase with a span element!</Text>
    <Text p serif>A simple paragraph with the theme’s serif font.</Text>
    <Text p sans>A simple paragraph with the theme’s sans serif font.</Text>
    <Text p mono>A simple paragraph with the theme’s monospace font.</Text>
    <Text p className='bg-yellow-200 text-indigo-600'>A simple paragraph with some <Text span mono className='bg-red-700 text-white px-1'>crazy-ish</Text> stuff.</Text>
  </div>;
