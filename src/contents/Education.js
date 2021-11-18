import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import {Animated} from "react-animated-css";


class Education extends Component {
    render() {
        return (
            <div className="condiv">

        <Animated animationIn="fadeInDown" animationOut="fadeOut" animationInDuration={1400} animationOutDuration={1400} isVisible={true}>
            <h1 className="subtopic">My Education</h1>
        </Animated>

            <Widecard title="B.S. Chemistry" where="University of Texas, Austin" from="September 2011" to="August 2015"/>
            <Widecard title="Certificate of Completion" where="Austin Coding Academy" from="2016" to="2017"/>
            </div>
            )
        }
    }
    
export default Education