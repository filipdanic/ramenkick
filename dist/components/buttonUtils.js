import cn from 'classnames';
import PropTypes from 'prop-types';
import { ButtonVariants } from './constants';
/**
 *
 * @param {ButtonVariants} variant
 * @param {boolean} disabled
 * @param {boolean} loading
 * @return {string}
 */

export const getClassNames = (variant, disabled, loading) => cn('px-6 py-2 rounded-lg font-sans transition-all w-full', {
  'bg-primary-action-900 text-primary-action-000 border border-primary-action-900': variant === ButtonVariants.PRIMARY,
  'hover:bg-primary-action-000 hover:text-primary-action-900': variant === ButtonVariants.PRIMARY && !loading,
  'bg-secondary-action-900 text-secondary-action-000 border border-secondary-action-500': variant === ButtonVariants.SECONDARY,
  'hover:border-secondary-action-000': variant === ButtonVariants.SECONDARY && !loading,
  'bg-danger-action-900 text-danger-action-000 border border-danger-action-900': variant === ButtonVariants.DANGER,
  'hover:bg-danger-action-000 hover:text-danger-action-900': variant === ButtonVariants.DANGER && !loading,
  'opacity-50 cursor-not-allowed': disabled,
  'cursor-wait': loading
});
export const ButtonPropTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool
};