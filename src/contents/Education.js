import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.S. Chemistry" where="University of Texas, Austin" from="September 2011" to="August 2015"/>
            <Widecard title="Certificate of Completion" where="Austin Coding Academy" from="2016" to="2017"/>
            </div>
            )
        }
    }
    
export default Education