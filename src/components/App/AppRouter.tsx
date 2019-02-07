import * as React from 'react';
import { connect } from 'react-redux';

import Logger from '../Logger';
import { ViewState, Views } from '../../redux/reducers/viewReducers';
import { ReduxState } from '../../redux/reducers';

interface Props {
  views: ViewState;
}

const renderView = new Proxy(
  {
    [Views.Logger]: <Logger />,
  },
  {
    get(obj: any, prop) {
      if (prop in obj) {
        return obj[prop];
      }
      return obj[Views.Logger];
    },
  }
);

class AppRouter extends React.PureComponent<Props> {
  render() {
    return renderView[this.props.views.activeView];
  }
}

function mapStateToProps(state: ReduxState): Props {
  return {
    views: state.views,
  };
}

export default connect<Props, {}, {}, ReduxState>(mapStateToProps)(AppRouter);
