import React from 'react';
import {MessageInput} from './components/message-input';
import { CardList } from './components/cardList';

import './App.css';

function App() {
  return (
    <div className='App'>
      <CardList />
      <MessageInput content='SEND' placeholder='Add a comment...'/>
    </div>
  );
}

export default App;