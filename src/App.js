
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import About from './components/About';
import Sales from './components/Sales';
import Service from './components/Service';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">

    <Header/>
    <Welcome/>
    <About/>
    <Sales/>
    <Service/>
    <Footer/>
    
    {/* <Router>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/about" component={About} />
      </Switch>
    </Router> */}
    </div>
  );
}

export default App;
