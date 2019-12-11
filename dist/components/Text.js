import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];

const chooseTag = props => {
  const element = tags.find(key => props[key]);
  return element || 'p';
};

const Text = ({
  asElement,
  children,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  uppercase,
  lowercase,
  center,
  left,
  right,
  justify,
  small,
  className,
  sans,
  serif,
  mono,
  ...props
}) => {
  return React.createElement(asElement || chooseTag({
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span
  }), { ...props,
    className: cn(className || '', {
      'text-4xl lg:text-5xl': h1,
      'text-3xl lg:text-4xl': h2,
      'text-2xl lg:text-3xl': h3,
      'text-xl lg:text-2xl': h4,
      'text-lg lg:text-xl': h5,
      'text-lg lg:text-lg': h6,
      'text-base': (p || span) && !small,
      'text-sm': small,
      'uppercase': uppercase,
      'lowercase': lowercase,
      'font-sans': sans,
      'font-serif': serif,
      'font-mono': mono,
      'text-center': center,
      'text-left': left,
      'text-right': right,
      'text-justify': justify
    })
  }, children);
};

Text.propTypes = {
  asElement: PropTypes.oneOf(tags),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
  p: PropTypes.bool,
  span: PropTypes.bool,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  small: PropTypes.bool,
  sans: PropTypes.bool,
  serif: PropTypes.bool,
  mono: PropTypes.bool,
  center: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  justify: PropTypes.bool
};
export default Text;