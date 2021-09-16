import React from 'react';

import './ToDo.css';

const ToDo = props => {
    return(
        <li className="to-do">
            <span>Do the dumb things I gotta do</span>
            <button type="button">Edit</button>
            <button type="button">Delete</button>
        </li>
    )
}

export default ToDo;