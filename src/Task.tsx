import { useState, ChangeEvent } from "react";
import { Task as Tasktype } from './initialTasks';

type TaskProps = {
    task: Tasktype;
    handleUpdate: (task: Tasktype) => void;
    handleDelete: (id: number) => void;
};
const Task = ({task, handleUpdate, handleDelete}: TaskProps) => {
    const [edit, setEdit] = useState<Boolean>(false);
    const [taskValue, setTaskValue] = useState<string>(task.name);

    const handleEdit = () => {
        setEdit(true);
    };

    const save = () => {
        handleUpdate({id: task.id, name: taskValue});
        setEdit(false);
    };

    const deleteTask = () => {
        handleDelete(task.id);
    };

    const setTask = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskValue(event.target.value);
    };

    return (
        edit ?
            <div>
                <input type="text" value={taskValue} onChange={setTask}/>
                <button onClick={save}>Save</button>
            </div>
        :   <div>
                {task.id}
                {task.name}
                <button onClick={handleEdit}>Edit</button>
                <button onClick={deleteTask}>Delete</button>
            </div>
    )
};

export default Task;