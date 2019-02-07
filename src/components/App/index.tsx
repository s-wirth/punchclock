import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import '../../style/style.scss';

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={configureStore()}>
        <div className="app-container">
          Hello World!
        </div>
      </Provider>
    );
  }
}
