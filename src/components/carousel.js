import React from 'react';
import {Component} from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import profile from '../images/profile.jpeg';
// Components
import Break from './break';
import ProjectCard from './ProjectCard';
class Carousel extends Component{
    constructor(props){
        super(props);
        this.state={}
    };

    makeCards =(Cards) =>{
        return Cards.map((card => {
            return(
                <ProjectCard
                    projName={card["projName"]}
                    projDet={card["projDet"]}
                />
            )
        })
        )
    }
    render(){
        return(
            <div>
                
                <Container>
                <h1 style={{color:'white'}}>Portfolio</h1>
                <Row lg={1} xs ={1}>
                    <div style={{display:'flex', 
                        flexDirection:'row', 
                        scrollBehavior:'auto', 
                        overflowX:'scroll' }}
                    >
                        {this.makeCards(this.props.cards)}

                    </div>

                </Row>
                    
                <div style={{height:15}}/>
                <Break/>
                </Container>
            

            </div>
            
            

        );
    }
}
export default Carousel

        