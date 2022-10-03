export interface Task {
  id?: string;
  description: string;
  done?: boolean;
  created_at?: Date;
  finished_at?: Date;
}