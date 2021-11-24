import NavWindow from "./Navbars";
import './AssignmentQuestion.css'
import { useState } from "react";

function ResultBox(props) {
    if (props.correct) {
        return (
            <div id="correctResultBox" className="resultBox">
                Great job! <br/>
                <b className="font-oblique">y</b> = 3,
                <b className="font-oblique"> u</b> = 4 <br/>
                Move on to <b>Problem 2</b> (SLO 3.1)
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
    const [showResult, setShowResult] = useState(false);

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
                    <span className="font-bold">Problem 1 (SLO 3.1)</span>
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
                        <button id="hintButton" className="font-darkBlue font-bold" onClick={() => setShowHint(true)}>
                            Need a hint?
                        </button>
                        { showHint && (
                            <div className="hintBox">
                                <button id="exitHintButton" onClick={() => setShowHint(false)}>X</button>
                                Hint 1 of 1 <br/> <br/>
                                Use one equation to solve for <b className="font-oblique">u</b>.
                                Then substitute in the other equation to solve for <b className="font-oblique">y</b>.
                            </div>
                        )}
                    </div>
                    <div>
                        <form>
                            Input Answer:
                            <label className="answer">
                                u= <input className="answerBox" 
                                    type="text"
                                    name="u" 
                                    value={first} 
                                    autoComplete={false}
                                    onChange={(event) => {
                                        setFirst(event.target.value);
                                        setShowResult(false);
                                    }}
                                    />
                            </label>
                            <label className="answer">
                                y= <input className="answerBox" 
                                    type="text"
                                    name="y"
                                    value={second}
                                    autoComplete={false}
                                    onChange={(event) => {
                                        setSecond(event.target.value);
                                        setShowResult(false);
                                    }}/>
                            </label>
                        </form>
                        <button id="submitButton" type="submit" onClick={function() {
                            setShowResult(true);
                        }}>
                            Submit
                        </button>
                    </div>
                    { showResult && <ResultBox correct={first=="4" && second=="3"}/> }
                </div>
            </div>
        </NavWindow>
    );
}

export default AssignmentQuestion;