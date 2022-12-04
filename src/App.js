import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Course from './components/Course/Course';
import Header from './components/Header';

function App() {
  return (
    <>

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/course' element={<Course />} />
      </Routes>



    </>
  );
}

export default App;
