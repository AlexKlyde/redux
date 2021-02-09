import { addProduct, removeProduct } from './cart.actions';
import { setlanguage } from './language.actions';
import store from './store';
import { removeUser, setUser } from './user.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setlanguage('js'));
store.dispatch(setUser({name: 'Bob'}));
store.dispatch(removeUser());
store.dispatch(addProduct({ id: 1, name: 'Milk' }));
store.dispatch(addProduct({ id: 2, name: 'Bananas' }));
store.dispatch(addProduct({ id: 3, name: 'Apples' }));
store.dispatch(removeProduct(1));
