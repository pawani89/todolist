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
        if (checkStatus === true){
            this.props.addToDone(selectedData,"true")
        }else {
            this.props.removeFromDone(selectedData,"false")
        }

    }
    render() {
        // console.log("akansha 1", this.props.listData)
        // console.log('akansha 2', this.props.slectedDataList)
        // console.log("akansha 3", this.state.listSelected)
       
        return (
            <React.Fragment>
                <h1>TO DO LIST:-</h1>
                <h2>
                <span onClick={this.handleClick} ref={(span)=>this.handleClick} style ={this.state.listSelected === "all"? selectedSpanStyle:spanStyle}>All    </span>
                <span onClick={this.handleClick} ref={(span)=>this.handleClick} style ={this.state.listSelected === "done"? selectedSpanStyle:spanStyle}>Done    </span>
                <span onClick={this.handleClick} ref={(span)=>this.handleClick} style ={this.state.listSelected === "notdone"? selectedSpanStyle:spanStyle}>Not-Done</span>
                </h2>
                
                {this.state.listSelected === 'all' ? (this.props.listData.map((obj, key) =>  (
                <List list={obj} handleSelected= {this.handleSelected}/>   
            ))) : (this.state.listSelected === 'done' ?
            (this.props.slectedDataList.map((obj, key) => (
                 
                <List list={obj} handleSelected= {this.handleSelected}/>
   
            )))
            :
            (this.props.listData.filter(f => !this.props.slectedDataList.includes(f)).map((obj, key) => (
                 
                <List list={obj} handleSelected= {this.handleSelected}/>
   
            )))
        )
            
            }
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
    addToDone : (donedata)=>dispatch(addToDone(donedata)),
    removeFromDone : (donedata)=>dispatch(removeFromDone(donedata))
})
export default connect(mstp, mdtp)(Home)