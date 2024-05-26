import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../slices/authSlice';
import styles from '../css/LoginScreen.module.css';
import logo from '../icons/employee_polls_logo.svg'

const Login = () => {
  const users = useSelector(state => state.users.items);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('sarahedo');
  const [password, setPassword] = useState('password123');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!username) {
      errors.username = 'Username is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    if (!users || !Object.keys(users).includes(username)) {
      errors.username = 'Username does not exist';
    }

    if (Object.keys(users).includes(username) && users[username].password !== password) {
      errors.password = 'Password is incorrect';
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      dispatch(
        authActions.login({
          userId: username
        })
      );
      
      const urlParams = new URLSearchParams(window.location.search);
      const redirectUrl = urlParams.get("redirectTo");
      navigate(!redirectUrl ? "/" : redirectUrl);
    }
  };

  return (
    <div className={styles["container"]}>
        <div className={styles["login-box"]}>
            <h1>Employee Polls</h1>
            <img src={logo} alt="Employee Polls Logo" />
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div>
                  <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={errors.username ? styles["error"] : ""}
                  data-testid="username-field" />
                  {errors.username && <div className={styles["error-text"]}>{errors.username}</div>}
              </div>
              <div>
                  <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={errors.password ? styles["error"] : ""}
                  data-testid="password-field" />
                  {errors.password && <div className={styles["error-text"]}>{errors.password}</div>}
              </div>
              <button type="submit" data-testid="submit-button">Login</button>
            </form>
        </div>
    </div>
  );
};

export default Login;