import React from 'react';
import {Component} from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import profile from '../images/profile.jpeg';
// Components
import Break from './break';


// These are kinda like Twitter Tweets, I'm going to have information that you can pass in per 
// Block.

class Block extends Component{
    render(){
        const profPicture = this.props.profPicture;
        if (profPicture) {
            return(
                <div>
                    <Container>
                        <Row className = "justify-content-sm-center">
                                <Col xs ={12}  md={2}>
                                    <Image fluid style={{width:150, height:150, justifySelf:'center'}}  src={profile} roundedCircle />
                                </Col>
                        </Row>
                        <Row>
                            <h1 style={{color:'white', textAlign:'center'}}> {this.props.header}</h1>
                            <h5 style={{color:'white', left:10, textAlign:'center'}} > {this.props.tagline}</h5>
                            <h6 style={{color:'grey', textAlign:'center'}}>Phone: (281) 961-1887</h6>
                            <h6 style={{color: 'grey', textAlign:'center'}}>   Email:   samuelj1323@gmail.com </h6>
                        </Row>
                        <Break/>
                    </Container>

                </div>
                
            );
        }
        else{
            return(
                <Container>
                    <Row xs={2} sm={2}>
    
                        <Col xs={12} md ={4} lg={9}>
                            <h1 style={{color:'white'}}> {this.props.header}</h1>
                            <div style={{height:10}}/>
                            <h5 style={{color:'white', paddingLeft:40}} > {this.props.tagline}</h5>
                        </Col>
              
              
                    </Row>
                    <Break/>
                </Container>
            );
            
        }
        
    }
}
export default Block