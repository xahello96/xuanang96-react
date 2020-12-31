import React from 'react'
export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
        language: '白色'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
        language: '黑色'
    },
};

export const ThemeContext = React.createContext({
    theme: themes.dark, // 默认值
    toggleTheme: () => { 
        console.log('nmsl')
    },
});
