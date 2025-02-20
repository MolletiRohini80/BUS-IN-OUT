import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../css/signin.module.css';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    resetForm(); // Reset form fields when toggling
  };

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!username || !password || (!isSignIn && !email)) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    const url = isSignIn
      ? 'http://localhost:9000/login'
      : 'http://localhost:9000/signup';

    const body = isSignIn
      ? { username, password }
      : { username, email, password };

    console.log('Submitting data:', body);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      // Handle success response
      if (response.ok) {
        if (!isSignIn) {
          // For Signup
          setSuccessMessage('Account created successfully!');
          setErrorMessage('');
          setTimeout(() => {
            resetForm(); // Reset the form fields
            setIsSignIn(true); // Switch to Sign In page
          }, 1000);
        } else {
          // For Login
          setSuccessMessage('Login successful!');
          setErrorMessage('');
          setTimeout(() => {
            window.location.href = '/home'; // Redirect to dashboard/home
          }, 1000);
        }
      } else {
        // Handle errors from the backend
        setErrorMessage(data.message || 'Failed to submit the form.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>{isSignIn ? 'USER LOGIN' : 'SIGN UP'}</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                '& .MuiInputBase-input': {
                  color: 'black',
                  backgroundColor: 'white',
                },
                '& .MuiInputLabel-root': {
                  color: 'black',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                },
              }}
            />
            {!isSignIn && (
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  '& .MuiInputBase-input': {
                    color: 'black',
                    backgroundColor: 'white',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'black',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'black',
                    },
                    '&:hover fieldset': {
                      borderColor: 'black',
                    },
                  },
                }}
              />
            )}
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                '& .MuiInputBase-input': {
                  color: 'black',
                  backgroundColor: 'white',
                },
                '& .MuiInputLabel-root': {
                  color: 'black',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="warning"
              fullWidth
              style={{ marginTop: '20px' }}
            >
              {isSignIn ? 'Login' : 'Create'}
            </Button>
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
            <p className={styles.orText}>Or Sign in with social platforms</p>
            <div className={styles.socialButtons}>
              <FaFacebookF className={`${styles.icon} ${styles.facebook}`} />
              <FaGoogle className={`${styles.icon} ${styles.google}`} />
              <FaTwitter className={`${styles.icon} ${styles.twitter}`} />
            </div>
          </form>
          <button onClick={toggleForm} className={styles.switchButton}>
            {isSignIn ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
          </button>
        </div>
        <div className={styles.imageContainer}>
          <h2 className={styles.busText}>Become a Part of Our Bus Service!</h2>
          <img
            src="http://www.pngall.com/wp-content/uploads/2016/05/Bus.png"
            alt="Bus"
            className={styles.busImage}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
