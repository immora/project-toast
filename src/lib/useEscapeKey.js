import React from 'react';

function useEscapeKey(callback) {
  React.useEffect(() => {
    function onEscapeDown(event) {
      if (event.key === 'Escape') {
        callback();
      }
    }
    window.addEventListener('keydown', onEscapeDown);

    return () => {
      window.removeEventListener('keydown', onEscapeDown);
    };
  }, [callback]);
}

export default useEscapeKey;