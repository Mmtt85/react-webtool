import * as React from 'react';

export default function useAutoFocus(ref: any) {
  React.useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, [ref]);
}
