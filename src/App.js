import Content from "./components/content";
import Footer from "./components/footer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from "./pages/contact";



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Content/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
