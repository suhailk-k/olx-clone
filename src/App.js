import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { AuthContext, FirebaseContext } from './store/Context';
import Create from './Pages/Create';
import View from './Pages/ViewPost';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Post from './store/PostContext';

function App() {
  const { firebase } = useContext(FirebaseContext);
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div>
      <Post>
        <Router>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/create'>
            <Create />
          </Route>
          <Route exact path='/view'>
            <View />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
