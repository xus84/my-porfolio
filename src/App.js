import  { Route, BrowserRouter } from 'react-router-dom'
import HomeScreen from './HomeScreen'

function App() {
  return (
    <BrowserRouter>
     <div className="container">
     <Route path="/" component={HomeScreen} exact></Route>
     </div>
    </BrowserRouter>
  );
}

export default App;
