import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(value.match(emailRegex) ? '' : 'Invalid email address');
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setPasswordError(value.match(passwordRegex) ? '' : 'Password must be at least 8 characters and contain uppercase, lowercase, and numbers');
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    setConfirmPasswordError(value === password ? '' : 'Passwords do not match');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (emailError || passwordError || confirmPasswordError) {
      // Do not submit if there are errors
      return;
    }

    // Perform your submission logic here
    console.log('Form submitted with:', email, password);
  };

  return (
    <div>
      <h2>Sign Up Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {confirmPasswordError && <p style={{ color: 'red' }}>{confirmPasswordError}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;

