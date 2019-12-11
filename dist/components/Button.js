function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import LoadingIndicator from './LoadingIndicator';
import { ButtonVariants } from './constants';
import { ButtonPropTypes, getClassNames } from './buttonUtils';
export const BaseButton = ({
  children,
  onClick,
  type,
  variant,
  disabled,
  loading
}) => {
  return React.createElement("button", {
    "data-label": "Button",
    className: getClassNames(variant, disabled, loading),
    onClick: loading || disabled ? undefined : onClick,
    type: type
  }, loading ? React.createElement(LoadingIndicator, {
    variant: variant
  }) : children);
};
export const PrimaryButton = props => {
  return React.createElement(BaseButton, _extends({}, props, {
    variant: ButtonVariants.PRIMARY
  }));
};
export const SecondaryButton = props => {
  return React.createElement(BaseButton, _extends({}, props, {
    variant: ButtonVariants.SECONDARY
  }));
};
export const DangerButton = props => {
  return React.createElement(BaseButton, _extends({}, props, {
    variant: ButtonVariants.DANGER
  }));
};
BaseButton.propTypes = ButtonPropTypes;
PrimaryButton.propTypes = ButtonPropTypes;
SecondaryButton.propTypes = ButtonPropTypes;
DangerButton.propTypes = ButtonPropTypes;
BaseButton.defaultProps = {
  type: 'button'
};