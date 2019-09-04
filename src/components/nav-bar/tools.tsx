import * as React from 'react';
import history from 'history';
import { NavDropdown } from 'react-bootstrap';

const Tools = () => {
  const gotoPage = React.useCallback(path => history.push(path), []);

  return (
    <NavDropdown title="Tools" id="basic-nav-dropdown">
      <NavDropdown.Item onClick={() => gotoPage('/tools/base64')}>
        <span>Base64</span>
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => gotoPage('/tools/json-parser')}>
        <span>JsonParser</span>
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => gotoPage('/tools/make-password')}>
        <span>MakePassword</span>
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default Tools;
