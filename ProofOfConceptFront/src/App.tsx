// src/App.tsx
import React from 'react';
import './App.css';
import MessageForm from './components/MessageForm';
import MessagesList from './components/MessageList';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Message App</h1>
            <MessageForm />
            <MessagesList />
        </div>
    );
};

export default App;
