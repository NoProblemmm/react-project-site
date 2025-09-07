import axios from "axios";
import { log } from "console";
import { makeAutoObservable, reaction, runInAction, when } from "mobx";
import { action } from "mobx";
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

  getAll = action(async () => {
    this.isLoading = true;
    try {
      const res = await axios.get("https://dummyjson.com/todos");
      this.todos = res.data.todos;
    } catch (error) {
      console.log("error", error);
    } finally {
      this.isLoading = false;
    }
  });
}

export default new TodosStore();
