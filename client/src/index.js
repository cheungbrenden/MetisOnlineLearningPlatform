import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { CookiesProvider } from 'react-cookie';

import Login from './Login';
import Homepage from './Homepage';
import AssignmentOverview from './assignmentOverview';
import NavWindow from './Navbars';
import SLOQuiz from './sloQuiz';

import chat_screenshot from './images/chat_screenshot.png';
import class_screenshot from './images/class_screenshot.png';
import favicon_img from './images/grad cap logo.svg';
import Favicon from 'react-favicon';
import AssignmentQuestion from './AssignmentQuestion';

function ImagePage(props) {
    return (
        <NavWindow pageName={props.pageName}>
            <img src = {props.image} className="imagePage" style={{
                // height: "100%",
                width: "100%"
            }}/>
        </NavWindow>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <Favicon url={favicon_img} iconSize="64"/>
    <CookiesProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/assignment/overview" element={<AssignmentOverview />} />
                <Route path="/assignment/question/:num" element={<AssignmentQuestion />} />
                <Route path="/classes" element={<ImagePage image={class_screenshot} pageName="Classroom Dashboard"/>} />
                <Route path="/grades" element={<NavWindow pageName="Grades"/>} />
                <Route path="/chat" element={<ImagePage image={chat_screenshot} pageName="Chatroom"/>} />
                <Route path="/progress" element={<NavWindow pageName="Progress"/>} />
                <Route path="/goals" element={<NavWindow pageName="Goals"/>} />
                <Route path="/sloQuiz" element={<SLOQuiz />} />
            </Routes>
        </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
