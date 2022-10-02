import { Trash } from "phosphor-react";
import { Task } from "../../../../shared/interfaces/Task";
import { Checkbox, TaskContainer } from "./styles";

interface TaskCardProps {
  task: Task;
  onTaskRemove: (taskId: number) => void;
  onChecked: (done: boolean, taskId: number) => void;
}

export function TaskCard({ task, onTaskRemove, onChecked }: TaskCardProps) {
  function handleRemoveTask() {
    onTaskRemove(task.id);
  }

  function handleDoneTask() {
    onChecked(!task.done, task.id);
  }
  
  return (
    <TaskContainer>
      <div>
        <Checkbox>
          <input
            type="checkbox"
            id={task.id.toString()}
            defaultChecked={task.done}
            onChange={() => handleDoneTask()}
            disabled={task.done}
          />
          <label htmlFor={task.id.toString()}></label>
        </Checkbox>
        <p>{task.name}</p>
      </div>
      <button onClick={handleRemoveTask} disabled={task.done}>
        <Trash size={16} />
      </button>
    </TaskContainer>
  )
}