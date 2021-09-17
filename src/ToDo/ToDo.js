import React, { useState } from 'react';

import './ToDo.css';

const ToDo = props => {

    // const [isEditing, setIsEditing] = useState(false);
    // const [isDeleting, setIsDeleting] = useState(false);

    return(
        <li className="to-do">
            <span>{props.content}</span>
            <button type="button">Edit</button>
            <button type="button">Delete</button>
        </li>
    )
}

export default ToDo;