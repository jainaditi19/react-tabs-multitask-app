import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const Tab3Recursive = () => {
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState([]);

  const printRecursive = (count, result = []) => {
    if (count <= 0) {
      result.push('STOP');
      return result;
    }
    result.push('Hello Task');
    return printRecursive(count - 1, result);
  };

  const handleSubmit = () => {
    const num = parseInt(inputValue);
    if (!isNaN(num) && num >= 0) {
      const result = printRecursive(num);
      setOutput(result);
    } else {
      setOutput(['Please enter a valid non-negative number']);
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <TextField
        label="Enter a Number"
        variant="outlined"
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sx={{ marginRight: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Run Task
      </Button>

      <Box mt={3}>
        {output.map((line, index) => (
          <Typography key={index}>{line}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Tab3Recursive;
