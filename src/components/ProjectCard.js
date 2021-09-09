import React from 'react';
import {Component} from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import Heart from '../images/like.png';
import details from '../images/details.png';
// Components
class ProjectCard extends Component{
    state = {
        showMessage: false,
        count:0,
        liked_message: false
    }

    liked = () =>{ //** I want to set up some logic here, if they liked it. Add one. Else, don't */
        var newCount = this.state.count;
        var new_liked = ! this.state.liked_message
        console.log(new_liked)
        this.setState({liked_message: new_liked})
        if (new_liked){ // if someone is hitting the like button and like's it
            newCount += 1;
        }else{ // if they disliked it.
            newCount -= 1
        }
        this.setState({count: newCount});
        // Send this off to a database so we can start accumulating likes

    };

    showDetails =() =>{

        this.setState({showMessage: !this.state.showMessage});
    };

    render(){
        return(
            <div>
                <Row>
                    <Col>
                        <div
                            style={{minWidth: 280, minHeight: 360, maxHeight:360, maxWidth:300, backgroundColor: '#0084B4', borderRadius:15, margin:10}}
                        >
                            <br/>
                            <h2 style={{color:'white',justifySelf:'center' ,textAlign:'center'}}>{this.props.projName}</h2>
                            
                            <div style={{height:200, minHeight:170, justifyContent:'center', textAlign:'center'}}>
                                <a style={{color:'white', textAlign:'center'}} target="_blank" href={this.props.projLink} > Github  </a>

                            </div>

                            <div style={{bottom:0}}>
                                
                                    <Row style={{paddingLeft:75}}>
                                        <Button style={{width:65, height:65, justifyItems:'center'}} variant="outline-light" onClick={this.showDetails} >
                                            <Image width={40} src ={details}>

                                            </Image>
                                        </Button>
                                    
                                        <Button style={{width:120}} variant="danger-light" onClick={this.liked}>
                                            <Image src ={Heart} width={40} />
                                            <div>
                                                {this.state.count} 
                                            </div>
                                        </Button>   
                                    </Row>
                                
                            </div>
                            
                        </div> 
                    
                    </Col>
                    <Col>
                        
                        {this.state.showMessage  &&
                        <h5 style={{color:'white'}}> {this.props.projDet} </h5>
                        }
                    
                    {/** I want to add a feature here where text pops up on clicking to show the information for the project. */}
                    
                    
                    </Col>
                    

                </Row>
                
            </div>
            

        );
    }
}
export default ProjectCard

        