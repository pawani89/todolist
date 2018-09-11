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
            this.setState({
                listSelected : 'all'
            })
        }else if (span.target.innerHTML === 'Done    '){
            this.setState({
                listSelected : 'done'
            })
        }else{
            this.setState({
                listSelected : 'notdone'
            })
        }


    }
    handleSelected=(selectedData, checkStatus,key)=>{
        let data = {
            list: selectedData,
            checked: checkStatus
        }
        if (checkStatus === true){
            this.props.addToDone(selectedData,checkStatus,key)
        }else {
            this.props.removeFromDone(selectedData,checkStatus,key)
        }

    }
    render() {
 
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
                {this.state.listSelected === "done" && (this.props.listData.filter((obj)=> obj.checked === true).map((obj, key) => (
                 
                 <List list={obj} handleSelected= {this.handleSelected}/>
             
             )))}
                {this.state.listSelected === "notdone" && (this.props.listData.filter((obj)=> obj.checked === false).map((obj, key) => (
              
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
   // listData : state.selectedList

})
const mdtp = dispatch =>({
    //earlier i was not sending the second parameter while calling dispatch, to dispatch the actions.
    addToDone : (donedata,checked,key)=>dispatch(addToDone(donedata,checked)),
    removeFromDone : (donedata,checked,key)=>dispatch(removeFromDone(donedata,checked))
})
export default connect(mstp, mdtp)(Home)