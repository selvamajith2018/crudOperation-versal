import './App.css';
import {
   BrowserRouter, Routes, Route,
 } from 'react-router-dom';
import Header from "../src/components/Header";
import Footer from '../src/components/footer';
import HomePage from '../src/components/HomePage';
import Create from '../src/components/Create';
import Update from '../src/components/Update';
import Read from '../src/components/Read';

function App() {
    
  return (
    <div>
      <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
      </Route>
      <Route path="/Create" element={<Create />}>
      </Route> 
      <Route path="/Update" element={<Update />}>
      </Route> 
      <Route path="/Read" element={<Read />}>
      </Route> 
    </Routes>
  </BrowserRouter>
  <Footer /> 
  </div>
  );
}

export default App;