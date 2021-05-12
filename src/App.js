import  { Route, BrowserRouter, Switch } from 'react-router-dom'
import HomeScreen from './HomeScreen'
import Projects from './Projects'
import Skills from './Skills'

function App() {
  return (
    <BrowserRouter>
     <div className="container">
       <Switch>
        <Route path="/Skills" component={Skills}></Route>
        <Route path="/Projects" component={Projects} exact></Route>
        <Route path="/" component={HomeScreen} exact></Route>
      </Switch>
     </div>
    </BrowserRouter>
  );
}

export default App;
