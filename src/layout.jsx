import styled from 'styled-components'
import React from 'react'
import { getMuiTheme } from 'material-ui/styles';

export const GridContainer = styled.div`
    display:grid;
    grid-row:auto auto auto;
`
export const GridHeader = styled.div`
    height:70px;
    grid-row:1;
`
export const GridContent = styled.div`
    grid-row:2;
`
export const GridFooter = styled.div`
    height:150px;
    grid-row:3;
`

export const fitTheme = getMuiTheme({
    palette: {
        primary1Color: '#2c3e50',
        secondary: "#844D9E",
        primary2Color: "#844D9E",
    }
})
