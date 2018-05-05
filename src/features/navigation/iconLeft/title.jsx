import React from 'react';
import Styled from 'styled-components'
const TitleStyled = Styled.div`
    margin:0;
    padding:0;
    color:black;
    line-height:20px;
    margin-top:10px;
    text-align:center;
    max-width:380px;
    .major {
        font-size:17px;
    }
    .school {
        margin-top:5px;
        display:block;
        font-size:20px;
        font-weight: bold;
    }
`
const Title = () => {
    return (
        <TitleStyled>
            <span className="major">Trang môn học khoa công nghệ thông tin</span>
            <span className="school"> Trường đại học khoa học tự nhiên</span>
        </TitleStyled>
    );
};

export default Title;