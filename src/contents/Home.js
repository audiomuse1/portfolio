import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/muggg.jpg';
import Social from '../components/Social'
class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['My name is Andrew Hartford']} speed={100} eraseDelay={700}/>
            <Social />
            </div>
        )
        }
    }
export default Home