import * as React from 'react';
import * as BS from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { StyledButtonsWrapper } from 'src/styles/nav-bar/user-info/login';

import { loginAction } from 'src/redux/action/auth';
import * as WT from 'src/hooks';

interface Props {
  onClose: () => void;
}
export default function Login({ onClose }: Props) {
  const reduxDispatch = useDispatch();
  const [account, setAccount] = React.useState('');
  const [password, setPassword] = React.useState('');
  const accountRef = React.useRef();
  WT.useAutoFocus(accountRef);

  const onLogin = React.useCallback(() => {
    if (!!account && !!password) {
      reduxDispatch(loginAction(account));
      onClose();
    }
  }, [account, onClose, password, reduxDispatch]);

  return (
    <BS.Form className="m-0">
      <BS.Form.Group>
        <BS.Form.Label column={false}>Account</BS.Form.Label>
        <BS.Form.Control
          type="text"
          size="sm"
          placeholder="Enter Account"
          ref={accountRef}
          onChange={({ target }) => setAccount(target.value)}
          onKeyDown={e => e.key === 'Enter' && onLogin()}
        />
      </BS.Form.Group>
      <BS.Form.Group>
        <BS.Form.Label column={false}>Password</BS.Form.Label>
        <BS.Form.Control
          type="password"
          size="sm"
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
          onKeyDown={e => e.key === 'Enter' && onLogin()}
        />
      </BS.Form.Group>
      <StyledButtonsWrapper>
        <BS.Badge variant="danger" className="pl-1 pr-2">
          <BS.Spinner size="sm" animation="grow" />
          input any account/password
        </BS.Badge>
        <BS.Button
          className="ml-2"
          variant="outline-info"
          size="sm"
          onClick={onLogin}
        >
          Login
        </BS.Button>
        <BS.Button
          className="ml-2"
          variant="outline-secondary"
          size="sm"
          onClick={onClose}
        >
          Close
        </BS.Button>
      </StyledButtonsWrapper>
    </BS.Form>
  );
}
