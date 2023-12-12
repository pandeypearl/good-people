import Timeline from './components/Timeline';
import logo from './assets/logo.jpg';
import './App.scss'

function App() {
  return (
    <div className="App">
      <header>
        <img className='welcome-img' src={logo} alt='Logo' />
        <div>
          <h1>Welcome Home</h1>
          <hr />
          <h3>Governance, Communion, Services, Teachings, and Training.</h3>
        </div>
        
      </header>
      <main>
        <Timeline />
      </main>
      
    </div>
  );
}

export default App;
