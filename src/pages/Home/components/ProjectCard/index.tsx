import { ListPlus, PencilSimpleLine, PlusCircle, Trash } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { Project } from '../../../../shared/interfaces/Project';
import { Task } from '../../../../shared/interfaces/Task';
import { TaskCard } from '../TaskCard';
import { CreateTask, EditButton, NoTask, ProjectContainer, TrashButton } from './styles';

interface ProjectCardProps {
  project: Project;
  onAddTask: (projectId: number, task: Task) => void;
  onTaskRemove: (taskId: number) => void;
  onChecked: (done: boolean, taskId: number) => void;
  onRemoveProject: (projectId: number) => void;
  onEditProject: (projectId: number) => void;
}

export function ProjectCard({ 
  project, 
  onAddTask, 
  onTaskRemove, 
  onChecked,
  onRemoveProject,
  onEditProject
}: ProjectCardProps) {
  const [taskName, setTaskName] = useState('');
  const hasTask = project.tasks.length > 0;

  function handleTaskSubmit(event: FormEvent) {
    event.preventDefault();

    const task = {
      id: Math.random() * (100 - 4) + 4,
      name: taskName,
      done: false
    }

    onAddTask(project.id, task);
    setTaskName('');
  }

  function handleRemoveProject() {
    onRemoveProject(project.id);
  }

  function handleEditProject() {
    onEditProject(project.id);
  }

  return (
    <ProjectContainer>
      <header>
        <span>{project.title}</span>
        <div>
          <EditButton onClick={handleEditProject}>
            <PencilSimpleLine />
          </EditButton>
          <TrashButton onClick={handleRemoveProject}>
            <Trash size={16}/>
          </TrashButton>
        </div>
      </header>
      <div>
        {
          hasTask ?
          (
            <div>
              {
                project.tasks.map((task: any) => (
                  <TaskCard 
                    task={task}
                    key={task.id}
                    onTaskRemove={onTaskRemove}
                    onChecked={onChecked}
                  />
                ))
              }
            </div>
          ) :
          (
            <NoTask>
              <ListPlus />
              <p>You haven't create a task</p>
            </NoTask>
          )
        }        
      </div>
      <CreateTask onSubmit={handleTaskSubmit}>
        <input type="text" onChange={(e) => setTaskName(e.target.value)} value={taskName} />
        <button type="submit"><PlusCircle size={32} /></button>
      </CreateTask>
    </ProjectContainer>
  )
}