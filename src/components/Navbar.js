
import React, { Component } from 'react';
import $ from 'jquery';
import Navitem from './Navitem';
import { slide as Menu } from 'react-burger-menu';

// import {Animated} from "react-animated-css";
// import $ from 'jquery';

//Uses react burger menu from https://github.com/negomi/react-burger-menu

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':'',
            'menuOpen': false,
        }
    }

        
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
      }
    closeMenu () {
        this.setState({menuOpen: false})
      }
    

    componentDidMount () {
        // var nav = document.querySelector("#root > div > nav");
        
        // // nav.style.display = "none";

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

                <nav>
                
                <ul>
                    
                <Navitem item="Home" tolink="/portfolio"  activec={this.activeitem}></Navitem>
                <Navitem item="About" tolink="/about"  activec={this.activeitem}></Navitem>
                <Navitem item="Education" tolink="/education"  activec={this.activeitem}></Navitem>
                <Navitem item="Skills" tolink="/skills"  activec={this.activeitem}></Navitem>
                <Navitem item="Projects" tolink="/projects"  activec={this.activeitem}></Navitem>
                <Navitem item="Contact" tolink="/contact"  activec={this.activeitem}></Navitem>
                </ul>

                </nav>

            )
        }
    }
    
    export default Navbar