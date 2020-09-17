import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import MeatPieContainer from './components/MeatPieContainer';
import Navbar from './components/Navbar'
import Blog from './components/Blog'
import CreateBlog from './components/CreateBlog'

function App() {
  return (
    <Provider store={store}>
      <Router>
          <div className="App">
            <Navbar />
            {/* <HooksCakeContainer />
            <CakeContainer />
            <IceCreamContainer /> 
            <MeatPieContainer /> */}
          </div>
          <Switch>
            <Route exact path='/' component={Blog} />
            <Route path='/create-blog' component={CreateBlog} />
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
