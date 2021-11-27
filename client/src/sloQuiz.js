import './sloQuiz.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Form from "react-bootstrap/Form";
import './FontsAndColors.css'
import NavWindow from "./Navbars";



function sloQuiz() {

    let q1 = 1;
    let q2 = 0;
    let q3 = 0;
    let q4 = 0;

    function toggleBorder(status) {
        if (status == 0) {
            alert("test");
        }
    }

    return (
        <NavWindow>
            <Form>
                <div id="sloQuiz">


                    <div className="background-gold font-darkBlue" id="mainHeading">
                        <h2>SLO Quiz ~ How well do you understand the following
                            concepts?</h2>
                    </div>


                    <div className="background-lightBlue font-darkBlue">
                        <h3 className="questionText">SLO 3.1 ~ Solve systems of linear equations using graphing,
                            substitution, and elimination methods.</h3>
                    </div>
                    <div className="buttonGroup background-white">
                        <button onClick={toggleBorder(q1)} className="radioButton">1</button>
                        <button onClick={toggleBorder(q1)} className="radioButton">2</button>
                        <button onClick={toggleBorder(q1)} className="radioButton">3</button>
                        <button onClick={toggleBorder(q1)} className="radioButton">4</button>
                        <button onClick={toggleBorder(q1)} className="radioButton">5</button>
                        <button onClick={toggleBorder(q1)} className="radioButton">6</button>
                        <button onClick={toggleBorder(q1)} className="radioButton">7</button>
                        <button onClick={toggleBorder(q1)} className="radioButton">8</button>
                        <button onClick={toggleBorder(q1)} className="radioButton">9</button>
                        <button onClick={toggleBorder(q1)} className="radioButton">10</button>
                    </div>
                    <div className="background-lightBlue font-darkBlue">
                        <h3 className="questionText">SLO 3.2 ~ Set up stated problems algebraically
                            and
                            solve the resulting equations.</h3>
                    </div>

                    <div className="buttonGroup background-white">
                        <button className="radioButton">1</button>
                        <button className="radioButton">2</button>
                        <button className="radioButton">3</button>
                        <button className="radioButton">4</button>
                        <button className="radioButton">5</button>
                        <button className="radioButton">6</button>
                        <button className="radioButton">7</button>
                        <button className="radioButton">8</button>
                        <button className="radioButton">9</button>
                        <button className="radioButton">10</button>
                    </div>
                    <div className="background-lightBlue font-darkBlue">
                        <h3 className="questionText">SLO 3.3 ~ Solve problems presented via formulas
                            or
                            procedures.</h3>
                    </div>
                    <div className="buttonGroup background-white">
                        <button className="radioButton">1</button>
                        <button className="radioButton">2</button>
                        <button className="radioButton">3</button>
                        <button className="radioButton">4</button>
                        <button className="radioButton">5</button>
                        <button className="radioButton">6</button>
                        <button className="radioButton">7</button>
                        <button className="radioButton">8</button>
                        <button className="radioButton">9</button>
                        <button className="radioButton">10</button>
                    </div>

                    <div className="background-lightBlue font-darkBlue">
                        <h3 className="questionText">SLO 3.4 ~ Demonstrate basic skills in algebra up
                            through quadratic equations through tests and problem solving.</h3>
                    </div>

                    <div className="buttonGroup background-white">
                        <button className="radioButton">1</button>
                        <button className="radioButton">2</button>
                        <button className="radioButton">3</button>
                        <button className="radioButton">4</button>
                        <button className="radioButton">5</button>
                        <button className="radioButton">6</button>
                        <button className="radioButton">7</button>
                        <button className="radioButton">8</button>
                        <button className="radioButton">9</button>
                        <button className="radioButton">10</button>
                    </div>


                </div>
                <div id="Submit">
                    <button id="SubmitAndBegin" className="SubmitButtons background-gold font-darkBlue"
                            type="submit">
                        Submit and Begin Assignment
                    </button>
                    <button id="SubmitAndSave" className="SubmitButtons background-gold font-darkBlue"
                            type="submit">
                        Submit and Save
                    </button>
                </div>
            </Form>

        </NavWindow>


    )


}

export default sloQuiz;
