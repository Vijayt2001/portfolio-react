import React, { createContext, useContext, useEffect, useState} from 'react';

const ThemeContext = createContxt();

export const useTheme = () => useContext({children}) => {
    const [theme, seTheme] = useState(
        () => localStorage.getItem('theme')  || 'light'
    );
};