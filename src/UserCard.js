import React from "react";
const UserCard = (props) => {
    return(
        <div className="ui card" style={{marginRight:"10px"}}>
            <div className='content'>
                <div className='header'></div>
                <div className='description'>{props.children} </div>

            </div>
                  </div>
    )

}

export default UserCard;