import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Tabs, Tab, Box } from '@mui/material';

import Tab1Iframe from './components/Tab1Iframe';
import Tab2ApiButton from './components/Tab2ApiButton';
import Tab3Recursive from './components/Tab3Recursive';
import Tab4TodoList from './components/Tab4TodoList';
import Tab5IncrementButtons from './components/Tab5IncrementButtons';

import './App.scss';

function App() {
  const [value, setValue] = useState(0);

  return (
    <Provider store={store}>
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={(e, newVal) => setValue(newVal)} centered>
          <Tab label="Wikipedia" />
          <Tab label="API & Navigate" />
          <Tab label="Recursive" />
          <Tab label="Todo List" />
          <Tab label="Increments" />
        </Tabs>

        {value === 0 && <Tab1Iframe />}
        {value === 1 && <Tab2ApiButton onNavigate={() => setValue(2)} />}
        {value === 2 && <Tab3Recursive />}
        {value === 3 && <Tab4TodoList />}
        {value === 4 && <Tab5IncrementButtons />}
      </Box>
    </Provider>
  );
}

export default App;
