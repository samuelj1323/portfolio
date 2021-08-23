import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Zoom, Fade} from 'react-reveal';

// Component Imports:
import Block from './components/Block'
import Carousel from './components/carousel'
import SkillBar from './components/skillBar'
import { Col, Container, Row } from 'react-bootstrap';
import Break from './components/break';

function App() {
  return (
    <div style={{Color:'white', flex:1, backgroundColor:'#192734', height:'100%'}}> 
      <Block header="I am Sam Mahan" tagline="Pursuing excellence in technology and leadership." profPicture={true}/>
      <div style={{height:15}}/>
      <Block header="A little about myself..." tagline="I am an Aggie from Houston, Texas. I enjoy jazz, reading, sailing, and blah blah blah. I find 
        myself... 
        I have special interests in...
        and have completed ..."/> 
      <div style={{height:15}}/>
      <Block header="My Interests..." tagline=" - asjldf \n -dsjflas \n -sdflka"/> {/* This can be finished later. I don't super care what it says rn.*/}
      <div style={{height:15}}/>
      <Carousel cards={[
        {'projName':'By The Cover', 'projDet': 'Recommender System based off of cover art from TMDB database and Movie Album from Spotify data.', 'projLink':'https://github.com/samuelj1323/By_The_Cover'},
        {'projName':'Project Pabu', 'projDet': 'Stock market portoflio evaluation from sentiment analysis from twitter data.', 'projLink':'abcd'},
        {'projName':'Chaos in the Genome', 'projDet': 'Awesome project to show my skills', 'projLink':'abcd'},
        {'projName':'Hello, World', 'projDet': 'Awesome project to show my skills', 'projLink':'abcd'},
        {'projName':'Hello, World', 'projDet': 'Awesome project to show my skills', 'projLink':'abcd'},
        {'projName':'Hello, World', 'projDet': 'Awesome project to show my skills', 'projLink':'abcd'},
        {'projName':'Hello, World', 'projDet': 'Awesome project to show my skills', 'projLink':'abcd'},
        {'projName':'Hello, World', 'projDet': 'Awesome project to show my skills', 'projLink':'abcd'}
        ]}
        />
        
        <Container>
        <Zoom>
          <h1 style={{color:'white'}}> Skills</h1>
          <Row>
            <Col>
              <SkillBar skill="JavaScript" color="yellow" level={200} />
            </Col>
            <Col>
              <SkillBar skill="Python" color="blue" level={250} />
            </Col>
            <Col>
              <SkillBar skill="C++" color="blue" level={200}/>
            </Col>
          </Row>
          <div style={{height:15}}/>
          <Row>
            <Col>
              <SkillBar skill="SQL" color="green" level={100} />
            </Col>
            <Col>
              <SkillBar skill="React" color="blue" level={250} />
            </Col>
            <Col>
              <SkillBar skill="React-native" color="blue" level={200}/>
            </Col>
          </Row>
          <div style={{height:15}}/>

          <Row>
            <Col>
            <div style={{height:50}} />
              <SkillBar skill="Recommender Systems" color="Purple" level={200} />
            </Col>
            <Col>
            <div style={{height:15}} />
              <SkillBar skill="Algorithms and Datastructures" color="blue" level={250} />
            </Col>
            <Col>
            <div style={{height:50}} />
              <SkillBar skill="Game Development" color="blue" level={200}/>
            </Col>
          </Row>
          <div style={{height:15}}/>
          <Row>
            <Col>
              
              <SkillBar skill="Leadership" color="green" level={200} />
            </Col>
            <Col>
              <SkillBar skill="Mobile App Devleopment" color="blue" level={250} />
            </Col>
            <Col>
              <SkillBar skill="Full Stack Development" color="blue" level={200}/>
            </Col>
          </Row>
          <div style={{height:15}}/>
          <Break/>
          <div style={{height:15}}/>
          </Zoom>

          <Fade>
          <h1 style={{color:'white'}}>Experience</h1> {/** Here I will show all the companies I've worked for and talk to what I've done for them. */}
          <Block profPicture={false} header="comp. 1" tagline="I did all this."/>
          <Block profPicture={false} header="comp.2" />
          <Block profPicture={false} header="comp 3"/>

          </Fade>
          {/** I want to leave a downloadable resume here */}
          {/** I want a text box that has a header that states 
           * Send me an email.
           * Tag line that says
           * All liked projects will be shown to me to let me know what interests you most.
           * 
           * Then I want a button to send me an email.
           * 
           * 
           * On Email sent I want a toast that appears stating that an email was sent.
           */}

          
        </Container>

        
        
        
      
      
      
      
      

    </div>
  );
}

export default App;
