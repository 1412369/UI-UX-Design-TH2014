import React, { Component } from 'react';
import { ContainerStyled } from './layout'
import Anounment from './anounment'
import Deadline from './deadline'
import Docs from './docs'
import Score from './score'
import Slide from './slides'
class DetailCourse extends Component {
    render() {
        return (
            <ContainerStyled>
                <div style={{ 
                    marginTop: "20px",
                    textAlign:"center",
                    fontFamily:"Roboto",
                    color:"#1F4788",
                    fontSize:"30px"
                }}>
                    Thiết kế giao diện TH-2014
                </div>
                <Anounment />
                <Slide />
                <Docs />
                <Score />
                <Deadline />
            </ContainerStyled>
        );
    }
}

export default DetailCourse;