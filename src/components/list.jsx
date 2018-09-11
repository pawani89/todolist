import React from 'react'

const ListLayout = (props) => {
    const handleOnclick = (e) => {
        props.handleSelected(props.list.data, e.target.checked);
    }
    return (
        <React.Fragment>
            <input type="checkbox" onClick={handleOnclick} checked = {props.list.checked}/><span> {props.list.data}</span><br/>
        </React.Fragment>



    )
}

export default ListLayout;