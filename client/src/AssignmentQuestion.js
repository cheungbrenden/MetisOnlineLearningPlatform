import NavWindow from "./Navbars";
import './AssignmentQuestion.css'
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import textbook_example from "./images/textbook example.png"
import textbook_icon from "./images/textbook icon.png";
import chat_icon from "./images/question_chat_icon.png";
import { updateUserAssignmentCompletion } from "./Database";
import { useCookies } from "react-cookie";

function ResultBox(props) {
    const navigate = useNavigate();

    if (props.correct) {
        return (
            <div id="correctResultBox" className="resultBox">
                <span>
                    <div style={{display: "inline-block"}}>
                        Great job! <br/>
                        <b className="font-oblique">y</b> = 3,
                        <b className="font-oblique"> u</b> = 4 <br/>
                        Move on to <b>Problem 2</b> (SLO 3.1)
                    </div>
                    <div style={{display: "inline-block"}}>
                        <button style={{display: "block"}} onClick={() => navigate('/assignment/overview')}>
                            Back to Assignment
                        </button>
                        <button onClick={() => {
                            props.setFirst("");
                            props.setSecond("");
                            props.setShowResult(false);
                            props.setShowHint(false);
                            navigate('/assignment/question/2');
                        }}>
                            Next Problem
                        </button>
                    </div>
                </span>
            </div>
        );
    }
    else {
        return (
            <div id="incorrectResultBox" className="resultBox">
                Incorrect answer. Please try again. <br/> <br/>
                Try solving for <b className="font-oblique">u</b> first. 
                Then solve for <b className="font-oblique">y</b>.
            </div>
        );
    }
}

function AssignmentQuestion() {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [showHint, setShowHint] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const navigate = useNavigate();
    const {num} = useParams();
    const [cookies] = useCookies(['user_uuid']);

    return (
        <NavWindow>
            <div id="assignmentQuestion">
                <div className="infoBox">
                    <div className="infoBox-title">Assignment: Section 3.2</div>
                    <div>
                        <span className="font-bold">Class:</span> Algebra 1
                    </div>
                    <div><span className="font-bold">Status</span>: In Progress</div>
                </div>
                <div className="infoBox problemNumber" style={{
                    gridColumnStart: "2",
                    gridColumnEnd: "-1",
                    gridRow: "1"
                }}>
                    <span className="font-bold">Problem {num} (SLO 3.1)</span>
                    <span style={{
                        position: "absolute",
                        right: "15px"
                    }}>2 points</span>
                </div>
                <div id="questionInfo" className="infoBox" style={{
                    gridColumnStart: "1",
                    gridColumnEnd: "3",
                }}>
                    <div style={{
                        gridColumn: 1,
                        gridRowStart: 1,
                        gridRowEnd: -1
                    }}> 
                        <div>Solve this system of equations:</div>
                        <br/>
                        <div>
                            <div>3u + y = 15</div>
                            <div>u + 2y = 10</div>
                        </div>
                    </div>
                    <div>
                        <div id="helpButtons">
                            <button id="hintButton" className="font-darkBlue font-bold helpButton" onClick={() => setShowHint(true)}>
                                Need a hint?
                            </button>
                            <img src={chat_icon} className="helpButton" onClick={() => navigate("/chat")} />
                            <img src={textbook_icon} className="helpButton" onClick={() => setShowText(!showText)} />
                        </div>
                        { showHint && (
                            <div className="hintBox">
                                <button id="exitButton" onClick={() => setShowHint(false)}>X</button>
                                Hint 1 of 1 <br/> <br/>
                                Use one equation to solve for <b className="font-oblique">u</b>.
                                Then substitute in the other equation to solve for <b className="font-oblique">y</b>.
                            </div>
                        )}
                        { showText &&
                            <div id="textbookBox">
                                <img id="textbook" src={textbook_example} />
                                <button id="exitButton" onClick={() => setShowText(false)}>X</button>
                            </div>
                        }
                    </div>
                    { !showText && <div style={{
                        position:"absolute",
                        right: "30px",
                        bottom: "30px"
                    }}>
                        Input Answer:
                        <div className="answer">
                            u= <input className="answerBox" 
                                type="text"
                                name="u" 
                                value={first} 
                                autoComplete={false}
                                onChange={(event) => {
                                    setFirst(event.target.value);
                                    setShowResult(false);
                                }} />
                        </div>
                        <div className="answer" style={{display: "inline"}}>
                            y= <input className="answerBox" 
                                type="text"
                                name="y"
                                value={second}
                                autoComplete={false}
                                onChange={(event) => {
                                    setSecond(event.target.value);
                                    setShowResult(false);
                                }} />
                        </div>
                        <button id="submitButton" onClick={function() {
                            if (first=="4" && second=="3")
                                updateUserAssignmentCompletion(cookies.user_uuid, 1, num);
                            setShowResult(true);
                        }}>
                            Submit
                        </button>
                    </div>
                    }
                    { showResult && <ResultBox correct={first=="4" && second=="3"} 
                        setFirst={setFirst} 
                        setSecond={setSecond} 
                        setShowHint={setShowHint} 
                        setShowResult={setShowResult}/> }
                </div>
            </div>
        </NavWindow>
    );
}

export default AssignmentQuestion;