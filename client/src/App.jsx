import Footer from './components/Footer';
import Nav from './components/Nav';
import Router from './Router';

function App() {
  return (
    <>
      <header className="relative">
        <Nav />
      </header>
      <main className="h-screen">
        <Router />
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  );
}

export default App;
