import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import Card from 'react-bootstrap/Card';


class About extends Component {

render() {
return (

        <div className="condivFull">

            <Animated animationIn="fadeInDown" animationOut="fadeOut" animationInDuration={1400} animationOutDuration={1400} isVisible={true}>
             <h1 className="subtopic">About Me</h1>
            </Animated>
        

            <Card className="aboutMeSection">
                <Card.Img variant="top" className ="aboutMeImg" src="https://th.bing.com/th/id/R6f61e827c71294d1c0a3dd5cfc24b449?rik=A6DiHS3iPGUp1w&pid=ImgRaw" />
                <Card.Body>
                <Card.Text>
                I was born in San Antonio, TX in 1992.  I currently live in Austin, TX and have been here since attending the University of Texas.  My passions and interests include biking, supporting local businesses, politics, mass transit, environmental issues, going on daytrips around Texas, and technology. 
                </Card.Text>
                </Card.Body>
            </Card>
           
  
{/*         <div className="photos">
            </div> */}
           
        </div>
    
        )
    }
}
export default About