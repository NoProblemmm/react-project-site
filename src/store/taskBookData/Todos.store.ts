import axios from "axios";
import { makeAutoObservable, reaction, runInAction, when } from "mobx";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
class TodosStore {
  todos: Todo[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    this.getAll = this.getAll.bind(this);
    reaction(
      () => this.todos.length,
      (newLengs) => {
        console.log(`Количество: ${newLengs}`);
      }
    );

    when(
      () => !this.isLoading && this.todos.length > 0,
      () => console.log(`${this.todos.length} - Загружено`)
    );
  }

  async getAll() {
    if (this.todos.length > 0) {
      return;
    }
    runInAction(() => (this.isLoading = true));
    try {
      const res = await axios.get("https://dummyjson.com/todos");
      runInAction(() => (this.todos = res.data.todos));
    } catch (error) {
      console.log("error", error);
    } finally {
      runInAction(() => (this.isLoading = false));
    }
  }
}

export default new TodosStore();
