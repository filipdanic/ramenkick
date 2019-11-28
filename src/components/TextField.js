import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const TextField = ({
  name,
  placeholder,
  label,
  type,
  validationError,
  value,
  onChange,
  onBlur,
  onFocus,
  disabled
}) => {

  return (
    <>
      {label &&
        <label className="block text-gray-700 text-sm font-bold mb-2 text-base" htmlFor={name}>
          {label}
        </label>
      }
      <input
        className={cn(
          'shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
          {
            'border-red-500': !!validationError,
            'cursor-not-allowed bg-gray-300': disabled,
          }
        )}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
      />
      {validationError &&
        <p className="text-red-500 text-xs italic">{validationError}</p>
      }
    </>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']).isRequired,
  validationError: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  disabled: PropTypes.bool,
};

export default TextField;
