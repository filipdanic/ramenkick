import { useState } from 'react';
import cn from 'classnames';
import React from 'react';

const NavigationBar = ({
  logoComponent,
  actionComponent
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return React.createElement("header", {
    className: "bg-navbar-900 w-full sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center"
  }, React.createElement("div", {
    className: "flex w-full items-center justify-between px-4 py-3 sm:p-0"
  }, React.createElement("div", null, logoComponent), React.createElement("div", {
    className: "sm:hidden"
  }, React.createElement("button", {
    type: "button",
    className: "block transition-all text-gray-500 hover:text-white focus:text-white focus:outline-none",
    onClick: () => setIsOpen(!isOpen)
  }, React.createElement("svg", {
    className: "h-6 w-6 fill-current",
    viewBox: "0 0 24 24"
  }, isOpen ? React.createElement("path", {
    fillRule: "evenodd",
    d: "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
  }) : React.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
  }))))), React.createElement("div", {
    className: cn('px-2 pt-2 pb-4 sm:flex', {
      'hidden': !isOpen
    })
  }, actionComponent));
};

export const NavigationLink = ({
  to,
  children
}) => React.createElement("a", {
  href: to,
  className: "block px-2 py-1 sm:px-4 font-semibold rounded hover:bg-gray-700 text-white"
}, children);
export default NavigationBar;