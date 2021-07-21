import Task from './Task'
const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <div className="ui segment">
            {tasks.map((task, index) => (
                <div className="ui segment">
                    <Task

                        key={index}
                        task={task}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                </div>
            ))}
        </div>
    )
}

export default Tasks;
