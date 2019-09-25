import * as React from 'react';
import * as BS from 'react-bootstrap';
import * as Redux from 'react-redux';
import styled from 'styled-components';

import * as WT from 'src/hooks';
import { MemberCardModel } from 'src/components/models/member-card/interface';

import { login } from 'src/redux/action/auth';

import deplicatedNaruImage from 'src/static/images/deplicated_naru_image.png';

interface Props {
  onClose: () => void;
}
export default function Login({ onClose }: Props) {
  const reduxDispatch = Redux.useDispatch();
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const accountRef = React.useRef();
  const { addToast } = WT.useToastMsg();
  WT.useAutoFocus(accountRef);

  const onLogin = React.useCallback(() => {
    if (!!id && !!password) {
      const member = new MemberCardModel({
        id,
        name: 'NARU',
        email: 'morolty85@gmail.com',
        image: deplicatedNaruImage,
        etc:
          'ナルの個人情報ですナルの個人情報ですナルの個人情報です\nナルの個人情報です',
      });
      reduxDispatch(login(member));
      addToast({
        body: (
          <>
            <BS.Spinner
              size="sm"
              animation="grow"
              variant="success"
              className="mr-1"
            />
            <span>login success</span>
          </>
        ),
      });
      onClose();
    }
  }, [addToast, id, onClose, password, reduxDispatch]);

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

const StyledButtonsWrapper = styled.div`
  text-align: right;
`;
