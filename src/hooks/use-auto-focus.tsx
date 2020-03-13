import * as React from 'react';

const useAutoFocus = (ref: any) => {
  React.useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, [ref]);
};

export default useAutoFocus;
