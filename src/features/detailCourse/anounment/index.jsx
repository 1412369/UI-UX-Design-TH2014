import React, { Component } from 'react';
import Item from './Item'
class Anounment extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>Thông báo môn học</h4>
                <ul>
                    <Item
                        image={'/public/images/time.png'}
                        title="Thông báo thi giữa kì"
                    >
                    Your current version of Yarn is out of date. 
                    The latest version is "1.6.0", while you're on "1.5.1".
                    </Item>
                    <Item
                        image={'/public/images/time.png'}
                        title="Thông báo thi giữa kì"
                    >
                    Your current version of Yarn is out of date. 
                    The latest version is "1.6.0", while you're on "1.5.1".
                    </Item>
                </ul>
            </React.Fragment>
        );
    }
}

export default Anounment;