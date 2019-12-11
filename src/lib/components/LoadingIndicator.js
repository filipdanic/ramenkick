import React from 'react';
import cn from 'classnames';
import './LoadingIndicator.css';
import { ButtonVariants } from './constants';

export default ({ variant }) => {
  const className = cn(
    'loading-indicator--dot',
    {
      'bg-primary-action-000': variant === ButtonVariants.PRIMARY,
      'bg-secondary-action-000': variant === ButtonVariants.SECONDARY,
      'bg-danger-action-000': variant === ButtonVariants.DANGER,
    }
  );

  return (
    <div className='loading-indicator' data-label='LoadingIndicator'>
      <div className={className}>{''}</div>
      <div className={className}>{''}</div>
      <div className={className}>{''}</div>
    </div>
  );
}
