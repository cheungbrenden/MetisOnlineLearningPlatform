import { Link } from "react-router-dom";
import "./assignmentOverview.css";
import NavWindow from "./Navbars";
import {useNavigate} from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import { getSloScore, getUserAssignmentCompletion } from './Database';

function SloBox(props) {
  const navigate = useNavigate();
  if(!props.completedQuiz){
    return(<button id="sloButton" onClick={() => {if (props.navigate) props.navigate("/sloQuiz")}} disabled={props.navigate === undefined}> Take the SLO Quiz!</button>);
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
  const [p1Complete, setP1Complete] = useState(false);
  const [p2Complete, setP2Complete] = useState(false);
  const [totalComplete, setTotalComplete] = useState(0);
  const navigate = useNavigate();
  console.log(cookies.user_uuid)
  
    useEffect(() => {
      if (cookies.user_uuid === undefined)
        navigate("/");
      else {
        getSloScore(cookies.user_uuid).then((score) => setScore(score));
        getUserAssignmentCompletion(cookies.user_uuid, 1).then((result) => {
            setP1Complete(result.problem1);
            setP2Complete(result.problem2);
        });
      }
    }, [cookies.user_uuid]);

    useEffect(() => {
      if (p1Complete && p2Complete)
        setTotalComplete(2)
      else if (p1Complete || p2Complete)
        setTotalComplete(1)
      else
        setTotalComplete(0);
    }, [p1Complete, p2Complete])

   

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

        <p>{totalComplete}/2 Problems</p>
        <p>{totalComplete * 2}/4 Points</p>
      </div>

      
    </div>
    
    <div id="tableWrap">
      <table id="problemTable">
        <thead>
          <th>#</th>
          <th>Title</th>
          <th>Points</th>
          <th>Status</th>
        </thead>
        <tr>
          <td> 1 </td>
          <td>{p1Complete ? 'Problem 1' : <Link to="/assignment/question/1">Problem 1</Link>}</td>
          <td>2</td>
          <td>{p1Complete ? 'Complete' : 'Incomplete'}</td>
        </tr>
        <tr>
          <td> 2 </td>
          <td>{p2Complete ? 'Problem 2' :<Link to="/assignment/question/2">Problem 2</Link>}</td>
          <td>2</td>
          <td>{p2Complete ? 'Complete' : 'Incomplete'}</td>
        </tr>
      </table>
    </div>
  </NavWindow>
  );
}

export default AssignmentOverview;