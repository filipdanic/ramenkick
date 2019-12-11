import React from 'react';
import { Router, Link } from '@reach/router';
import AvatarPage from './pages/avatars';
import ButtonPage from './pages/buttons';
import CheckboxPage from './pages/checkbox';
import CardPage from './pages/card';
import FormsPage from './pages/forms';
import SelectFieldPage from './pages/selectfield';
import TextAreaPage from './pages/textarea';
import TextFieldPage from './pages/textfield';
import TypographyPage from './pages/typography';
import Text from '../lib/components/Text';
import NavigationBar, { NavigationLink } from '../lib/components/NavigationBar';
import AppLayout from '../lib/components/AppLayout';

const AppNavigationBar =
  <NavigationBar
    logoComponent={
      <Text h2 asElement='h1' className='text-danger-action-700'>
        <Link to='/'>#RamenKick</Link>
      </Text>}
    actionComponent={
      <>
        <NavigationLink to='/'>Github</NavigationLink>
        <NavigationLink to='/'>Docs</NavigationLink>
        <NavigationLink to='/'>Twitter</NavigationLink>
      </>
    }
  />;

const AppSidebarNavigation =
  <>
    <Text p className='flex-1 text-sidebar-000 opacity-50 p-2'>Components</Text>
    <Link className='flex-1 text-sidebar-000 p-2' to='/avatar'>Avatar</Link>
    <Link className='flex-1 text-sidebar-000 p-2' to='/button'>Button</Link>
    <Link className='flex-1 text-sidebar-000 p-2' to='/card'>Card</Link>
    <Link className='flex-1 text-sidebar-000 p-2' to='/checkbox'>Checkbox</Link>
    <Link className='flex-1 text-sidebar-000 p-2' to='/selectfield'>SelectField</Link>
    <Link className='flex-1 text-sidebar-000 p-2' to='/textarea'>TextArea</Link>
    <Link className='flex-1 text-sidebar-000 p-2' to='/textfield'>TextField</Link>
    <Text p className='flex-1 text-sidebar-000 opacity-50 p-2' >Other Topics</Text>
    <Link className='flex-1 text-sidebar-000 p-2' to='/typography'>Typography</Link>
    <Link className='flex-1 text-sidebar-000 p-2' to='/forms'>Forms</Link>
  </>;

const AppBody =
  <Router>
    <AvatarPage path='avatar' />
    <ButtonPage path='button' />
    <FormsPage path='forms' />
    <CheckboxPage path='checkbox' />
    <SelectFieldPage path='selectfield' />
    <TextAreaPage path='textarea' />
    <TextFieldPage path='textfield' />
    <TypographyPage path='typography' />
    <CardPage path='card' />
  </Router>;

const App = () => {
  return (
    <>
      <AppLayout
        navigationBar={AppNavigationBar}
        sidebarContent={AppSidebarNavigation}
        bodyContent={AppBody}
      />
    </>
  );
};

export default App;
