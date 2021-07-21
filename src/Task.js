import React from "react"

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}

                <i className="ui  red trash alternate outline icon"
                    style={{ cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}

                />

            </h3>
            <p>{task.day}</p>
        </div>
    )
}


export default Task
