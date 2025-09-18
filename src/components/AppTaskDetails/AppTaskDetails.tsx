export interface Book {
  id: number;
  title: string;
  tasks: Task[];
}

export interface Task {
  id: number;
  name: string;
  complited: boolean;
}

export interface State {
  taskBooks: Book[];
}

export interface Note {
  id: number;
  title: string;
}
