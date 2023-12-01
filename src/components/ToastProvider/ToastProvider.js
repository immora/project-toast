import React from 'react';
import useEscapeKey from '../../lib/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

  const createNewToast = React.useCallback((message, variant) => {
    const id = crypto.randomUUID();
    const nextToasts = [...toasts, { message, variant, id }];
    setToasts(nextToasts);
  }, [toasts]);

  const handleDismiss = React.useCallback((id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }, [toasts]);

  useEscapeKey(() => {
    // dismiss all toasts
    setToasts([]);
  });

  return (
    <ToastContext.Provider value={{ VARIANT_OPTIONS, createNewToast, handleDismiss, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
