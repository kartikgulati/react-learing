import { createContext, useContext } from "react";

export const ThemeContext = createContext({ //we can give both variable and methods in the context not only state
    thememode:"light", //variable
    darkTheme:()=>{}, //function methodd
    lighttheme: ()=>{}, //function method
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}