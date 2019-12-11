import React from 'react';

const AppLayout = ({
  navigationBar,
  sidebarContent,
  bodyContent
}) => React.createElement("div", {
  className: "flex flex-col bg-sidebar-900"
}, navigationBar, React.createElement("div", {
  className: "flex flex-col md:flex-row"
}, React.createElement("div", {
  className: "bg-sidebar-900 md:relative z-10 p-6 md:h-screen md:w-1/5"
}, React.createElement("div", {
  className: "flex flex-wrap flex-row lg:flex-col md:flex-col"
}, sidebarContent)), React.createElement("div", {
  className: "flex-1 bg-gray-100 w-full pb-12 pr-2 md:pr-32 lg:pr-64 pl-2 md:pl-4 lg:pl-8"
}, bodyContent)));

export default AppLayout;