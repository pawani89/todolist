import React from 'react'

const ListLayout = (props) => {
    const handleOnclick = (e) => {
        console.log(e.target.checked)
        props.handleSelected(props.list, e.target.checked);
    }

    return (

        <React.Fragment>
            <input type="checkbox" onClick={handleOnclick} /><span> {props.list}</span><br/>
        </React.Fragment>



    )
}

export default ListLayout;