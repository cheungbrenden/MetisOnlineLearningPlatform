import './sloQuiz.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Form from "react-bootstrap/Form";
import './FontsAndColors.css'
import {Button} from "react-bootstrap";
import NavWindow from "./Navbars";


function sloQuiz() {
    return (
        <NavWindow>
            <div id="info">
                <Form>
                    <h2 className="background-gold font-darkBlue">SLO Quiz ~ How well do you understand the following
                        concepts?</h2>
                    <h3 className="background-lightBlue font-darkBlue">SLO 3.1 ~ Solve systems of linear equations using
                        graphing, substitution, and elimination methods.</h3>
                    <div className="buttonGroup">
                        <Button className="radioButton">1</Button>
                        <Button className="radioButton">2</Button>
                        <Button className="radioButton">3</Button>
                        <Button className="radioButton">4</Button>
                        <Button className="radioButton">5</Button>
                        <Button className="radioButton">6</Button>
                        <Button className="radioButton">7</Button>
                        <Button className="radioButton">8</Button>
                        <Button className="radioButton">9</Button>
                        <Button className="radioButton">10</Button>
                    </div>


                    <h3 className="background-lightBlue font-darkBlue">SLO 3.2 ~ Set up stated problems algebraically
                        and
                        solve the resulting equations.</h3>
                    <Button className="radioButton">1</Button>
                    <Button className="radioButton">2</Button>
                    <Button className="radioButton">3</Button>
                    <Button className="radioButton">4</Button>
                    <Button className="radioButton">5</Button>
                    <Button className="radioButton">6</Button>
                    <Button className="radioButton">7</Button>
                    <Button className="radioButton">8</Button>
                    <Button className="radioButton">9</Button>
                    <Button className="radioButton">10</Button>
                    <h3 className="background-lightBlue font-darkBlue">SLO 3.3 ~ Solve problems presented via formulas
                        or
                        procedures.</h3>
                    <Button className="radioButton">1</Button>
                    <Button className="radioButton">2</Button>
                    <Button className="radioButton">3</Button>
                    <Button className="radioButton">4</Button>
                    <Button className="radioButton">5</Button>
                    <Button className="radioButton">6</Button>
                    <Button className="radioButton">7</Button>
                    <Button className="radioButton">8</Button>
                    <Button className="radioButton">9</Button>
                    <Button className="radioButton">10</Button>
                    <h3 className="background-lightBlue font-darkBlue">SLO 3.4 ~ Demonstrate basic skills in algebra up
                        through quadratic equations through tests and problem solving.</h3>
                    <Button className="radioButton">1</Button>
                    <Button className="radioButton">2</Button>
                    <Button className="radioButton">3</Button>
                    <Button className="radioButton">4</Button>
                    <Button className="radioButton">5</Button>
                    <Button className="radioButton">6</Button>
                    <Button className="radioButton">7</Button>
                    <Button className="radioButton">8</Button>
                    <Button className="radioButton">9</Button>
                    <Button className="radioButton">10</Button>


                </Form>
            </div>
        </NavWindow>


    )


}

export default sloQuiz;
