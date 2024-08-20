import React , { Component }  from 'react';
import axios from 'axios';
// import SelfTest from './SelfTest';
// import  ContainerFluidBreak from './TEsting';

import './App.css';
// import NavScrollExample from './NavScrollExample';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInUpForm from './Components/userAuth/SignInUpForm';
import WelcomeContainer from './Welcomecontainer';
import WrappedTextScreen from './Components/quiz/TextGeneration';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Example from './Example';
import WrappedUploadScreen from './Components/resumeTest/handleUpload';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionGeneration from './Components/quiz/QuestionGeneration';
import StudentDetails from './Components/Details_page/Student_details';
import Login from './Components/userAuth/Home';

const Stack = createStackNavigator();

axios.defaults.baseURL = 'http://localhost:5000/';


function App() {
  return {
    <Router>
      <Routes>
        <Route path="/Example" element={<Example/>} />
        <Route path="/StudentDetails" element={<StudentDetails />} />
        <Route path="/" element={<WrappedTextScreen />} />
        <Route path="/upload/Resume-Test/QuestionGeneration" element={<QuestionGeneration />} />
        <Route path="/upload" element={<WrappedUploadScreen />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
