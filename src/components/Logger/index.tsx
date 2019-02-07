import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as moment from 'moment';
import { ReduxState } from '../../redux/reducers';

interface StateProps {
}

interface DispatchProps {
}

type Props = StateProps & DispatchProps;

class Logger extends React.PureComponent<Props> {
  render() {
    return (
      <div className="logger">
        <div className="logger__header">
          <h1>Today is {moment().format('dddd')}, {moment().format("MMM Do YY")}</h1>
          <div className="logger__btns-wrapper">
            <button className="default-btn start-btn">Start</button>
            <button className="default-btn stop-btn">Stop</button>
          </div>
        </div>
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
