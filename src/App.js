import React from 'react';
import './App.css';
import  Header  from './components/Header';
import Main from './components/Main';
import youtube from './api/youtube'

function App() {
  const handleSubmit = async(searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResult: 5,
        key: 'MYKEY',
        q: searchTerm
      }
    })
    console.log(response)
  }

  return (
    <div className="App">
      <Header handleSubmit/>
      <Main />
      <footer>
      </footer>
    </div>
  );
}

export default App;
