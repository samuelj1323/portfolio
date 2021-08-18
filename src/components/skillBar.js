import React,{Component} from 'react'
import {Row} from 'react-bootstrap'

class SkillBar extends Component{
    render(){
        var level = this.props.level;
        var color = this.props.color;
        return(

            <Row>
              <h3 style={{color:'white'}}> {this.props.skill}</h3>

              <div style={{width:300, height:20, paddingLeft:0, backgroundColor:'lightgray', borderRadius:15}}>
                <div style={{backgroundColor:color, width:level, height:20, borderRadius:15}}>
                </div>  
              </div>

            </Row>

        );
    }
}

export default SkillBar;