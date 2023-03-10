import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './general/MainPage';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Mars Rover</h2>
                <MainPage />
            </header>
        </div>
    );
}

export default App;
