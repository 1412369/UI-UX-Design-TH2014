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
    grid-row:1;    
    margin-top:20px;
`
export const ContentLayout = styled.div`
    display:grid;
    grid-row:2;    
    h4 {
        color:grey;
        font-family:Roboto;
    }
    grid-template-columns: 50% 50%;
    grid-auto-rows:auto auto;
`
export const EventGrid = styled.div`
    grid-column:1;
    grid-row:1;
    padding:10px;
`
export const CourseGrid = styled.div`
    grid-column:2;
    grid-row:1;
    padding:10px;
`
export const EnrollGrid = styled.div`
    grid-column: 1/2 ;
    grid-row:2;
    padding:10px;
`

