import styled from 'styled-components'
import React from 'react'
import { getMuiTheme } from 'material-ui/styles';

export const GridContainer = styled.div`
    display:grid;
    grid-row:auto auto auto;
`
export const GridHeader = styled.div`
    height:50px;
    grid-row:1;
`
export const GridContent = styled.div`
    grid-row:2;
`
export const GridFooter = styled.div`
    height:100px;
    grid-row:3;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color:#ecf0f1
`

export const fitTheme = getMuiTheme({
    palette: {
        primary1Color: '#e74c3c',
        secondary: "#844D9E",
        primary2Color: "#844D9E",
    },
})
