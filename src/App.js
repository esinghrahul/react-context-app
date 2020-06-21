import React from "react";
import Navbar from "./components/navbar.component";
import BookList from "./components/booklist.component";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import ThemeToggle from "./components/theme-toggle.component";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
          <BookList />
          </BookContextProvider>
        </AuthContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
