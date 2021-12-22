import React, { Component } from 'react';
import Social from '../components/Social';
import {Animated} from "react-animated-css";


class Contact extends Component {
    render() {
        return (
            <div className="condiv">

            <Animated animationIn="fadeInDown" animationOut="fadeOut" animationInDuration={1400} animationOutDuration={1400} isVisible={true}>
            <h1 className="subtopic">Contact Me</h1>
            </Animated>
            
            <h3>Email: andrewhartford2@gmail.com</h3>
            
            <h3>LinkedIn: <a class="link" href="linkedin.com/in/ajhartford">linkedin.com/in/ajhartford</a></h3>

            <h3>Github Personal: <a class="link" href="https://github.com/audiomuse1">github.com/audiomuse1</a></h3>
            <h3>Github Work: <a class="link" href="https://github.com/audiomuse1">github.com/andrewhartfordbac</a></h3>
         
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    