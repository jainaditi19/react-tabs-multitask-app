import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../redux/actions';
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Typography,
} from '@mui/material';

const Tab4TodoList = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const handleRemove = (index) => {
    dispatch(removeTodo(index));
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h6" mb={2}>Todo List</Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="New Todo"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add
        </Button>
      </Box>

      <List>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() => handleRemove(index)}
                sx={{ minWidth: '40px' }}
              >
                Delete
              </Button>
            }
          >
            <ListItemText primary={todo} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Tab4TodoList;
