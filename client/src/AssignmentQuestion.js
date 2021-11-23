import NavWindow from "./Navbars";
import './AssignmentQuestion.css'

function AssignmentQuestion() {
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
                <div className="infoBox" style={{
                    gridColumnStart: "1",
                    gridColumnEnd: "3",
                    padding: "20px",
                    fontSize: "36px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridTemplateRows: "1fr 1fr",
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
                    <button className="font-darkBlue font-bold" style={{
                        height: "50px",
                        width: "150px",
                        fontSize: "15px",
                        backgroundColor: "white",
                        borderRadius: "35px",
                        border: "1px solide #3823a8"
                    }}>
                        Need a hint?
                    </button>
                    <form>
                        Input Answer:
                        <div className="answer">u= <input className="answerBox" type="text"/></div>
                        <div className="answer">y= <input className="answerBox" type="text"/></div>
                        <input style={{
                            color: "#3823a8",
                            backgroundColor: "#f5c24c",
                            borderRadius: "35px",
                            width: "200px",
                            border: "1px solide #3823a8"
                        }} type="submit" />
                    </form>
                </div>
            </div>
        </NavWindow>
    );
}

export default AssignmentQuestion;