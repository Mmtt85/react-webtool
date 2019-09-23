import * as React from 'react';
import * as BS from 'react-bootstrap';

import { StyledToastWrapper } from 'src/static/styles/common/toast';

import * as WebTool from 'src/models/hooks';

export default function ToastMsg() {
  const { toastList, removeToast } = WebTool.useToastMsg();
  const toastIdList = React.useMemo(() => toastList.map(toast => toast.id), [
    toastList,
  ]);

  return (
    <StyledToastWrapper>
      {toastList.map(({ id, title, body }) => (
        <BS.Toast
          key={id}
          onClose={() => removeToast(id)}
          show={toastIdList.includes(id)}
          delay={2000}
          autohide
        >
          {title && (
            <BS.Toast.Header>
              <strong className="mr-auto">{title}</strong>
            </BS.Toast.Header>
          )}
          <BS.Toast.Body>{body}</BS.Toast.Body>
        </BS.Toast>
      ))}
    </StyledToastWrapper>
  );
}
