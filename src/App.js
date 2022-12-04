import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Course from './components/Course/Course';
import Exam from './components/Exam/Exam';
import DS from "./components/Course/First/DS"


function App() {
  return (
    <>

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/course' element={<Course />} />
        <Route path='/exam' element={<Exam />} />
        <Route path="/ds" element={<DS />} />
      </Routes>



    </>
  );
}

export default App;
