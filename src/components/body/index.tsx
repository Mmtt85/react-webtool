import * as React from 'react';
import { Route } from 'react-router-dom';

import Home from './home';
import { Base64, JsonParser, MakePassword } from './tools';
import { Search, Seat, Survey } from './members';

const Body = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/tools/base64" component={Base64} />
    <Route path="/tools/json-parser" component={JsonParser} />
    <Route path="/tools/make-password" component={MakePassword} />
    <Route path="/members/search" component={Search} />
    <Route path="/members/seat" component={Seat} />
    <Route path="/members/survey" component={Survey} />
  </>
);

export default Body;
