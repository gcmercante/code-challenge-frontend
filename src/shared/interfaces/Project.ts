import { Task } from "./Task";

export interface Project {
  id: number;
  title: string;
  tasks: Task[];
}