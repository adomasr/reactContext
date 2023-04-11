import React, {Component} from "react"
import ThemeContext from "./ThemeContext"

// class Button extends Component {
//     render() {
//         const theme = this.context
//         return (
//             <button className={`${theme}-theme`}>Switch Theme</button>
//         )    
//     }
// }

// Button.contextType = ThemeContext

// export default Button


export default function() {
    return(
        <ThemeContext.Consumer>
            {((theme)=> (
                <button className={`${theme}-theme`}>Switch Theme</button>
            ))}
        </ThemeContext.Consumer>
        
    )
}

////////////////////////////////////////////////////////////////////////////////////////////////