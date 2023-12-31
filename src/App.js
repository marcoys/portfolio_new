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
        <Route path='/portfolio_new' element={ <Intro />} />
        <Route path='/portfolio_new/skills' element={ <Skills />} />
        <Route path='/portfolio_new/projects' element={ <Projects /> } />
      </Routes>
    </div>
  );
}

export default App;
