import React, { createContext, useContext, useEffect, useState} from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext({children}) => {
    const [theme, seTheme] = useState(
        () => localStorage.getItem('theme')  || 'light'
    );

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    };


    return(
        // <ThemeContext.Provider>  </ThemeContext.Provider>

        <ThemeContext.Provider value= {{teme, toggleTheme}}> {children} </ThemeContext.Provider>
        

    )

    
};