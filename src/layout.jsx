import styled from 'styled-components'
import React from 'react'
import { getMuiTheme } from 'material-ui/styles';

export const GridContainer = styled.div`
    display:grid;
    grid-row:auto auto;
`
export const GridHeader = styled.div`
    height:70px;
    grid-row:1;
`
export const GridContent = styled.div`
    grid-row:2;
`


export const fitTheme = getMuiTheme({
    palette: {
        primary1Color: '#e74c3c',
        secondary: "#844D9E",
        primary2Color: "#844D9E",
    },
})
