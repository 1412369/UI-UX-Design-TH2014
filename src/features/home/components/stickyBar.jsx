import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { FixedBar } from '../layout'
import { List, ListItem, makeSelectable } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import { blue500, yellow600 } from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import PropTypes from 'prop-types'


let SelectableList = makeSelectable(List)

function wrapState(ComposedComponent) {
    return class SelectableList extends Component {
        static propTypes = {
            children: PropTypes.node.isRequired,
            defaultValue: PropTypes.number.isRequired,
        };

        componentWillMount() {
            this.setState({
                selectedIndex: this.props.defaultValue,
            });
        }

        handleRequestChange = (event, index) => {
            this.setState({
                selectedIndex: index,
            });
        };

        render() {
            return (
                <ComposedComponent
                    value={this.state.selectedIndex}
                    onChange={this.handleRequestChange}
                >
                    {this.props.children}
                </ComposedComponent>
            );
        }
    };
}

SelectableList = wrapState(SelectableList)

class StickyBar extends Component {
    render() {
        return (
            <FixedBar>
                <SelectableList defaultValue={1}>
                    <ListItem
                        value={1}
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                        primaryText="Khoá học của tôi"
                        secondaryText="Jan 9, 2014"

                    />
                    <ListItem
                        value={2}
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                        primaryText="Các khoá học đã đăng ký"
                        secondaryText="Jan 17, 2014"
                    />
                    <ListItem
                        value={3}
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                        primaryText="Danh sách môn học"
                        secondaryText="Jan 28, 2014"
                    />
                </SelectableList>
                <Divider inset={true} />
                <List>
                    <ListItem
                        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                        rightIcon={<ActionInfo />}
                        primaryText="Vacation itinerary"
                        secondaryText="Jan 20, 2014"
                    />
                    <ListItem
                        leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
                        rightIcon={<ActionInfo />}
                        primaryText="Kitchen remodel"
                        secondaryText="Jan 10, 2014"
                    />
                </List>
            </FixedBar>
        );
    }
}

export default StickyBar;