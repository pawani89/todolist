import React, { Component } from 'react';
import InputList from '../components/inputlist';
import List from '../components/list';
import { connect } from 'react-redux';
import {addToDone,removeFromDone} from '../actions';

const selectedSpanStyle = {
    color: 'red'
  };
  const spanStyle = {
    color: 'black'
  };

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            listSelected: 'all'
        }
    }
    handleClick=(span)=>{
        
    
        if (span.target.innerHTML=== 'All    '){
            
            console.log("akansha", span.target.innerHTML)
            this.setState({
                listSelected : 'all'
            })
        }else if (span.target.innerHTML === 'Done    '){
            console.log("akansha", span.target.innerHTML)

            this.setState({
                listSelected : 'done'
            })
        }else{
            console.log("akansha", span.target.innerHTML)

            this.setState({
                listSelected : 'notdone'
            })
        }


    }
    handleSelected=(selectedData, checkStatus)=>{
        let data = {
            list: selectedData,
            checked: checkStatus
        }
        if (checkStatus === true){
            //this.props.addToDone(data)
            this.props.addToDone(selectedData,checkStatus)
        }else {
            this.props.removeFromDone(selectedData,checkStatus)
        }

    }
    render() {
        // console.log("akansha 1", this.props.listData)
        // console.log('akansha 2', this.props.slectedDataList)
        // console.log("akansha 3", this.state.listSelected)
     if (this.state.listSelected === "all"){
const all = this.props.listData.map((obj, key) =>  (
    <List list={obj} handleSelected= {this.handleSelected}/>   
))
     }else if (this.state.listSelected === "done"){
const done = this.props.slectedDataList.map((obj, key) => (
                 
    <List list={obj} handleSelected= {this.handleSelected}/>

))
     }else {
const notDone = this.props.listData.filter(f => !this.props.slectedDataList.includes(f)).map((obj, key) => (
                 
    <List list={obj} handleSelected= {this.handleSelected}/>

))
     }
        return (
            <React.Fragment>
                <h1>TO DO LIST:-</h1>
                <h2>
                <span onClick={this.handleClick} ref={(span)=>this.handleClick} style ={this.state.listSelected === "all"? selectedSpanStyle:spanStyle}>All    </span>
                <span onClick={this.handleClick} ref={(span)=>this.handleClick} style ={this.state.listSelected === "done"? selectedSpanStyle:spanStyle}>Done    </span>
                <span onClick={this.handleClick} ref={(span)=>this.handleClick} style ={this.state.listSelected === "notdone"? selectedSpanStyle:spanStyle}>Not-Done</span>
                </h2>
                {this.state.listSelected === "all" && (this.props.listData.map((obj, key) =>  (
    <List list={obj} handleSelected= {this.handleSelected}/>   
)))}
                {this.state.listSelected === "done" && (this.props.slectedDataList.map((obj, key) => (
                 
                 <List list={obj} handleSelected= {this.handleSelected}/>
             
             )))}
                {this.state.listSelected === "notdone" && (this.props.listData.filter(f => !this.props.slectedDataList.includes(f)).map((obj, key) => (
                 
                 <List list={obj} handleSelected= {this.handleSelected}/>
             
             )))}
                
                <br/>
                <InputList />
            </React.Fragment>
        )
    }
}

const mstp = state => ({
    listData: state.toDoList,
    slectedDataList : state.selectedList

})
const mdtp = dispatch =>({
    //earlier i was not sending the second parameter while calling dispatch, to dispatch the actions.
    addToDone : (donedata,checked)=>dispatch(addToDone(donedata,checked)),
    removeFromDone : (donedata,checked)=>dispatch(removeFromDone(donedata,checked))
})
export default connect(mstp, mdtp)(Home)