import React, { Component } from 'react';
import {ContainerStyled} from '../../detailCourse/layout'
import EnrollList from './enrollList'
import CoursesList from './courseList'
class AllCourses extends Component {
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
                    Tất cả các khoá học của tôi
                </div>
                <CoursesList/>
                <CoursesList/>
                <CoursesList/>
                <CoursesList/>
                
            </ContainerStyled>
        );
    }
}

export default AllCourses;