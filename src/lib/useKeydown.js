import React from 'react';

function useKeydown(key, callback) {
  React.useEffect(() => {
    function onEscapeDown(event) {
      console.log({ event });
      if (event.key === key) {
        callback();
      }
    }
    window.addEventListener('keydown', onEscapeDown);

    return () => {
      window.removeEventListener('keydown', onEscapeDown);
    };
  }, [key, callback]);
}

export default useKeydown;