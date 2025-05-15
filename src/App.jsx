import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar from './components/NavBar/NavBar';
import NotFound from './pages/NotFound/NotFound';
import AllProjects from './pages/AllProjects/AllProjects';
import ProjectPage from './pages/Project/ProjectPage';
import './App.scss'


function App() {
  

  return (
    <>
     <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<AllProjects />} />
          {/* <Route path="/projects/new" element={<NewProject />} /> */}
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <footer>Copyright {new Date().getFullYear()}</footer>
      </BrowserRouter>
    </>
  )
}

export default App
