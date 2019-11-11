import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from './LoadingIndicator';
import { ButtonVariants } from './constants';
import { getClassNames } from './buttonUtils';

export const Button = ({ children, onClick, type, variant, disabled, loading }) => {
  return (
    <button
      data-label='Button'
      className={getClassNames(variant, disabled, loading)}
      onClick={loading || disabled ? undefined : onClick}
      type={type}
    >
      {loading ?
        <LoadingIndicator variant={variant} /> :
        children
      }
    </button>
  );
};

const ButtonPropTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([ PropTypes.element, PropTypes.node, PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

export const PrimaryButton = (props) => {
  return <Button {...props} variant={ButtonVariants.PRIMARY} />;
};

export const SecondaryButton = (props) => {
  return <Button {...props} variant={ButtonVariants.SECONDARY} />;
};

export const DangerButton = (props) => {
  return <Button {...props} variant={ButtonVariants.DANGER} />;
};

Button.propTypes = ButtonPropTypes;
Button.defaultProps = {
  type: 'button',
};

PrimaryButton.propTypes = ButtonPropTypes;
SecondaryButton.propTypes = ButtonPropTypes;
DangerButton.propTypes = ButtonPropTypes;
