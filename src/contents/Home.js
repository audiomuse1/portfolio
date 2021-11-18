import React, { Component } from 'react';
import profilepic from '../img/muggg.jpg';
import Social from '../components/Social';
import {Animated} from "react-animated-css";



class Home extends Component {

    componentDidMount () {
       console.log("i am so cool");
    }

    render() {
        return (
            <div className="condiv home">
            
            <Animated animationIn="fadeInDown" animationOut="fadeOut" animationInDuration={1400} animationOutDuration={1400} isVisible={true}>
             <h1 className="subtopic">My name Andrew Hartford</h1>
             <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            </Animated>
           
    
            {/* <ReactTypingEffect className="typingeffect" text={['My name Andrew Hartford']} speed={100} eraseDelay={700}/> */}
            <Social />
            </div>
            )
        }
    }
    
    export default Home