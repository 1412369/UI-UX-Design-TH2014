import styled from 'styled-components'

export const HomeGrid = styled.div`
    display:grid;
    grid-template-columns: 30% 70%;
    min-height:650px;
    background-color:#e9ebee;
`
export const FixedBar = styled.div`
    grid-column:1;
    position:fixed;

`
export const HomeContent = styled.div`
    grid-column:2;
    margin-top:20px;
    padding-top:5px;
`