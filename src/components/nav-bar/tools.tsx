import * as React from 'react';
import * as BS from 'react-bootstrap';

import * as WebTool from 'src/hooks';

export default function Tools() {
  const { gotoPage } = WebTool.useHistory();

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
