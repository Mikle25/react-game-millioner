import {
  Switch,
  Route,
  HashRouter,
} from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage.jsx';
import { GamePage } from './components/GamePage/GamePage.jsx';
import { GameOver } from './components/GameOver/GameOver.jsx';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Switch>
            <Route
              path="/"
              exact
              component={ MainPage }
            >
            </Route>
            <Route
              path="/game"
              exact
              component={ GamePage }
            >
            </Route>
            <Route
              path="/game-over"
              exact
              component={ GameOver }
            />

        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
