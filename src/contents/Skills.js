import React, { Component } from 'react'
import {Animated} from "react-animated-css";

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['HTML','CSS','JS','REACT JS', 'NODE JS', 'EXPRESS', 'Typescript', 'Boostrap', 'Animate.css', 'BigCommerce', 'Spanish language']
        };
    }

    render() {
        return (
            <div className="condiv skills">

            <Animated animationIn="fadeInDown" animationOut="fadeOut" animationInDuration={1400} animationOutDuration={1400} isVisible={true}>  
            <h1 className="subtopic">My Skills</h1>
            </Animated>


            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills