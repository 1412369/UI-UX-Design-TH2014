import styled from 'styled-components'
export const GridContainer = styled.div`
    margin:0;
    height:650px;
    display:grid;
    background:url('/public/images/math.jpg') no-repeat center;
    background-size:cover;
    grid-template-columns:60% 40%;
`
export const GridInfo = styled.div`
    margin:0 100px;
    line-height:30px;
    grid-column:1;
`
export const GridForm = styled.div`
    grid-column:2;
    text-align:center;
`
export const GridFooter = styled.div`
    height:100px;
    grid-row:3;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color:#ecf0f1;
`
