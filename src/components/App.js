import './App.scss';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';



function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <Header/>            
            <Main/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
