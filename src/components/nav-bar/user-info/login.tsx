import * as React from 'react';
import * as BS from 'react-bootstrap';
import * as Redux from 'react-redux';

import { StyledButtonsWrapper } from 'src/static/styles/nav-bar/user-info/login';

import * as session from 'src/utils/session';

import * as WebTool from 'src/models/hooks';
import { makeMember } from 'src/models/records/member';

import { login } from 'src/redux/action/auth';

interface Props {
  onClose: () => void;
}
export default function Login({ onClose }: Props) {
  const reduxDispatch = Redux.useDispatch();
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const accountRef = React.useRef();
  WebTool.useAutoFocus(accountRef);

  const onLogin = React.useCallback(() => {
    if (!!id && !!password) {
      const member = makeMember({
        id,
        name: 'NARU',
        email: 'morolty85@gmail.com',
        etc:
          'ナルの個人情報ですナルの個人情報ですナルの個人情報です\nナルの個人情報です',
      });
      reduxDispatch(login(member));
      onClose();
    }
  }, [id, onClose, password, reduxDispatch]);

  return (
    <BS.Form className="m-0">
      <BS.Form.Group>
        <BS.Form.Label column={false}>Account</BS.Form.Label>
        <BS.Form.Control
          type="text"
          size="sm"
          placeholder="Enter Account"
          ref={accountRef}
          onChange={({ target }) => setId(target.value)}
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
