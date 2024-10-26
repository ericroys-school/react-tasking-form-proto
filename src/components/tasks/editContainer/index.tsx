import { serviceList } from '../../../dependencies';
import { WithDependency } from '../../../hoc/withDependencies';
import { EditContainer } from './editContainer';

export default WithDependency(EditContainer, {
  taskService: serviceList.TaskService,
});
