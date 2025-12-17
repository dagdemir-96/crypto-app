import { useContext, useEffect } from "react";
import {  createContext, useState } from "react";


export const ThemeContext = createContext()
//sağlıyıcı-HOC
export const ThemeProvider = ({ children }) => {
    //Tema State i
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme")==="dark");

    //temayı değiştirecek fonksiyon
    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };
//tema değişince arayüz güncellemesi
useEffect(()=>{
    const root= window.document.documentElement;
    
    if(isDarkMode){
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }else{
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
},[isDarkMode]);

    return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}
    </ThemeContext.Provider>

};
//custom hook
export const useTheme=()=>{
    const context = useContext(ThemeContext);

    if(context ===undefined){
        throw new Error("Provider ile App i sarmala");
    }
    return context;
}
