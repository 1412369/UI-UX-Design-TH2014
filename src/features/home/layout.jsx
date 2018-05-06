import styled from 'styled-components'

export const HomeGrid = styled.div`
    display:grid;
    grid-template-columns: 20% 70%;
    min-height:650px;
    background-color:#e9ebee;
`
export const FixedBar = styled.div`
    margin-top:20px;
    grid-column:1;
    position:fixed;
`
export const HomeContent = styled.div`
    grid-column:2;
    margin-top:20px;
`
export const ContentLayout = styled.div`
    display:grid;
    h4 {
        color:grey;
        font-family:Roboto;
    }
    grid-template-columns: 50% 50%;
`
export const EventGrid = styled.div`
    grid-column:1;
    padding:10px;
`
export const CourseGrid = styled.div`
    grid-column:2;
    padding:10px;
`
