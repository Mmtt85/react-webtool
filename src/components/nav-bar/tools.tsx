import * as React from 'react';
import * as Redux from 'react-redux';
import * as BS from 'react-bootstrap';
import _ from 'lodash';

import history from 'src/configurations/history';
import { rootTitle } from 'src/redux/action/styles';

export default function Tools() {
  const reduxDispatch = Redux.useDispatch();
  const gotoPage = React.useCallback(
    path => {
      history.push(path);
      reduxDispatch(rootTitle(_.last(_.split(path, '/'))));
    },
    [reduxDispatch],
  );

  return (
    <BS.NavDropdown title="Tools" id="basic-nav-dropdown">
      <BS.NavDropdown.Item onClick={() => gotoPage('/tools/base64')}>
        <span>Base64</span>
      </BS.NavDropdown.Item>
      <BS.NavDropdown.Item onClick={() => gotoPage('/tools/json-parser')}>
        <span>JsonParser</span>
      </BS.NavDropdown.Item>
      <BS.NavDropdown.Item onClick={() => gotoPage('/tools/make-password')}>
        <span>MakePassword</span>
      </BS.NavDropdown.Item>
    </BS.NavDropdown>
  );
}
