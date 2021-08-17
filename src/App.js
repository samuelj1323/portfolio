import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// Component Imports:
import Block from './components/Block'
import Carousel from './components/carousel'

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
        {'projName':'Hello, World', 'projDet': 'Awesome project to show my skills', 'projLink':'abcd'},
        {'projName':'Hello, World', 'projDet': 'Awesome project to show my skills', 'projLink':'abcd'},
        {'projName':'Hello, World', 'projDet': 'Awesome project to show my skills', 'projLink':'abcd'},
        {'projName':'Hello, World', 'projDet': 'Awesome project to show my skills', 'projLink':'abcd'},
        {'projName':'Hello, World', 'projDet': 'Awesome project to show my skills', 'projLink':'abcd'},
        {'projName':'Hello, World', 'projDet': 'Awesome project to show my skills', 'projLink':'abcd'},
        {'projName':'Hello, World', 'projDet': 'Awesome project to show my skills', 'projLink':'abcd'},
        {'projName':'Hello, World', 'projDet': 'Awesome project to show my skills', 'projLink':'abcd'}
        ]}
        />
      
      
      
      
      

    </div>
  );
}

export default App;
