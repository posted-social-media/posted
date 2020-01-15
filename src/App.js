// React/Components
import React from 'react';
import Profile from './views/Profile';
import NavBar from './components/layout/Navbar';


const App = () => {
  return (
    <main id="App">
      <NavBar />
      <Profile />
      <h3>React App Ready.</h3>
    </main>
  );
}

export default App;
