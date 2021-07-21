import React from 'react';


const Header = ({ onAdd, showAdd }) => {
    return (
        <div className=''>
            <h1 className="ui header">CRUD APPLICATION</h1>
            <button
                className="ui  green button "

                onClick={onAdd}
            >
                {showAdd ? 'Close' : 'Add'}
            </button>
        </div>
    )
}





export default Header;
