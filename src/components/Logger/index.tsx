import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ReduxState } from '../../redux/reducers';

interface StateProps {
}

interface DispatchProps {
}

type Props = StateProps & DispatchProps;

class Logger extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        Empty Logger Component
      </div>
    );
  }
}

function mapStateToProps(state: ReduxState): StateProps {
  return {
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
  };
}

export default connect<StateProps, DispatchProps, {}, ReduxState>(mapStateToProps, mapDispatchToProps)(Logger);
