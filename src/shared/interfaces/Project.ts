import { Task } from "./Task";

export interface Project {
  id?: string;
  title: string;
  tasks: Task[];
}