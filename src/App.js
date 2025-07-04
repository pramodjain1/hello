import logo from './logo.svg';
import './App.css';

function App() {
  const launchDateStr = process.env.REACT_APP_LAUNCH_DATE;

  const launchDate = new Date(launchDateStr);
  const today = new Date();
  const daysRemaining = Math.ceil((launchDate - today) / (1000 * 60 * 60 * 24));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>COMING SOON</p>
        {launchDateStr && (
          <div style={{ padding: '2rem', fontSize: '1.5rem' }}>
            🚀 Launch Date: <strong>{launchDateStr}</strong>
            <br />⏳ Days Remaining: <strong>{daysRemaining}</strong>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
