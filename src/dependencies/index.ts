import { HttpAdapter } from '../api/adapters/httpAdapter';
import { TaskService } from '../services/tasks/tasksvc';

class DependencyContainer {
  _dependencies: {
    [key: symbol]: object;
  } = {};
  add<T>(key: symbol, dependency: T) {
    Object.defineProperty(this._dependencies, key, {
      value: dependency,
      enumerable: true,
    });
  }
  get<T>(key: symbol): T {
    return Object.getOwnPropertyDescriptor(this._dependencies, key)?.value;
  }
}

/**
 * Lists of types of services available for dependency injection
 */

const diContainer = new DependencyContainer();

const taskService = new TaskService(new HttpAdapter());

const serviceList = {
  TaskService: Symbol('TaskService'),
};

diContainer.add(serviceList.TaskService, taskService);

export { diContainer, serviceList };
