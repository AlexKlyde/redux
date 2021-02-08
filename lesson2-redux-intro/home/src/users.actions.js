const ADD = 'USER/ADD';
const DELETE = 'USER/DELETE';

const addUser = user => {
  return {
    type: ADD,
    payload: user,
  };
};

const deleteUser = id => {
  return {
    type: DELETE,
    payload: id,
  };
};

export { ADD, DELETE, addUser, deleteUser };
