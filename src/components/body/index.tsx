import * as React from 'react';
import cx from 'classnames';
import { Route } from 'react-router-dom';

import * as Tools from './tools';
import * as Members from './members';
import Home from './home';

const Body = () => (
  <div className={cx('p-2')}>
    <Route path="/" exact component={Home} />
    <Route path="/tools/base64" component={Tools.Base64} />
    <Route path="/tools/json-parser" component={Tools.JsonParser} />
    <Route path="/tools/make-password" component={Tools.MakePassword} />
    <Route path="/members/search" component={Members.Search} />
    <Route path="/members/seat" component={Members.Seat} />
    <Route path="/members/survey" component={Members.Survey} />
  </div>
);

export default Body;
