import React, { useState } from 'react';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage.jsx';
import { GamePage } from './components/GamePage/GamePage.jsx';
import { GameOver } from './components/GameOver/GameOver.jsx';

function App() {
  const [total, setTotal] = useState(0);

  const updateTotal = (value) => {
    setTotal(value);
  }

  const zeroingTotal = () => {
    setTotal(0);
  }

  return (
    <div className="App">
      <HashRouter>
          <Switch>
            <Route
              path="/"
              exact
              component={ MainPage }
            />

            <Route
              path="/game"
              exact
            >
              <GamePage updateTotal={updateTotal} />
            </Route>

            <Route
              path="/game-over"
              exact
            >
              <GameOver
                total={total}
                zeroingTotal={zeroingTotal}
              />
            </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
