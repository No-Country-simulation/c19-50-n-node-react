import './App.css'
import Router from './Router'
import { Footer } from './components/Footer/Footer';
import { Header }  from './components/Header/Header';

function App() {
  return (
    <>
      <div className="app-container">
        <Header /> 
        <div className="main-content">
          <Router />
        </div>
        <Footer />
      </div>    
    </>
  )
}

export default App
