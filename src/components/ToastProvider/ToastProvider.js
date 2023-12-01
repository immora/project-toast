import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

  const createNewToast = (message, variant) => {
    const id = crypto.randomUUID();
    const nextToasts = [...toasts, { message, variant, id }];
    setToasts(nextToasts);
  }

  const handleDismiss = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }
  const returnValue = { VARIANT_OPTIONS, createNewToast, handleDismiss };

  return (
    <ToastContext.Provider value={returnValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
