import React, { Component } from 'react'

import {ThemeContext} from '../contexts/ThemeContext'

export default class BookList extends Component{
    //Can only use this approach of static context types with class based components and if there aren't multiple contexts
    static contextType = ThemeContext
    render(){
        const {isLightTheme, light, dark} = this.context
        const theme = isLightTheme ? light : dark
        return(
            <div className='book-list' style = {{color: theme.textStyle, background: theme.bg}}>
                <ul>
                    <li style={{background: theme.ui}}>The Way of the Kings</li>
                    <li style={{background: theme.ui}}>The Name of the Wind</li>
                    <li style={{background: theme.ui}}>The Final Empire</li>
                </ul>
            </div>
        )
    }
}