
import './App.css';
import Home from './pages/Home';


import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({

});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider >
  );
}

export default App;
