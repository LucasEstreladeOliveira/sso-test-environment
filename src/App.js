import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import Test1 from './components/Organisms/Test1'
import Test2 from './components/Organisms/Test2'
import Navbar from './components/Atoms/Navbar'

function App() {

  return (
    <div className="App">
      <Router>
          <div>
            <Navbar />
            <Switch>
              <Route path="/test1">
                <Test1 />
              </Route>
              <Route path="/test2">
                <Test2 />
              </Route>
              <Route path="/">
                <Test1 />
              </Route>
            </Switch>
          </div>
        </Router>
        <div className="arena-liveblog" data-publisher="creative" data-event="yisx" data-version="2"></div>
    </div>
  );
}
export default App;
