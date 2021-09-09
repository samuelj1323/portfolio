import React, {Component} from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import Break from './break'

class Jobs extends Component{
    render(){
        return(
            <Container>
                    <Row xs={12} sm={2}>
    
                        <Col xs={12} md ={4} lg={9}>
                            <h2 style={{color:'white'}}> {this.props.header}</h2>
                            <div style={{height:5}}/>
                            <h4 style={{color:'white'}} > {this.props.jobs}</h4>
                            <div style={{height:20}}/>
                            <ul style={{color:'white',  fontSize:20}}>
                                <li style={{color:'white'}}>
                                    {this.props.item1}
                                </li>
                                <li>
                                    {this.props.item2}
                                </li>
                                <li>
                                    {this.props.item3}
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Break/>
                </Container>

        );
    }
}

export default Jobs;