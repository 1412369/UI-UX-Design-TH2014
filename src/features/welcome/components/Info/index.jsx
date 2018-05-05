import React, { Component } from 'react';
import styled from 'styled-components'
import { RaisedButton } from 'material-ui'
import { ActionHome } from 'material-ui/svg-icons'
const InforStyle = styled.div`
    font-family:Roboto;
    margin-top:100px;
    span {
        font-size:30px;
        color:grey;
        font-weight:bold;
        line-height:50px;
        background-color:white;
        border-radius:10px;
        padding:5px;
    }
    p {
        font-size:20px;    
        background-color:white;
        border-radius:10px;
        padding:5px;
    }

`
class Info extends Component {
    render() {
        return (
            <React.Fragment>
                <InforStyle>
                    <span> Khoa Công nghệ Thông tin</span>
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
                    primary
                    buttonStyle={{
                        color: "white",
                        width: "150px"
                    }}
                    labelPosition="before"
                    icon={<ActionHome color="white" />}>Web Trường</RaisedButton>

                <RaisedButton
                    primary
                    style={{ marginLeft: "20px" }}
                    buttonStyle={{
                        color: "white",
                        width: "150px"
                    }}
                    labelPosition="before"
                    icon={<ActionHome color="white" />}>Web Khoa</RaisedButton>
            </React.Fragment>

        );
    }
}

export default Info;