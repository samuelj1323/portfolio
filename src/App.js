import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

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
              <SkillBar skill="SQL" color="green" level={200} />
            </Col>
            <Col>
              <SkillBar skill="React" color="blue" level={250} />
            </Col>
            <Col>
              <SkillBar skill="React-native" color="blue" level={200}/>
            </Col>
          </Row>

          <Row>
            <Col>
              <SkillBar skill="Recommender Systems" color="Purple" level={200} />
            </Col>
            <Col>
              <SkillBar skill="Algorithms and Datastructures" color="blue" level={250} />
            </Col>
            <Col>
              <SkillBar skill="Game Development" color="blue" level={200}/>
            </Col>
          </Row>
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
          <Break/>

          <h1>Experience</h1>
        </Container>
        
      
      
      
      
      

    </div>
  );
}

export default App;
