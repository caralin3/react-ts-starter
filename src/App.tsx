import * as History from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import './App.css';
import { createHistory, Router } from './routes';
import { ApplicationState, createStore } from './store';

class App extends React.Component {
  private history: History.History = createHistory();

  private store: Store<ApplicationState> = createStore(this.history);
  
  public render() {
    return (
      <Provider store={this.store}>
        <Router history={this.history} />
      </Provider>
    );
  }
}

export default App;
