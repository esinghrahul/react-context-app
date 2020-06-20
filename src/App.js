import React from 'react';
import Navbar from './components/navbar.component';
import BookList from './components/booklist.component';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <Navbar />
      <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
