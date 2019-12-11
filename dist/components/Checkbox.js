import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const CheckboxSVG = ({
  checked
}) => React.createElement("svg", {
  className: cn('w-4 h-4 text-green-600 pointer-events-none', {
    'hidden': !checked
  }),
  viewBox: "0 0 172 172"
}, React.createElement("g", {
  fill: "none",
  strokeWidth: "none",
  strokeMiterlimit: "10",
  fontFamily: "none",
  fontWeight: "none",
  fontSize: "none",
  textAnchor: "none",
  style: {
    mixBlendMode: 'normal'
  }
}, React.createElement("path", {
  d: "M0 172V0h172v172z"
}), React.createElement("path", {
  d: "M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z",
  fill: "currentColor",
  strokeWidth: "1"
})));

const Checkbox = ({
  name,
  label,
  validationError,
  value,
  onChange,
  onBlur,
  onFocus,
  disabled
}) => {
  return React.createElement(React.Fragment, null, React.createElement("label", {
    className: cn('custom-label flex w-full cursor-pointer', {
      'opacity-50 cursor-not-allowed': disabled
    }),
    htmlFor: name
  }, React.createElement("div", {
    className: cn('bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2', {
      'bg-gray-300': disabled
    })
  }, React.createElement("input", {
    className: "hidden",
    checked: value,
    id: name,
    name: name,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    disabled: disabled,
    type: "checkbox"
  }), React.createElement(CheckboxSVG, {
    checked: value
  })), React.createElement("span", null, label)), validationError && React.createElement("p", {
    className: "text-red-500 text-xs italic"
  }, validationError));
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  validationError: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  disabled: PropTypes.bool,
  rows: PropTypes.number
};
export default Checkbox;