import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ReduxState } from '../../redux/reducers';
import { ViewState, Views } from '../../redux/reducers/viewReducers';

import menuSVG from '../../images/barsSolid.svg';

interface StateProps {
  views: ViewState;
}

interface DispatchProps {
}

type Props = StateProps & DispatchProps;

class Header extends React.PureComponent<Props> {
  render() {
    return (
      <div className="header">
        <div className="header__logo">PunchClock</div>
        <div className="header__navigation">
          <span className={`header__navigation-item ${this.props.views.activeView === Views.Logger ? 'active' : ''}`}>Logger</span>
          <span className={`header__navigation-item disabled`}>Dashboard</span>
        </div>
        <div className="header__menu">
          <div
            className="header__menu-btn"
            onClick={() => { }}>
            <img src={menuSVG} alt="menu-icon" />
          </div>
          <ul className="header__menu-items">
            <li className="menu-item">Logout</li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: ReduxState): StateProps {
  return {
    views: state.views,
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
  };
}

export default connect<StateProps, DispatchProps, {}, ReduxState>(mapStateToProps, mapDispatchToProps)(Header);
