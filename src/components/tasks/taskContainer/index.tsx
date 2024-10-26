import { serviceList } from '../../../dependencies';
import { WithDependency } from '../../../hoc/withDependencies';
import { TaskContainer } from './container';

const TaskContainerWithService = WithDependency(TaskContainer, {
  taskService: serviceList.TaskService,
});

export default TaskContainerWithService;
