import * as React from 'react';
import * as BS from 'react-bootstrap';
import { List } from 'immutable';

import * as WebTool from 'src/hooks';

import { StyledToastMsg } from './style';

const ToastMsg = () => {
  const { toastList, removeToast } = WebTool.useToastMsg();
  const toastIdList = React.useMemo<List<number>>(
    () => toastList.map(toast => toast.id),
    [toastList],
  );

  return (
    <StyledToastMsg>
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
    </StyledToastMsg>
  );
};

export default ToastMsg;
