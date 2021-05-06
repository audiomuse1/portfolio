import React, { Component } from 'react';
import {Animated} from "react-animated-css";


class About extends Component {

render() {
return (

        <div className="condivFull">

<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div>
        hello world ;)
    </div>
</Animated>
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1400} animationOutDuration={1400} isVisible={true}>
             <h1 className="subtopic">About Me</h1>
            </Animated>
           
                <h4>Hello,</h4>
            <h1>I'm Andrew Hartford</h1>
            <h3>I live in Austin, TX</h3>
            <br></br>
            <p>
            </p>

            <div className="photos">
            </div>
            <div className="photos1">
            </div>
        </div>
    
        )
    }
}
export default About