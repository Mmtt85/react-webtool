import * as React from 'react';
import * as Redux from 'react-redux';
import _ from 'lodash';

import history from 'src/configurations/history';
import { rootTitle } from 'src/redux/action/styles';

export default function useHistory() {
  const reduxDispatch = Redux.useDispatch();
  const gotoPage = React.useCallback(
    (path: string, title?: string) => {
      history.push(path);
      reduxDispatch(rootTitle(title || _.last(_.split(path, '/'))));
    },
    [reduxDispatch],
  );

  return { gotoPage };
}
