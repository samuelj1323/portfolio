import React from 'react';
import {Component} from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import profile from '../images/profile.jpeg';
// Components
import Break from './break';
class ProjectCard extends Component{

    onClick =() =>{
        return(
            <h1>Hello World</h1>
        );
    }
    render(){
        return(
            <div>
                <div onClick={() => this.onClick}
                    style={{minWidth: 240, minHeight: 360, backgroundColor: '#0084B4', borderRadius:15, margin:10}}
                >
                    <h2 style={{color:'white', textAlign:'center'}}>{this.props.projName}</h2>
                    <h6 style={{color: 'white', textAlign: 'center'}}>{this.props.projDet}</h6>
                </div> {/** I want to add a feature here where text pops up on clicking to show the information for the project. */}

            </div>
            

        );
    }
}
export default ProjectCard

        