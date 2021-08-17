import React from 'react';
import {Component} from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Heart from 'react-animated-heart'
// Components
class ProjectCard extends Component{
    state = {
        showMessage: false,
        count:0
    }

    liked = () =>{
        var newCount = this.state.count;
        newCount += 1;
        this.setState({count: newCount});
        console.log("Hoop")
    };

    showDetails =() =>{

        this.setState({showMessage: !this.state.showMessage});
    };

    render(){
        return(
            <div>
                <div
                    style={{minWidth: 240, minHeight: 360, backgroundColor: '#0084B4', borderRadius:15, margin:10}}
                >
                    <h2 style={{color:'white', textAlign:'center'}}>{this.props.projName}</h2>
                    <h6 style={{color: 'white', textAlign: 'center'}}>{this.props.projDet}</h6>
                    <div style={{height:200}}></div>
                    <div>
                        <Col style={{marginLeft:12}}>
                            <Row>
                                <Button style={{width:240}} variant="secondary" onClick={this.showDetails} >Details:</Button>
                            </Row>
                            <Row>
                                <Button style={{width:240}} variant="danger" onClick={this.liked}> Likes: {this.state.count} </Button>
                            </Row>
                        </Col>
                        
                    
                    
                    </div>
                    
                </div> {/** I want to add a feature here where text pops up on clicking to show the information for the project. */}
                {this.state.showMessage && <h1 style={{color:'white'}}> {this.props.projLink} </h1>}
            </div>
            

        );
    }
}
export default ProjectCard

        