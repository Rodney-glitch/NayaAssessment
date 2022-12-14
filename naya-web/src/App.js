import React from 'react';

import Login from './Login/login.js'
import { Route,  BrowserRouter as Router } from 'react-router-dom';
import Sketch from './Sketch/sketch.js'
import Explore from './Explore/explore';
import Edit from './Edit/edit';
 
class App extends React.Component {
     render() {
        return (
          <Router>
            <Route exact path='/sketch' component={Sketch}/>
            <Route exact path='/explore' component={Explore}/>
            <Route exact path='/edit/:sketchId' component={Edit}/>
            <Route exact path='/' component={Login}/>
          </Router>
        )
     }
}

export default App;
