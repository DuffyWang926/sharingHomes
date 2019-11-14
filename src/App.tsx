import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './routes/Hello'
import { Provider } from 'react-redux';
import store,{ history } from './store'
import Header from './containers/Header'
// import { ConnectedRouter } from 'connected-react-router';
import { Router, Route, Switch } from 'react-router-dom';
class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <Header  tabList={['browse catalog','quick upload','contract pricing']}/>
         <Router history={history}>
            <Switch>
              <Route path="/hello" exact component={Hello} />
            </Switch>
          </Router>
      
      
    </Provider>
    );

  } 
}

export default App;
