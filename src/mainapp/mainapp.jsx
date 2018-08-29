import React, { Component } from 'react';
import InputList from '../components/inputlist';
import List from '../components/list';
import { connect } from 'react-redux'
class Home extends Component {
    render() {
        console.log("main akansha", this.props.listData)
        return (
            <React.Fragment>
                <h1>TO DO LIST:-</h1>
                {this.props.listData && (this.props.listData.map((obj, key) => (<List list={obj} />)))}
                <InputList />
            </React.Fragment>
        )
    }
}

const mstp = state => ({
    listData: state.toDoList

})

export default connect(mstp, {})(Home)