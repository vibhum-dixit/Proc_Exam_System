import Button from '@material-ui/core/Button';
import thanks from "./thanks.png"
import { useHistory } from 'react-router-dom';
import { hslToRgb } from '@material-ui/core';

const Thankyou = () => {
    const history = useHistory();

    function handleClickExit() {
        var mywindow = window.open('/');
        window.close('','_parent','');
        
    }

    var checkn = sessionStorage.getItem("checkname")
    var checke = sessionStorage.getItem("checkemail")

    return (
        <div className="App-header">
            <center>
                {/* <h3>
                    Thankyou for giving the test 
                </h3> */}
                <img src={thanks} id="thankyou"  height="400px"/>
                {/* <h2>Cheat Score</h2> */}
                <br/>
                <br/>
                <h3>
                    Name : {checkn}
                    <br/>
                    <br/>
                    
                    Email : {checke}
                </h3>

            
                    {/* <br/> */}

                    {/* Face,Object Detection: {count_facedetect}  */}
                    {/* <br/> */}

                    {/* Fullscreen Cheat Detection: {count_fullscreen} */}
                    {/* <br/> */}

                    {/* Tab Change Detection: {count_tabchange} */}
                    {/* <br/> */}

                    {/* ALT Tab Key Pressed: {countalt} */}
                    {/* <br/> */}
                    <br/>
                    <br/>

                <Button variant="contained" onClick={handleClickExit}>Exit Secure Window</Button>
            </center>
        </div>
    )
}
export default Thankyou;