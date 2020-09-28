import React from 'react';
import './App.css';
import  Header  from './components/Header';
import Main from './components/Main';
import youtube from './api/youtube'

function App() {
  const handleSubmit = async(searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: ,
        q: searchTerm
      }
    })
    console.log(response)
  }

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit}/>
      <Main />
      <footer>
      </footer>
    </div>
  );
}

export default App;
