import React, { Component } from "react";

import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

export default class Navbar extends Component {
  // static contextType= ThemeContext
  render() {
    // console.log(this.context)
    // const {isLightTheme, light, dark} = this.context
    // const theme= isLightTheme ? light : dark
    return (
        //Context.Consumer approach can be used with functional components as well as with multiple contexts
        //Context.Consumer expects a function which has context object as parameter and expects to return JSX
      <AuthContext.Consumer>{(authContext) => (
          <ThemeContext.Consumer>{(themeContext) => {
              const {isAuthenticated, toggleAuth} = authContext
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.textStyle }}>
                  <h1>Context App</h1>
                  <div onClick = {toggleAuth}>
                    Click to change authentication status: {isAuthenticated ? 'Logged In' : 'Logged Out'}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contacts</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}
