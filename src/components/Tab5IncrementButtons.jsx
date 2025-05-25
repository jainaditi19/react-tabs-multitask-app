import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

const Tab5IncrementButtons = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <Box sx={{ padding: 4, display: 'flex', gap: 4, justifyContent: 'center' }}>
      <Box>
        <Button variant="contained" onClick={() => setCount1(count1 + 1)}>
          Count 1: {count1}
        </Button>
      </Box>

      <Box>
        <Button variant="contained" onClick={() => setCount2(count2 + 1)}>
          Count 2: {count2}
        </Button>
      </Box>
    </Box>
  );
};

export default Tab5IncrementButtons;
