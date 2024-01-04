import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoPlaySharp } from 'react-icons/io5';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <h1>Modgility</h1>
        <RxHamburgerMenu size="2rem" />
      </nav>
      <div className="main-wrapper">
        <main>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <p>BUILDING BRIDGES FOR CLIENT SUCCESS SINCE 2000</p>
            <p
              style={{
                color: 'rgb(57,92,166)',
                fontSize: '3rem',
                fontWeight: 'bold'
              }}
            >
              Mockup Page made to demonstrate my development skills!
            </p>
            <button id="see-our-button">
              See Our Software Development Capabilities
            </button>
          </div>
          <div className="mark-home-1">
            <div className="play-wrapper">
              <IoPlaySharp size="1.4rem" />
            </div>
          </div>
        </main>
      </div>
      <p
        style={{
          textAlign: 'center',
          color: 'rgb(57,92,166)',
          padding: '40px',
          fontWeight: 'bold',
          fontSize: '2rem'
        }}
      >
        You're Here to Grow Your Business. Sweet. Let's Do It.
      </p>
    </>
  );
}

export default App;
