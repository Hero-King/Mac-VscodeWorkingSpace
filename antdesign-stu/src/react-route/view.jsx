import React from 'react'
import {useHistory} from 'react-router-dom'
function View(props) {
    let history = useHistory();

    function handleClick() {
        history.push("fun3");
    }

    return (
        <div>
            view
            <button type="button" onClick={handleClick}>
                Go fun3
            </button>
        </div>
    );
}

export default View