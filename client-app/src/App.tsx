import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Header } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Header as='h2' icon='users' content="Aktivite"></Header>
      <header className="App-header">
      <div>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
      </header>
    </div>
  );
}

export default App;
