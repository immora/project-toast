import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, children, id, handleDismiss }) {
  const IconVariant = ICONS_BY_VARIANT[variant];

  const handleCloseButtonClick = () => {
    handleDismiss(id);
  }

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <IconVariant size={24} />
      </div>
      <p className={styles.content}>
        {children}
        <VisuallyHidden>{variant} -  {children}</VisuallyHidden>
      </p>
      <button className={styles.closeButton} onClick={handleCloseButtonClick} aria-label="Dismiss message" aria-live="off">
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
