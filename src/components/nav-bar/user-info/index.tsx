import * as React from 'react';
import * as Redux from 'react-redux';
import * as BS from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignInAlt,
  faSignOutAlt,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

import * as session from 'src/utils/session';

import * as WebTool from 'src/models/hooks';

import { selectLoginAccount } from 'src/redux/selector';
import { logout } from 'src/redux/action/auth';

import Modal from 'src/components/common/modal';
import MemberCard from 'src/components/common/member';
import Login from './login';

export default function Index() {
  const reduxDispatch = Redux.useDispatch();
  const loginAccount = Redux.useSelector(selectLoginAccount);
  const { addToast } = WebTool.useToastMsg();
  const [openLoginWindow, setOpenLoginWindow] = React.useState(false);
  const [openAccountInfoWindow, setOpenAccountInfoWindow] = React.useState(
    false,
  );

  const onAccountInfo = React.useCallback(
    () => setOpenAccountInfoWindow(true),
    [],
  );
  const onLogin = React.useCallback(() => setOpenLoginWindow(true), []);
  const onLogout = React.useCallback(() => {
    reduxDispatch(logout());
    addToast({ title: 'logout', body: 'success' });
  }, [addToast, reduxDispatch]);

  return (
    <BS.NavItem>
      {loginAccount ? (
        <BS.DropdownButton
          id="user-info"
          variant="info"
          size="sm"
          title={loginAccount.id}
          alignRight
        >
          <BS.Dropdown.Item onClick={onAccountInfo}>
            <FontAwesomeIcon icon={faUserCircle} />
            <span className="ml-1">AccountInfo</span>
          </BS.Dropdown.Item>
          <BS.Dropdown.Item onClick={onLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="ml-1">Logout</span>
          </BS.Dropdown.Item>
        </BS.DropdownButton>
      ) : (
        <BS.Button variant="info" size="sm" onClick={onLogin}>
          <FontAwesomeIcon icon={faSignInAlt} />
        </BS.Button>
      )}
      {openLoginWindow && (
        <Modal
          renderHeader={<span>Login</span>}
          renderBody={<Login onClose={() => setOpenLoginWindow(false)} />}
          onHide={() => setOpenLoginWindow(false)}
        />
      )}
      {openAccountInfoWindow && (
        <Modal
          renderHeader={<span>MyAccount</span>}
          renderBody={<MemberCard member={loginAccount} />}
          onHide={() => setOpenAccountInfoWindow(false)}
        />
      )}
    </BS.NavItem>
  );
}
