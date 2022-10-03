import { ListPlus, PencilSimpleLine, PlusCircle, Trash } from 'phosphor-react';
import { FormEvent, useContext, useState } from 'react';
import { ProjectContext } from '../../../../contexts/ProjectContext';
import { Project } from '../../../../shared/interfaces/Project';
import { TaskCard } from '../TaskCard';
import { CreateTask, EditButton, NoTask, ProjectContainer, TrashButton } from './styles';

interface ProjectCardProps {
  project: Project;
  onProjectEdit: (project: Project) => void;
}

export function ProjectCard({ 
  project,
  onProjectEdit
}: ProjectCardProps) {
  const { onDeleteProject, onTaskCreate } = useContext(ProjectContext);
  const [taskName, setTaskName] = useState('');
  const hasTask = project.tasks.length > 0;

  function handleTaskSubmit(event: FormEvent) {
    event.preventDefault();
    
    if(project.id) {
      const task = {
        description: taskName
      }

      onTaskCreate(project.id, task)
    }

    setTaskName('');
  }

  function handleRemoveProject() {
    if(project.id) {
      onDeleteProject(project.id);
    }
  }

  function handleEditProject() {
    onProjectEdit(project);
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
        <button type="submit" disabled={taskName.length ? false : true}><PlusCircle size={32} /></button>
      </CreateTask>
    </ProjectContainer>
  )
}