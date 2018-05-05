import React, { Component } from 'react';
import styled from 'styled-components'
import { RaisedButton } from 'material-ui'
import { ActionHome } from 'material-ui/svg-icons'
const InforStyle = styled.div`
    color:white;
    font-family:Roboto;
    margin-top:100px;
    span {
        font-size:30px;
        font-weight:bold;
        line-height:50px;
    }
    p {
        font-style: italic;
        font-size:20px;        
    }

`
class Info extends Component {
    render() {
        return (
            <React.Fragment>
                <InforStyle>
                    <span> Khoa Công nghệ Thông tin (CNTT) </span>
                    <p>
                        Trường Đại học Khoa học Tự nhiên Tp.HCM được thành lập
                        theo quyết định số 3818/GD-ĐT ngày 13/12/1994 của Bộ Trưởng Bộ GD&ĐT,
                        dựa trên Bộ môn Tin học - Khoa Toán - Trường Đại học Tổng hợp Tp.HCM.
                        Trải qua hơn 20 năm hoạt động, Khoa đã phát triển vững chắc và được
                        Chính phủ bảo trợ để trở thành một trong những khoa CNTT
                        đầu ngành trong hệ thống giáo dục đại học của Việt Nam.
                 </p>
                </InforStyle>
                <RaisedButton
                    buttonStyle={{
                        backgroundColor: "#EB7B2D",
                        color: "white",
                        width: "150px"
                    }}
                    labelPosition="before"
                    icon={<ActionHome color="white" />}>Web Trường</RaisedButton>
                <RaisedButton
                    style={{marginLeft:"20px"}}
                    buttonStyle={{
                        backgroundColor: "#EB7B2D",
                        color: "white",
                        width: "150px"
                    }}
                    labelPosition="before"
                    icon={<ActionHome color="white" />}>Web Trường</RaisedButton>
            </React.Fragment>

        );
    }
}

export default Info;