
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

                <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                <div id="navMenu">
                    <ul>
                    <Navitem item="Home" tolink="/portfolio"  activec={this.activeitem}></Navitem>
                <Navitem item="About" tolink="/about"  activec={this.activeitem}></Navitem>
                <Navitem item="Education" tolink="/education"  activec={this.activeitem}></Navitem>
                <Navitem item="Skills" tolink="/skills"  activec={this.activeitem}></Navitem>
                <Navitem item="Projects" tolink="/projects"  activec={this.activeitem}></Navitem>
                <Navitem item="Contact" tolink="/contact"  activec={this.activeitem}></Navitem>
                    </ul>
                </div>
                </Menu>

                // <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                //         <div id="navMenu">
                //             <ul>
                //                 <a onClick={() => this.closeMenu()} item="Home" href="https://audiomuse1.github.io/portfolio"  className="menu-item"  activec={this.activeitem}>Home</a>
                //                 <br></br><a onClick={() => this.closeMenu()} item="About" href="https://audiomuse1.github.io/about"  className="menu-item"  activec={this.activeitem}>About</a>
                //                 <br></br><a onClick={() => this.closeMenu()} item="Education" href="https://audiomuse1.github.io/education"  className="menu-item"  activec={this.activeitem}>Education</a>
                //                 <br></br><a onClick={() => this.closeMenu()} item="Skills" href="https://audiomuse1.github.io/skills"  className="menu-item"  activec={this.activeitem}>Skills</a>
                //                 <br></br><a onClick={() => this.closeMenu()} item="Projects" href="https://audiomuse1.github.io/projects"  activec={this.activeitem}>Projects</a>
                //                 <br></br><a onClick={() => this.closeMenu()} item="Contact" href="https://audiomuse1.github.io/contact"  activec={this.activeitem}>Contact</a>
                //             </ul>
                //         </div>
                // </Menu>
                        
            )
        }
    }
    
    export default Navbar