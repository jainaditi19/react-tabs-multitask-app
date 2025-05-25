import axios from 'axios';

export const addTodo = (text) => ({ type: 'ADD_TODO', payload: text });

export const removeTodo = (index) => ({ type: 'REMOVE_TODO', payload: index });

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get('https://reqres.in/api/users?page=1', {
    headers: {
      "x-api-key": "reqres-free-v1",
      'Content-Type': 'application/json',
    },
  });
  dispatch({ type: 'SET_USERS', payload: res.data.data });
};
