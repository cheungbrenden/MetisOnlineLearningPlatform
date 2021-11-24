import "./assignmentOverview.css";
import NavWindow from "./Navbars";
import {useNavigate} from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import { getSloScore } from './Database';

function SloBox(props) {
  const navigate = useNavigate();
  if(!props.completedQuiz){
    return(<button onClick={() => {if (props.navigate) props.navigate("/sloQuiz")}} disabled={props.navigate === undefined}> Take the Slo Quiz!</button>);
  }
  else{
    return(<div className="purpleText">
              <p id ="large">{props.sloScore}/10</p>
                <p>Self Evaluation</p>                
          </div>);
    }
  }

function AssignmentOverview(props) {
  const [cookies] = useCookies(['user_uuid']);
  const [score,setScore]= useState();
  const navigate = useNavigate();
  console.log(cookies.user_uuid)
  
    useEffect(() => {
      if (cookies.user_uuid === undefined)
        navigate("/");
      else
        getSloScore(cookies.user_uuid).then((score) => setScore(score))
      }, [cookies.user_uuid]);

   

  return (
    <NavWindow>
    <div id="wrapper">
      <div id="AssignmentOverview" className="container">
        <h2>
          Assignment: <span className="purpleText"> Section 3.1 </span>
        </h2>
        <p>
          <b> Class </b> : Algebra 1
        </p>
        <p>
          <b> Status </b> : In Progress
        </p>
        <p>
          <b> Due </b> : December 2 @ 11pm
        </p>
      </div>

      <div id="Comprehension" className="container">
        <h2>Comprehension</h2>
          <SloBox completedQuiz={score!=="-1"} sloScore={score} navigate={navigate}/> 
      </div>

      <div id="Completion" className="container">
        <h2>Completion:</h2>

        <p>0/20 Problems</p>
        <p>0/40 Points</p>
      </div>

      
    </div>
    
    <div id="tableWrap">
      <table>
        <thead>
          <th>#</th>
          <th>Title</th>
          <th>Points</th>
          <th>Status</th>
        </thead>
        <tr>
          <td> 1 </td>
          <td>Problem 1</td>
          <td>2</td>
          <td>Incomplete</td>
        </tr>
        <tr>
          <td> 2 </td>
          <td>Problem 2</td>
          <td>2</td>
          <td>Incomplete</td>
        </tr>
      </table>
    </div>
  </NavWindow>
  );
}

export default AssignmentOverview;