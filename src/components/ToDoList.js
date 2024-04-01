import React from "react";
import { ThemeContext } from "./contexts/ThemeContext";


class ToDoList extends React.Component{
    

    render(){
        return(
        <ThemeContext.Consumer>{(context)=>{
            const {isDarkTheme, darkTheme, lightTheme, changeTheme} = context;
            const theme = isDarkTheme ? darkTheme : lightTheme;

            return(
                <div  style={{ 
                    background:theme.background, 
                    color: theme.text,  
                    height: '140px',
                    textAlign:'center'
                }}>
                    <p className="item">Pray Fajar</p>
                    <p className="item">Pray Duhr</p>
                    <p className="item">Pray Asar</p>
                    <button className="ui button primary" onClick={changeTheme}>Change the Theme</button>
                </div>

            )
           
        }}

        </ThemeContext.Consumer>
        )
 
       
    }
}

export default ToDoList;