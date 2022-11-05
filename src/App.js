import Content from "./components/content";
import Footer from "./components/footer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import contactMe from "./pages/contactme";



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Content/>}/>
        <Route path='/contact' element={<contactMe/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
