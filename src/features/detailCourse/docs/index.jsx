import React, { Component } from 'react';
import Item from './item'
class Docs extends Component {
    render() {
        return (
            <div>
                 <h4>Tài liệu môn học</h4>
                 <ul>
                 <Item
                        title="Thông báo thi giữa kì"
                    >
                        Your current version of Yarn is out of date.
                        The latest version is "1.6.0", while you're on "1.5.1".
                    </Item>
                    <Item
                        title="Thông báo thi giữa kì"
                    >
                        Your current version of Yarn is out of date.
                        The latest version is "1.6.0", while you're on "1.5.1".
                    </Item>
                    <Item
                        title="Thông báo thi giữa kì"
                    >
                        Your current version of Yarn is out of date.
                        The latest version is "1.6.0", while you're on "1.5.1".
                    </Item>
               </ul>
            </div>
        );
    }
}

export default Docs;