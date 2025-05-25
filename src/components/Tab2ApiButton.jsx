import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography, Box, Card, CardContent, Grid } from '@mui/material';

const Tab2ApiButton = ({ onNavigate }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleClick = () => {
    onNavigate(); // Move to Tab 3
    dispatch({ type: 'FETCH_USERS_REQUEST' });; // Fetch user data
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Go to Tab 3 & Load Users
      </Button>

      <Typography variant="h6" mt={4}>
        Users from ReqRes API:
      </Typography>

      <Grid container spacing={2} mt={1}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1">
                  {user?.id} - {user?.name ?? "No Name Provided"}
                </Typography>
                <Typography variant="body2">Email - {user.email}</Typography>
                <Typography variant="body2">Username - {user.username}</Typography>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Tab2ApiButton;
