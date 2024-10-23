import { diContainer, serviceList } from '../../dependencies';

describe('Dependency Container Tests', () => {
  it('add and get feature test', () => {
    let container = diContainer;
    let v = Symbol('x');

    container.add(v, { bob: 'bob' });
    //our default di container adds task service so check for that
    expect(container.get(serviceList.TaskService)).toBeDefined();
    //then check for the symbol we added here
    expect(container.get(v)).toBeDefined();
  });
});
