import * as React from 'react';
import { Route } from 'react-router-dom';

import * as Tools from './tools';
import * as Members from './members';
import Home from './home';

export default function Body() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/tools/base64" component={Tools.Base64} />
      <Route path="/tools/json-parser" component={Tools.JsonParser} />
      <Route path="/tools/make-password" component={Tools.MakePassword} />
      <Route path="/members/search" component={Members.Search} />
      <Route path="/members/seat" component={Members.Seat} />
      <Route path="/members/survey" component={Members.Survey} />
    </div>
  );
}
