import './sloQuiz.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import './FontsAndColors.css'
import NavWindow from "./Navbars";
import {setSLOscore} from "./Database"
import {useCookies} from 'react-cookie';
import {useNavigate} from "react-router-dom";


function RadioButton(props) {
    let radioButtonClass = "radioButton";
    if (props.selected === props.id) {
        radioButtonClass += " radioButton-selected"
    }
    return <button onClick={() => props.handleClick(props.id)} className={radioButtonClass}>{props.id}</button>
}

function ButtonGroup(props) {

    const [selected, setSelected] = useState(-1);


    function handleClick(id) {
        setSelected(id);
        props.onClick(id);
    }

    return (
        <div className="background-white buttonGroup">
            <RadioButton id={1} handleClick={handleClick} selected={selected}/>
            <RadioButton id={2} handleClick={handleClick} selected={selected}/>
            <RadioButton id={3} handleClick={handleClick} selected={selected}/>
            <RadioButton id={4} handleClick={handleClick} selected={selected}/>
            <RadioButton id={5} handleClick={handleClick} selected={selected}/>
            <RadioButton id={6} handleClick={handleClick} selected={selected}/>
            <RadioButton id={7} handleClick={handleClick} selected={selected}/>
            <RadioButton id={8} handleClick={handleClick} selected={selected}/>
            <RadioButton id={9} handleClick={handleClick} selected={selected}/>
            <RadioButton id={10} handleClick={handleClick} selected={selected}/>
        </div>)
}

function SLOQuiz() {
    let quizScores = [-1, -1, -1, -1];
    const [cookies] = useCookies(['user_uuid']);
    const navigate = useNavigate();
    return (
        <NavWindow>
            <div id="sloQuiz">
                <h2 className="background-gold font-darkBlue" id="mainHeading">SLO Quiz ~ How well do you understand the
                    following
                    concepts?</h2>
                <h3 className="background-lightBlue font-darkBlue questionText">SLO 3.1 ~ Solve systems of linear
                    equations using
                    graphing, substitution, and elimination methods.</h3>

                <ButtonGroup onClick={(id) => quizScores[0] = id}/>


                <h3 className="background-lightBlue font-darkBlue questionText">SLO 3.2 ~ Set up stated problems
                    algebraically and
                    solve the resulting equations.</h3>
                <ButtonGroup onClick={(id) => quizScores[1] = id}/>
                <h3 className="background-lightBlue font-darkBlue questionText">SLO 3.3 ~ Solve problems presented via
                    formulas or
                    procedures.</h3>
                <ButtonGroup onClick={(id) => quizScores[2] = id}/>
                <h3 className="background-lightBlue font-darkBlue questionText">SLO 3.4 ~ Demonstrate basic skills in
                    algebra up
                    through quadratic equations through tests and problem solving.</h3>
                <ButtonGroup onClick={(id) => quizScores[3] = id}/>

                <div id="Submit">
                    <button onClick={() => {
                        setSLOscore(cookies.user_uuid, (quizScores[0] + quizScores[1] + quizScores[2] + quizScores[3]) / 4)
                        navigate("/assignment/question/1")
                    }} id="SubmitAndBegin" className="SubmitButtons background-gold font-darkBlue">
                        Submit and Begin Assignment
                    </button>
                    <button onClick={() => {
                        setSLOscore(cookies.user_uuid, (quizScores[0] + quizScores[1] + quizScores[2] + quizScores[3]) / 4)
                        navigate("/assignment/overview")
                    }} id="SubmitAndSave" className="SubmitButtons background-gold font-darkBlue">
                        Submit and Save
                    </button>
                </div>

            </div>
        </NavWindow>

    )
}


export default SLOQuiz;
