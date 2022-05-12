import './App.css';
import React, {useEffect} from "react";
import Routes from "./Components/routes/routes";
import Footer from "./umesh/footer/footer";
import Header from "./umesh/Header/header";

function App() {
  return (
    <div>
        <Header/>
        <Routes/>
        <Footer/>
    </div>
  );
}

export default App;
