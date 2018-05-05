import React, { Component } from 'react';
import styled from 'styled-components'

const FooterStyled = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Lato');
    width: 100%;
    height: auto;
    text-align:center;
.f2{
  width: 100%;
}

.sublink{
  list-style-type: none;
	display: inline-block;
	width: 10%;
	vertical-align: top;
	color: white;
	text-align: left;
	margin-right: 1em;
	margin-left: 1em;
}

.sublink a{
	text-decoration: none;
	color: white;
}

.heading{
  color: #1F4788;
}

.f3{
  width: 100%;
  height: 4em;
  background-color:#ecf0f1;
  margin:0;
  
}

.left{
  float: left;
  color: #59ABE3;
  margin-left: 20em;
}
.left span{
  line-height: 4em;
}
.right{
  float: right;
  margin-right: 20em;
}
.right ul li{
  display: inline;
  color: #59ABE3;
  line-height: 2em;
  margin-left: 0.5em;
  margin-right: 0.5em;
}
@media only screen and (max-width: 500px) {
  .f1 .button{
    display: block;
  }
  
  .f2{
    
  }
  
  .f3{
    
  }
}
`
class Footer extends Component {
    render() {
        return (
            <FooterStyled>
                <div className="f2">
                    <ul className="sublink">
                        <li className="heading">Work</li>
                        <li href="#">What we do</li>
                        <li href="#">What we can</li>
                    </ul>
                    <ul className="sublink">
                        <li className="heading">Resources</li>
                        <li href="#">Support</li>
                        <li href="#">FAQ</li>
                    </ul>
                    <ul className="sublink">
                        <li className="heading">About</li>
                        <li href="#">About us</li>
                        <li href="#">Projects</li>
                    </ul>
                    <ul className="sublink">
                        <li className="heading">Connect</li>
                        <li href="#">Twitter</li>
                        <li href="#">Facebook</li>
                        <li href="#">Instagram</li>
                    </ul>

                </div>
                <div className="f3">
                    <div className="left">
                        <span>©2016 Scymyc - Software Studios</span>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Security</li>
                        </ul>
                    </div>
                </div>
            </FooterStyled>
        )
    }
}

export default Footer;