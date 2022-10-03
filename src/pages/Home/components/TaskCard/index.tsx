import { Trash } from "phosphor-react";
import { useContext } from "react";
import { format } from 'date-fns';

import { ProjectContext } from "../../../../contexts/ProjectContext";
import { Task } from "../../../../shared/interfaces/Task";
import { Checkbox, TaskContainer } from "./styles";

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const { onDeleteTask, onCheckTask } = useContext(ProjectContext);

  function handleRemoveTask() {
    if(task.id) {
      onDeleteTask(task.id);
    }
  }

  function handleDoneTask() {
    if(task.id) {
      onCheckTask(task.id);
    }
  }

  return (
    <TaskContainer 
      title={
        task.finished_at ? 
        format(new Date(task.finished_at!), 'MM/dd/yyyy H:mm:ss') :
        ''
      }
    >
      <div>
        <Checkbox>
          <input
            type="checkbox"
            id={task.id!.toString()}
            defaultChecked={task.done}
            onChange={() => handleDoneTask()}
            disabled={task.done}
          />
          <label htmlFor={task.id!.toString()}></label>
        </Checkbox>
        <span>{task.description}</span>
      </div>
      <button onClick={handleRemoveTask} disabled={task.done}>
        <Trash size={16} />
      </button>
    </TaskContainer>
  )
}