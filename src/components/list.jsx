import React from 'react'
import { connect } from 'react-redux'
import { selectList } from '../actions'
const ListLayout = (props) => {
    const handleOnclick = (e) => {
        console.log(e.target.value)
        props.selectList(props.list, e.target.value)
    }
    return (

        <React.Fragment>
            <input type="checkbox" onClick={handleOnclick} /><div> {props.list}</div>
        </React.Fragment>



    )
}

const MSTP = state => ({});
const MDTP = dispatch => ({
    selectList: (selecedList, checkOnOff) => dispatch(selectList(selecedList, checkOnOff))
})
export default connect(MSTP, MDTP)(ListLayout);