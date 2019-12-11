import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Card = ({
  children,
  rounded,
  shadow,
  px,
  py,
  color,
  className
}) => React.createElement("div", {
  className: cn(className, {
    'rounded': rounded,
    'shadow': shadow === 'base',
    'shadow-md': shadow === 'md',
    'shadow-lg': shadow === 'lg',
    'shadow-xl': shadow === 'xl',
    'shadow-2xl': shadow === '2xl',
    [`px-${px}`]: true,
    [`py-${py}`]: true,
    [color]: true
  })
}, children);

Card.defaultProps = {
  rounded: true,
  shadow: 'lg',
  px: 4,
  py: 4,
  color: 'bg-white',
  className: ''
};
Card.propTypes = {
  rounded: PropTypes.bool,
  shadow: PropTypes.oneOf(['base', 'md', 'lg', 'xl', '2xl']),
  px: PropTypes.number,
  py: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string
};
export default Card;