import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import { Sidebar} from './components/Sidebar/Sidebar'
import { Card } from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar />
      <Card />
    </div>
  );
}

export default App;
