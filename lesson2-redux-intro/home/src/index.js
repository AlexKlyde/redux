import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ id: 76, name: 'Tom' }));
store.dispatch(addUser({ id: 33, name: 'John' }));
store.dispatch(addUser({ id: 21, name: 'Bred' }));
store.dispatch(addUser({ id: 15, name: 'MIke' }));
store.dispatch(addUser({ id: 45, name: 'Jack' }));
store.dispatch(addUser({ id: 53, name: 'Alex' }));


store.dispatch(deleteUser(21));
store.dispatch(deleteUser(45));
