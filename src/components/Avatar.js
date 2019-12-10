import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const COLORS = [
  'bg-red-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-pink-500',
  'bg-orange-500',
  'bg-yellow-500',
  'bg-teal-500',
  'bg-red-500',
];


/**
 * Ensures that the same color is used for same initials.
 * @param {string} text
 * @param {string} color
 * @return {string}
 */
const getBGColor = (text = '', color) =>
  color ?
    color :
    COLORS[
      Math.floor(Number(
        text
          .split('')
          .map(_ => _.charCodeAt(0))
          .join('')
      )) % COLORS.length
    ];

const Avatar = ({
  className,
  imageUrl,
  rounded,
  circle,
  xs, sm, md, lg, xl,
  color,
  text,
}) => {
  const bgColor = getBGColor(text, color);
  return (
    <div
      className={
        cn(`flex text-white ${className}`, {
          'text-sm h-8 w-8': xs,
          'text-lg h-12 w-12': sm,
          'text-xl h-16 w-16': md,
          'text-2xl h-20 w-20': lg,
          'text-3xl h-24 w-24': xl,
          'rounded': rounded,
          'rounded-full': circle,
          'items-center justify-center': true,
          [bgColor]: true
        })
      }
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <span aria-hidden='true'>{imageUrl ? '' : text.substr(0, 2)}</span>
    </div>
  );
};

Avatar.defaultProps = {
  className: '',
  text: '',
  rounded: false,
  circle: true,
  xs: true,
  sm: false,
  md: false,
  lg: false,
  xl: false,
};

Avatar.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
};

export default Avatar;
