import * as React from 'react';
import * as BS from 'react-bootstrap';
import * as Redux from 'react-redux';
// import * as Apollo from 'react-apollo-hooks';
import styled from 'styled-components';

import * as WebTool from 'src/hooks';
import { login } from 'src/redux/action/auth';
// import { GET_USER } from 'src/graphql/user';

import { UserCardModel } from 'src/components/models/user-card/interface';

import { dummyUsers } from 'src/dummy-data/users';

interface Props {
  onClose: () => void;
}
export default function Login({ onClose }: Props) {
  // const client = Apollo.useApolloClient();
  const reduxDispatch = Redux.useDispatch();
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const accountRef = React.useRef();
  const { addToast } = WebTool.useToastMsg();
  WebTool.useAutoFocus(accountRef);

  const authCheck = (id: string, password: string) =>
    dummyUsers.find(user => user.id === id && user.password === password);
  // const { data } = await client.query({
  //   query: GET_USER,
  //   variables: { id },
  // });
  // return data.user;

  const onLogin = React.useCallback(async () => {
    if (!!id && !!password) {
      const user = authCheck(id, password);

      if (user) {
        reduxDispatch(login(new UserCardModel(user)));
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
          input 「admin/admin」 「user1/user1」 「user2/user2」
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
