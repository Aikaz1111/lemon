import './App.css';
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import BookingPage from "./components/HomePage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes> 
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
      
    </div>
  );
};

export default App;
