import logo from './logo.svg';
import './scss/App.scss';
import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={ <Intro />} />
        <Route path='/skills' element={ <Skills />} />
        <Route path='/projects' element={ <Projects /> } />
      </Routes>
    </div>
  );
}

export default App;
