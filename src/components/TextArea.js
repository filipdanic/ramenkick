import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const TextArea = ({
  name,
  placeholder,
  label,
  validationError,
  value,
  onChange,
  onBlur,
  onFocus,
  disabled,
  rows,
}) => {

  return (
    <>
      {label &&
        <label className="block text-gray-700 text-sm font-bold mb-2 text-base" htmlFor={name}>
          {label}
        </label>
      }
      <textarea
        className={cn(
          'shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
          {
            'border-red-500': !!validationError,
            'cursor-not-allowed bg-gray-300': disabled
          }
        )}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        rows={rows}
        value={value}
      />

      {validationError &&
        <p className="text-red-500 text-xs italic">{validationError}</p>
      }
    </>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  label: PropTypes.string,
  validationError: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  disabled: PropTypes.bool,
  rows: PropTypes.number,
};

TextArea.defaultProps = {
  rows: 1,
};

export default TextArea;
