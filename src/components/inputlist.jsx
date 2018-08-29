import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToList } from '../actions'


class InputList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: ""
        }
    }
    addToList = () => {
        this.props.addToList(this.state.listData);
    }
    handleListData = (e) => {
        let listData = e.target.value;
        this.setState({
            listData
        });
        e.target.value = ""
    }
    render() {
        return (
            <React.Fragment>
                <input onBlur={this.handleListData}></input>
                <button onClick={this.addToList}>ADD</button>
            </React.Fragment>
        )
    }

}
const mstp = state => ({})
const mdtp = dispatch => ({
    addToList: (listData) => dispatch(addToList(listData))
})
export default connect(mstp, mdtp)(InputList)