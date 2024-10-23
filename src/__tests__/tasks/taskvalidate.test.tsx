import { describe, it, expect } from 'vitest';
import { vTask, vTaskResponse } from '../../validators/tasks';
import { getFile } from '../util';

describe('Validation for task information', () => {
  it('Json array of tasks should validate without error', () => {
    const validated = vTaskResponse.safeParse({
      ...JSON.parse(getFile('tasks/data/tasks.json')).tasks,
    });
    //console.log('T: ' + validated.success, '  V: ' + validated.error);
    expect(validated.success).toBeTruthy();
  });
  it('Json task object should validate without error', () => {
    const validated = vTask.safeParse({
      ...JSON.parse(getFile('tasks/data/task.json')),
    });
    //console.log('T: ' + validated.success, '  V: ' + validated.error);
    expect(validated.success).toBeTruthy();
  });
});
