import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [toasts, setToasts] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = crypto.randomUUID();
    const nextToasts = [...toasts, { message, variant, id }];
    setToasts(nextToasts);

    // reset form
    setMessage('');
    setVariant('notice');
  };

  const handleDismiss = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />
      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              required
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => (setMessage(event.target.value))}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`;

              return (
                <label htmlFor={id} key={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={variant === option}
                    onChange={(event) => (setVariant(event.target.value))}
                  />
                  {option}
                </label>);
            })}

          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
