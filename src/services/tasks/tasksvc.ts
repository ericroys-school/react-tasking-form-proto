import { HttpAdapter } from '../../api/adapters/httpAdapter';
import { NewTask, UpdateTask } from '../../types/tasks';
import { vTask, vTaskResponse } from '../../validators/tasks';

export class TaskService {
  private readonly adapter: HttpAdapter;
  constructor(adapter: HttpAdapter) {
    this.adapter = adapter;
  }
  async getTasks() {
    try {
      let res = await this.adapter.get('/api/tasks');
      const validated = vTaskResponse.safeParse(res);
      if (validated.success) {
        return validated.data.tasks;
      }
      throw validated.error;
    } catch (error) {
      throw error;
    }
  }
  async getTask(id: string) {
    try {
      let res = await this.adapter.getOne('/api/tasks', id);
      const validated = vTask.safeParse(res);
      if (validated.success) {
        return validated.data;
      }
      throw validated.error;
    } catch (error) {
      throw error;
    }
  }

  async deleteTask(id: string) {
    try {
      let response = await this.adapter.delete(`/api/tasks`, id);
      console.log(response.status);
    } catch (error) {
      console.error(error);
    }
  }

  async updateTask(id: string, task: UpdateTask) {
    try {
      let res = await this.adapter.put('/api/tasks', id, task);
      const validated = vTask.safeParse(res);
      if (validated.success) return validated.data;
      throw validated.error;
    } catch (error) {
      throw error;
    }
  }

  async addTask(newTask: NewTask) {
    try {
      let res = await this.adapter.post('/api/tasks', newTask);
      const validated = vTask.safeParse(res);
      if (validated.success) return validated.data;
      throw validated.error;
    } catch (error) {
      throw error;
    }
  }
}
