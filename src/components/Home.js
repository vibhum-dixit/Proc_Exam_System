//import config from "../config";
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
//import logo from './../logo.png';
import logo2 from './../logo2.jpeg'
import './../App.css';
//import { Redirect } from "react-router-dom";
//import { AuthContext } from "./Auth";
import Button from '@material-ui/core/Button';


const MainPage = () => {

  const history = useHistory();

  function handleClick() {
  //var mywindow = window.open("/login", "NewWindow", "height=700,width=1720")
    history.push("/login");
  }
  
  function handleExamCode(){
    history.push('/admin')
  }

  function handleClickDetect() {
    history.push("/detections")
  }  

  // function handleClickDetect2() {
  //   history.push("/detections2")
  // }
  
  function handleClickAdmin() {
    history.push("/adminsignin")

  }
  

  function headpose() {
    history.push("/posenet")
  }

 

  return (
    <div>

      <header className="App-header">
        <img src={logo2} alt="logo" />

        <p>
          Welcome to Exam Proctoring Website
        </p>
        

        <Button id="homeButtons" style={{ fontSize: '15px' }} variant="contained" size="medium" onClick={handleClick}>Start Test</Button>
        <Button id="homeButtons" style={{ fontSize: '15px' }} variant="contained" size="medium" onClick={handleExamCode}>Create Exam Code</Button>
        {/* <Button id="homeButtons" variant="contained" onClick={handleClickAdmin}>Admin</Button> */}
         {/* <Button id="homeButtons" variant="contained" onClick={headpose}>Headpose</Button> */}
        {/* <Button id="homeButtons" style={{ fontSize: '15px' }} variant="contained" size="medium">Start Your Exam</Button>
        <Button id="homeButtons" variant="contained">Create Exam Code</Button> */}
      </header>
    </div>
  );
}

export default MainPage;