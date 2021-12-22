
import React, { Component } from 'react';
import Navitem from './Navitem';
import { slide as Menu } from 'react-burger-menu';

// import {Animated} from "react-animated-css";
// import $ from 'jquery';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }

    componentDidMount () {
        // var nav = document.querySelector("#root > div > nav");
        
        // nav.style.display = "none";

        // $("body").on("mousemove",function(event) {
        //     if (event.pageX < 50) {
        //         nav.style.display = "block";
        //     }
        //     if (event.pageX > 50) {
        //         nav.style.display = "none";
        //     }
        // });

     }


    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (

                // <nav>
                
                // <ul>
                // <Navitem item="Home" tolink="/portfolio"  activec={this.activeitem}></Navitem>
                // <Navitem item="About" tolink="/about"  activec={this.activeitem}></Navitem>
                // <Navitem item="Education" tolink="/education"  activec={this.activeitem}></Navitem>
                // <Navitem item="Skills" tolink="/skills"  activec={this.activeitem}></Navitem>
                // <Navitem item="Projects" tolink="/projects"  activec={this.activeitem}></Navitem>
                // <Navitem item="Contact" tolink="/contact"  activec={this.activeitem}></Navitem>
                // </ul>

                // </nav>

                <Menu>
                    <a id="home" className="menu-item" href="/portfolio">Home</a>
                    <a id="contact" className="menu-item" href="/projects">Projects</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/education">Education</a>
                    <a id="contact" className="menu-item" href="/skills">Skills</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </Menu>
                        
            )
        }
    }
    
    export default Navbar