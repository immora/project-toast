import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasts, handleDismiss } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {toasts && toasts.map(({ message, variant, id }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast variant={variant} id={id} handleDismiss={handleDismiss}>{message}</Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
