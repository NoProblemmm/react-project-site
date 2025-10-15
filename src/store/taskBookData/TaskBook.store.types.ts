export interface IBook {
  id: number;
  title: string;
  tasks: ITask[];
}

export interface ITask {
  id: number;
  name: string;
  complited: boolean;
}

export interface INote {
  id: number;
  title: string;
}
