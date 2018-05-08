import React, { Component } from 'react';
import {ContainerStyled} from './layout'
import Anounment from './anounment'
import Deadline from './deadline'
import Docs from './docs'
import Score from './score'
import Slide from './slides'
class DetailCourse extends Component {
    render() {
        return (
            <ContainerStyled>
               <Anounment />
               <Slide/>
               <Docs />
               <Score />
               <Deadline />
            </ContainerStyled>
        );
    }
}

export default DetailCourse;