import styled from 'styled-components'
export const GridContainer = styled.div`
    margin:0;
    background-color:#16a085;
    height:650px;
    display:grid;
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