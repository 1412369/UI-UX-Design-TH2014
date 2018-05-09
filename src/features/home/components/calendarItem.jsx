import React, { Component } from 'react';
import styled from 'styled-components'
import {AvLibraryBooks} from 'material-ui/svg-icons'
import Avatar from 'material-ui/Avatar'
const ItemStyled = styled.li`
    display:grid;
    grid-template-columns: 50px auto;
    font-family:Roboto;
    .image {
        grid-column:1;
        padding:5px;
    }
    .content {
        grid-column:2;
        margin-top:20px;
        font-size:15px;
        color:white;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 300px;
    }
`
class Item extends Component {
    render() {
        return (
            <ItemStyled>
                <div className="image">
                    <Avatar icon={<AvLibraryBooks  style={{color:"#1f4788"}}/>} />
                </div>
                <div className="content">
                        {this.props.children}
                </div>
            </ItemStyled>
            
        );
    }
}

export default Item;