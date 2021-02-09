const ADD_USER = 'USERS/ADD_USER';
const DELETE_USER = 'USERS/DELETE_USER';
const UPDATE_USER = 'USERS/UPDATE_USER';

const addUser = userData => {
  return {
    type: ADD_USER,
    payload: {
      userData,
    },
  };
};

const deleteUser = userId => {
  return {
    type: DELETE_USER,
    payload: {
      userId,
    },
  };
};

const updateUser = (userId, userData) => {
  return {
    type: UPDATE_USER,
    payload: {
      userId,
      userData,
    },
  };
};

export { ADD_USER, DELETE_USER, UPDATE_USER };
export { addUser, deleteUser, updateUser};
