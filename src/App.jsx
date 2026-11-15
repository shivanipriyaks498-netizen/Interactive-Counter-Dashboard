
import { useState } from "react";
import "./App.css";

function App() {
  // Main states
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState([]);
  const [operations, setOperations] = useState(0);

  // Increment counter
  const increment = () => {
    if (count < 20) {
      setHistory((prev) => [...prev, count]);
      setCount((prev) => prev + 1);
      setOperations((prev) => prev + 1);
    }
  };

  // Decrement counter
  const decrement = () => {
    if (count > 0) {
      setHistory((prev) => [...prev, count]);
      setCount((prev) => prev - 1);
      setOperations((prev) => prev + 1);
    }
  };

  // Reset only counter
  const reset = () => {
    setCount(0);
  };

  // Clear history only
  const clearHistory = () => {
    setHistory([]);
  };

  // Reset everything
  const resetAll = () => {
    setCount(0);
    setHistory([]);
    setOperations(0);
  };

  // Change theme
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // Calculate progress
  const progress = (count / 20) * 100;

  return (
    <div className={darkMode ? "dashboard dark" : "dashboard light"}>

      {/* Header */}

      <header className="header">
        <div>
          <h1>⚡ React Dashboard</h1>
          <p>Interactive Counter Management System</p>
        </div>

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {/* Main Counter */}

      <main className="main-content">

        <section className="counter-card">

          <h2>Current Counter Value</h2>

          <h1 className="count">{count}</h1>

          <p className="range">Minimum: 0 | Maximum: 20</p>

          {/* Progress Bar */}

          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="progress-text">
            {count} / 20
          </p>

          {/* Counter Buttons */}

          <div className="buttons">

            <button
              onClick={increment}
              disabled={count === 20}
            >
              + Increment
            </button>

            <button
              onClick={decrement}
              disabled={count === 0}
            >
              - Decrement
            </button>

            <button className="reset-btn" onClick={reset}>
              Reset
            </button>

          </div>

          {/* Limit Messages */}

          {count === 20 && (
            <p className="limit-message">
              Maximum limit reached!
            </p>
          )}

          {count === 0 && (
            <p className="limit-message">
              Minimum limit reached!
            </p>
          )}

          {count > 0 && count < 20 && (
            <p className="success-message">
              Counter is working normally.
            </p>
          )}

        </section>

        {/* Statistics */}

        <section className="stats-grid">

          <div className="stat-card">
            <h3>📊 Total Operations</h3>
            <h2>{operations}</h2>
          </div>

          <div className="stat-card">
            <h3>📝 History Records</h3>
            <h2>{history.length}</h2>
          </div>

          <div className="stat-card">
            <h3>🎯 Maximum Value</h3>
            <h2>20</h2>
          </div>

        </section>

        {/* History */}

        <section className="history-card">

          <div className="history-header">
            <h2>📜 Counter History</h2>

            <button
              className="clear-btn"
              onClick={clearHistory}
            >
              Clear History
            </button>
          </div>

          {history.length === 0 ? (
            <p className="empty-message">
              No history available. Start using the counter!
            </p>
          ) : (
            <ul className="history-list">

              {history.slice().reverse().map((value, index) => (
                <li key={history.length - 1 - index}>
                  <span>Previous Value</span>
                  <strong>{value}</strong>
                </li>
              ))}

            </ul>
          )}

        </section>

        {/* Reset All */}

        <section className="reset-section">

          <h3>Manage Dashboard</h3>

          <p>Reset the counter, history and operation records.</p>

          <button className="reset-all-btn" onClick={resetAll}>
            🔄 Reset All
          </button>

        </section>

      </main>

      {/* Footer */}

      <footer className="footer">
        <p>Lab 12 | React Interactive Counter Dashboard</p>
        <p>Built using React, JSX and useState Hook</p>
      </footer>

    </div>
  );
}

export default App;
