import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];
const chooseTag = (props) => {
  const element = tags.find(key => props[key]);
  return element || 'p';
};

const Text = ({
  asElement,
  children,
  h1, h2, h3, h4, h5, h6, p, span,
  uppercase,
  lowercase,
  small,
  className,
  sans, serif, mono,
  ...props
}) => {
  return React.createElement(
    asElement || chooseTag({ h1, h2, h3, h4, h5, h6, p, span }),
    {
      ...props,
      className: cn(
        className || '',
        {
          'text-5xl': h1,
          'text-4xl': h2,
          'text-3xl': h3,
          'text-2xl': h4,
          'text-xl': h5,
          'text-lg': h6,
          'text-base': p || span,
          'text-sm': small,
          'uppercase': uppercase,
          'lowercase': lowercase,
          'font-sans': sans,
          'font-serif': serif,
          'font-mono': mono,
        }),
    },
    children
  );
};

Text.propTypes = {
  asElement: PropTypes.oneOf(tags),
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.node, PropTypes.string, PropTypes.number]).isRequired,
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
};

export default Text;
