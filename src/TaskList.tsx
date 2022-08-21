import Task from "./Task";
import { Task as Tasktype } from './initialTasks';

type TaskListProps = {
    tasks: Tasktype[];
    handleDelete: (id: number) => void;
    handleUpdate: (task: Tasktype) => void;
}

const TaskList = ({tasks, handleDelete, handleUpdate}: TaskListProps) => {
    return (
        <div>
            <h1>Tasks</h1>
            {
                tasks.map( task => <Task 
                    key={task.id} 
                    task={task} 
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                />)
            }
        </div>
    );
};

export default TaskList;