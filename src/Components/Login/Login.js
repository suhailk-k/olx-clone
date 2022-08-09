import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/Context';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const handileLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('LoggedIn');
      })
      .catch((error) => alert(error.message))
      .then(() => {
        history.push('/');
      });
  };
  return (
    <div>
      <div className='loginParentDiv'>
        <img width='200px' height='200px' src={Logo}></img>
        <form onSubmit={handileLogin}>
          <label htmlFor='fname'>Email</label>
          <br />
          <input
            className='input'
            type='email'
            id='fname'
            name='email'
            defaultValue='John'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor='lname'>Password</label>
          <br />
          <input
            className='input'
            type='password'
            id='lname'
            name='password'
            defaultValue='Doe'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
