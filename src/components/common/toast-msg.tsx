import * as React from 'react';
import * as BS from 'react-bootstrap';

import { StyledToastWrapper } from 'src/styles/common/toast';

import * as WebTool from 'src/hooks';

export default function ToastMsg() {
  const { toastList, removeToast } = WebTool.useToastMsg();
  const toastIdList = React.useMemo(() => toastList.map(toast => toast.id), [
    toastList,
  ]);

  return (
    <StyledToastWrapper>
      {toastList.map(toast => (
        <BS.Toast
          key={toast.id}
          onClose={() => removeToast(toast.id)}
          show={toastIdList.includes(toast.id)}
          delay={2000}
          autohide
        >
          <BS.Toast.Header>
            <strong className="mr-auto">{toast.title}</strong>
          </BS.Toast.Header>
          <BS.Toast.Body>{toast.body}</BS.Toast.Body>
        </BS.Toast>
      ))}
    </StyledToastWrapper>
  );
}
