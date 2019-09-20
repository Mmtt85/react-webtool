import * as React from 'react';
import * as Redux from 'react-redux';
import * as BS from 'react-bootstrap';

import * as WebTool from 'src/hooks';
import { selectAuth } from 'src/redux/selector';
import { logoutAction } from 'src/redux/action/auth';

import Modal from 'src/components/common/modal';
import Login from './login';

export default function Index() {
  const reduxDispatch = Redux.useDispatch();
  const { id } = Redux.useSelector(selectAuth);

  const [openLoginWindow, setOpenLoginWindow] = React.useState(false);
  const { addToast } = WebTool.useToastMsg();

  const tempLogin = React.useCallback(() => setOpenLoginWindow(true), []);

  const logout = React.useCallback(() => {
    reduxDispatch(logoutAction());
    addToast({ title: 'logout', body: 'success' });
  }, [addToast, reduxDispatch]);

  return (
    <BS.NavItem>
      {id ? (
        <BS.DropdownButton
          id="user-info"
          variant="info"
          size="sm"
          title={id}
          alignRight
        >
          <BS.Dropdown.Item onClick={logout}>Logout</BS.Dropdown.Item>
        </BS.DropdownButton>
      ) : (
        <BS.Button variant="info" size="sm" onClick={tempLogin}>
          Login
        </BS.Button>
      )}
      {openLoginWindow && (
        <Modal
          renderHeader={<span>Login</span>}
          renderBody={<Login onClose={() => setOpenLoginWindow(false)} />}
          onHide={() => setOpenLoginWindow(false)}
        />
      )}
    </BS.NavItem>
  );
}
