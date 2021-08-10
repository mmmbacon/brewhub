import React, {
  useEffect,
  useContext,
  useReducer,
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import axios from 'axios';
import dotenv from 'dotenv';
import BrewhubTheme from './style/brewhubTheme';

// State
import Context from './context';
import Reducer from './reducer';

// Custom Components
import Dashboard from './components/Dashboard';

dotenv.config();

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getBreweries = async () => {
    try {
      const { data } = await axios.get(`${process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : ''}/breweries/all`);
      dispatch({ type: 'GET_ALL_BREWERIES', payload: data });
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getBreweries();
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={BrewhubTheme}>
        <CssBaseline />
        <div className="App">
          <Router>
            <Switch>
              <Route path="/" exact>
                <Dashboard />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
