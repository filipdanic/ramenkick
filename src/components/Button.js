import React from 'react';
import LoadingIndicator from './LoadingIndicator';
import { ButtonVariants } from './constants';
import { ButtonPropTypes, getClassNames } from './buttonUtils';

export const BaseButton = ({ children, onClick, type, variant, disabled, loading }) => {
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

export const PrimaryButton = (props) => {
  return <BaseButton {...props} variant={ButtonVariants.PRIMARY} />;
};

export const SecondaryButton = (props) => {
  return <BaseButton {...props} variant={ButtonVariants.SECONDARY} />;
};

export const DangerButton = (props) => {
  return <BaseButton {...props} variant={ButtonVariants.DANGER} />;
};

BaseButton.propTypes = ButtonPropTypes;
PrimaryButton.propTypes = ButtonPropTypes;
SecondaryButton.propTypes = ButtonPropTypes;
DangerButton.propTypes = ButtonPropTypes;

BaseButton.defaultProps = {
  type: 'button',
};
