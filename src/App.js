import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Zoom, Fade} from 'react-reveal';

// Component Imports:
import Block from './components/Block'
import Carousel from './components/carousel'
import SkillBar from './components/skillBar'
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import Break from './components/break';
import Download from './images/resume.jpg'
import Jobs from './components/jobs';

function App() {
  return (
    <div style={{Color:'white', flex:1, backgroundColor:'#192734', height:'100%'}}> 
      <Block header="I am Sam Mahan" tagline="Pursuing excellence in technology and leadership." profPicture={true}/>
      <div style={{height:15}}/>
      <Block header="A little about myself..." 
      tagline="I am a Senior Computer Science major at Texas A&M University. I grew up in Houston Texas, and will always appreciate a great cup of coffee!"/> 
      <div style={{height:15}}/>

      <Block  header="My Interests..." 
      tagline=" As I've explored different projects, teams, and development cycles I've been able to be exposed to a pretty diverse range of project types. 
      What feels like myu next step is getting to explore Full Stack Development. Over the last 3 years I've been exposed to Front End work, Back End work, Machine Learning, and Game Devleopment.
      What I'd like to do most is be able to build out my skills in the front and back end to be a Full Stack Software Engineer. "
      /> {/* This can be finished later. I don't super care what it says rn.*/}
      
      <div style={{height:15}}/>
      <Carousel cards={[
        {'projName':'By The Cover', 'projDet': 'Recommender System based off of cover art from TMDB database and Movie Album from Spotify data.', 'projLink':'https://github.com/samuelj1323/By_The_Cover'},
        {'projName':'Project Pabu', 'projDet': 'Stock market portoflio evaluation from sentiment analysis from twitter data.', 'projLink':'https://github.com/samuelj1323/projectPabu'},
        {'projName':'Genome Evolution', 'projDet': 'Game to show a cells behavior over the course of its life.', 'projLink':'https://github.com/zachadel/GenomeEvolution'},
        {'projName':'Prayer Library', 'projDet': 'Library to hold prayers and Bible search tool to find verses', 'projLink':'https://github.com/samuelj1323/PLib'},
        {'projName':'Quick Silver', 'projDet': 'Automation of the onboarding new clients process at Apex Clearing.'},
        {'projName':'Queue Scheduler', 'projDet': 'Daily Schedule creation with the Queue Data strcuture.', 'projLink':'https://github.com/samuelj1323/QueueSchedule'},
        {'projName':'Business Database', 'projDet':'Database frontend in java for the business school', 'projLink': 'https://github.com/samuelj1323/business_database'},
        {'projName':'Andon App', 'projDet': 'Cross platform mobile application to assist in the submission of quotes for Andon Specialties', 'projLink':'https://github.com/samuelj1323/IndustrialApp'}
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
              <SkillBar skill="Python" color="#5CFFAD" level={250} />
            </Col>
            <Col>
              <SkillBar skill="C++" color="magenta" level={200}/>
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
              <SkillBar skill="Recommender Systems" color="Purple" level={200} />
            </Col>
            <Col>
              <SkillBar skill="Algorithms and Datastructures" color="blue" level={250} />
            </Col>
            <Col>
              <SkillBar skill="Game Development" color="teal" level={200}/>
            </Col>
          </Row>
          <div style={{height:15}}/>
          <Row>
            <Col>
              
              <SkillBar skill="Leadership" color="green" level={200} />
            </Col>
            <Col>
              <SkillBar skill="Mobile App Devleopment" color="yellow" level={250} />
            </Col>
            <Col>
              <SkillBar skill="Full Stack Development" color="red" level={200}/>
            </Col>
          </Row>
          <br/>
          <Break/>
          <div style={{height:15}}/>
        </Zoom>

          <Fade>
          <h1 style={{color:'white'}}>Experience</h1> {/** Here I will show all the companies I've worked for and talk to what I've done for them. */}
          <Jobs header="APEX Clearing" 
          jobs="Application Support Intern - (June 2021 - August 2021)" 
          item1="Spearheaded automation process that would increase team productivity by 13% a year." 
          item2="Collaborated in Daily StandUp meetings between the stakeholders and intern team."
          item3="Presented the solution to the technical wing of the company."
          />
          <Jobs header=" Agrilife Research" 
          jobs="Senior Programmer - (August 2020 - Current)"
          item1="Managed Github project issues and workflow."
          item2="Trained incoming programmers for the codebase."
          item3="Developed Major Gameplay Features."
          />
          <Jobs header="Andon Specialties" 
          jobs="Mobile Application Intern - (June 2020 - June 2021)" 
          item1="Developed a cross-platform mobile application to support the company culture of value added technology."
          item2="Communicated between management and developer needs for the project."
          item3="Guided the administrative team through multiple technical/UI presentations."/>
          

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
