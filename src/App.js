import React from 'react';
import { Router, Link } from '@reach/router';
import ButtonPage from './demos/buttons';
import CheckboxPage from './demos/checkbox';
import CardPage from './demos/card';
import FormsPage from './demos/forms';
import SelectFieldPage from './demos/selectfield';
import TextAreaPage from './demos/textarea';
import TextFieldPage from './demos/textfield';
import TypographyPage from './demos/typography';
import Text from './components/Text';
import NavigationBar, { NavigationLink } from './components/NavigationBar';
import AppLayout from './components/AppLayout';

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
