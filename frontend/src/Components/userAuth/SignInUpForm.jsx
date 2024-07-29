

import React, { useState  , useContext } from 'react';
import { Form, Container, Row, Col , FloatingLabel ,InputGroup} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import './Signin.css'; // Import CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { faEye, faEyeSlash  } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from 'react-router-dom';
import SocialContainer from '../../Resourses/Social/socialContainer';
import Example from '../../Example';


axios.defaults.withCredentials = true;

const SignInUpForm = ({navigation}) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [signUpData , setSignUpData]= useState({ Email: '', Password: '', confirmPassword: '',username:''});
    const [isFlipped, setFlipped] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
    const [errorMessage, setErrorMessage] = useState(''); // State to manage error message 
    //const { login } = useContext(AuthContext); 
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignUp = async(event) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        if (signUpData.Password !== signUpData.confirmPassword) {
            setErrorMessage('Passwords do not match. Please enter correct passwords.');
            return;
          }

          console.log(signUpData);

          try {
            const response = await axios.post('http://localhost:5000/SignUpUser', {
                username: signUpData.username,
                email: signUpData.Email,
                password: signUpData.Password
        },{
            withCredentials: true
        });
            console.log(response.data);
            navigate('/StudentDetails');
        } catch (error) {
            console.error('Signup failed:', error.message);
            // Handle error (e.g., show error message to user)
        }


        // axios.get('http://localhost:5000/AddUser', {
        //     name: signUpData.username,
        //     email: signUpData.Email,
        //     password: signUpData.Password
        // }, {
        //     withCredentials: true  // Send cookies with the request
        // })
        // .then((res) => {
        //     console.log(res.data);
        //     alert('You have successfully signed up!');
        //     navigate('/TextGeneration');
        // })
        // .catch((error) => {
        //     if (error.response && error.response.data && error.response.data.error) {
        //         setErrorMessage(error.response.data.error);
        //     } else {
        //         setErrorMessage('Sign-up failed. Please try again.');
        //     }
        // });
          
        createUserWithEmailAndPassword(auth, signUpData.Email, signUpData.Password )
            .then((userCredential) => {
                console.log(userCredential);
                // Handle successful sign-up
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // Handle sign-up error
            });

        // Clear the input fields
        setSignUpData({ Email: '', Password: '', confirmPassword: '', username: '' });
    };

    const handleSignIn = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await axios.post('http://localhost:5000/SignInUser', {
                email: signUpData.Email,
                password: signUpData.Password
        },{
            withCredentials: true
        });
            console.log(response.data);
            // Handle success (e.g., show success message, redirect user)
           // navigate('/Login');
        } catch (error) {
            console.error('Signin failed:', error.message);
            // Handle error (e.g., show error message to user)
        }

        signInWithEmailAndPassword(auth, signUpData.Email, signUpData.Password)
            .then((userCredential) => {
                console.log(userCredential);
                alert('signin successful');
                // Handle successful sign-in
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // Handle sign-in error
            });

        // Clear the input fields
        setSignUpData({ Email: '', Password: '', confirmPassword: '', username: '' });
    };

    const handleEmailChange = (e) => {
        setSignUpData({...signUpData, Email : e.target.value});
    };
    const handlePasswordChange = (e) => {
        setSignUpData({...signUpData, Password : e.target.value});
      };
    const handleFlip = () => { 
        setFlipped(!isFlipped);
    };

    const handleSignUpClick = () => {
        setIsSignUp(true);
        setSignUpData({ ...signUpData , Email: '' , Password:''});
        handleFlip();
    };

    const handleSignInClick = () => {
        setIsSignUp(false);
        setSignUpData({ Email: '' , Password:'' , confirmPassword: '', username: ''});
        handleFlip();
    };



    return (
        <Container  >
            <Row className='container'>
                <Col md={6}>
                    <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                        <div className={isSignUp? "container-sign-up" : "container-sign-in"}>
                            <Form onSubmit={isSignUp ? handleSignUp : handleSignIn} className="sign-up-container">
                                <h1>{isSignUp ? "Create Account" : "Sign in"}</h1>

                                <SocialContainer />
                                <span>{isSignUp ? "or use your email for registration" : "or use your account"}</span>


                                {isSignUp && <FloatingLabel
                                        controlId="floatingInput"
                                        label="User Name"
                                    >
                                        <Form.Control type="text" placeholder="Name" value={signUpData.username} onChange={(e) => setSignUpData({ ...signUpData, username : e.target.value })} />

                                    </FloatingLabel>
                                }

                                
                                <FloatingLabel
                                            controlId="floatingInput"
                                            label="Email address"
                                            className="mb-3"
                                        >
                                            <Form.Control
                                            type="email"
                                            placeholder="name@example.com"
                                            value={signUpData.Email}
                                            onChange={handleEmailChange}
                                            />
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="floatingPassword"
                                    label="Password"
                                >
                                    <Form.Control type={ showPassword ? 'text' : 'password'} placeholder ='Password' value={signUpData.Password} onChange={ handlePasswordChange} />
                                        <button
                                            type="button"
                                            className="btn position-absolute top-50 end-0 translate-middle-y border-0"
                                            onClick={togglePasswordVisibility}
                                        >
                                            <FontAwesomeIcon  icon={showPassword ? faEyeSlash : faEye} ></FontAwesomeIcon>
                                        </button>
                                </FloatingLabel>
                                
                                {isSignUp && 
                                 <FloatingLabel
                                    controlId="floatingPassword"
                                    label="Confirm Password"
                                    >
                                        <Form.Control type="password" placeholder ='Confirm Password' value={signUpData.confirmPassword} onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })} />
                                        <button
                                            type="button"
                                            className="btn position-absolute top-50 end-0 translate-middle-y border-0"
                                            onClick={togglePasswordVisibility}
                                        >
                                            <FontAwesomeIcon className="password-icon" icon={showPassword ? faEyeSlash : faEye} ></FontAwesomeIcon>
                                        </button>
                                </FloatingLabel>
                                }

                                {isSignUp && signUpData.Password !== signUpData.confirmPassword && <p>Passwords do not match</p>}
                                <Row className="Button-container" md = {3}>
                                    <Col ><Button variant="success" type="submit" disabled={isSignUp && signUpData.Password !== signUpData.confirmPassword}>{isSignUp ? "Sign Up" : "Sign in"}</Button></Col>
                                    <Col className="btn-right" onClick={isSignUp ? handleSignInClick : handleSignUpClick}>{isSignUp? "Welcome Back" : "Create Account"}</Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
            <footer>
                <p>
                    Created with <i className="fa fa-heart"></i> by
                    <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
                    - Read how I created this and how you can join the challenge
                    <a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
                </p>
            </footer>
        </Container>
    );
};

export default SignInUpForm;
