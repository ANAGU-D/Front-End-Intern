import Content from "./components/content";
import Footer from "./components/footer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContactMe from "./Pages/Contact Me";



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Content/>}/>
        <Route path='/contact' element={ <ContactMe/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
