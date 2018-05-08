import React, { Component } from 'react';
import styled from 'styled-components'
import Chip from 'material-ui/Chip';
const ItemStyled = styled.li`
    display:grid;
    grid-template-columns: 100px auto;
    .date {
        grid-column:1;
        padding:5px;
    }
    .content {
        grid-column:2;
        font-size:15px;
        span {
            font-weight:bold;
            color:#e74c3c; 
        }
        p{
            margin:0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 700px;
        }
    }
`
class Item extends Component {
    render() {
        return (
            <ItemStyled>
                <Chip className="date">
                    {new Date().toLocaleDateString()}
                </Chip>
                <div className="content">
                    <span className="title">{this.props.title}</span>
                    <p>
                        {this.props.children}
                    </p>
                </div>
            </ItemStyled>
        );
    }
}

export default Item;