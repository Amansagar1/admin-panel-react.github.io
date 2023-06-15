import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

function LoginPages() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showUsernameError, setShowUsernameError] = useState(false);
  const [showForgotPasswordError, setShowForgotPasswordError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [usernameValid, setUsernameValid] = useState(true);

  const handleUsernameChange = (event) => {
    const inputValue = event.target.value;
    setUsername(inputValue);
    setUsernameValid(inputValue.length >= 6);
    setShowUsernameError(false);
    setShowForgotPasswordError(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setShowUsernameError(false);
    setShowForgotPasswordError(false);
  };

  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '' && usernameValid) {
      setLoginSuccess(true);
      console.log('Logged in successfully');
    } else {
      setShowUsernameError(true);
      setShowForgotPasswordError(false);
    }
  };

  const handleForgotPassword = () => {
    if (username.trim() === '' || password.trim() === '') {
      setShowForgotPasswordError(true);
    } else {
      // Perform forgot password logic here
      console.log('Forgot password');
    }
  };

  if (loginSuccess) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="bg-[#4e657a] w-full p-10 flex ">
      <div className="bg-[#435C70] justify-center p-20  mt-10 mb-10 w-[40%] ml-[33%] text-white">
        <h1 className="text-center font-bold text-[18px]">Welcome to Dashboard, Login</h1>
        <div className="flex flex-col p-3 justify-center mt-10 text-[18px] ">
          <label htmlFor="username" className="mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className={`bg-[#54657D] p-2 flex text-lg ${!usernameValid && 'border-red-500'}`}
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter username"
            required
          />

          {!usernameValid && (
            <p className="text-red-500">Please enter a valid username</p>
          )}

          {showUsernameError && (
            <p className="text-red-500">
              Please enter a valid username and password
            </p>
          )}

          <label htmlFor="password" className="mt-4 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-[#54657D] p-2 flex text-lg"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password (Hint: 123456)"
            minLength="6"
            required
          />
          
        </div>
        <div className="flex flex-col p-3 justify-center text-white">
          {username.trim() !== '' && password.trim() !== '' && usernameValid ? (
            <Link
              to="/dashboard"
              className="items-center bg-yellow-500 p-3 text-center font-bold hover:bg-[#496176] hover:text-yellow-500 hover:border"
              onClick={handleLogin}
            >
              LOGIN
            </Link>
          ) : (
            <button
              className="items-center bg-yellow-500 p-3 text-center font-bold hover:bg-[#496176] hover:text-yellow-500 hover:border"
              disabled
            >
              LOGIN
            </button>
          )}

          <button
            className="items-center bg-yellow-500 mt-5 p-3 font-bold hover:bg-[#496176] hover:text-yellow-500 hover:border"
            onClick={handleForgotPassword}
          >
            FORGOT YOUR PASSWORD?
          </button>

          {showForgotPasswordError && (
            <p className="text-red-500">Please fill in the username</p>
          )}

          {loginSuccess && (
            <p className="text-green-500">Login successful!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPages;
