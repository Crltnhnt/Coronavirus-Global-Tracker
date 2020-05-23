import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from '../utils/theme';

const defaultContextData = {
    dark: false,
    toggle: () => {}
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

const useEffectDarkMode = () => {
    const [themeState, setThemeState] = React.useState({
        dark: false,
        hasThemeLoaded: false
    });
    React.useEffect(() => {
        const IsDark = localStorage.getItem('dark') === 'true';
        setThemeState({ ...themeState, dark: IsDark, hasThemeLoaded: true });
    }, [themeState]);

    return [themeState, setThemeState];
};

const ThemeProvider = ({ children }) => {
    const [themeState, setThemeState] = useEffectDarkMode();

    if (!themeState.hasThemeLoaded) {
        return <div />;
    }

    const toggle = () => {
        const dark = !themeState.dark;
        localStorage.setItem('dark', JSON.stringify(dark));
        setThemeState({ ...themeState, dark });
    };

    const computedTheme = themeState.dark ? theme('dark') : theme('light');

    return (
        <EmotionThemeProvider theme={computedTheme}>
            <ThemeContext.Provider
                value={{
                    dark: themeState.dark,
                    toggle
                }}
            >
                {children}
            </ThemeContext.Provider>
        </EmotionThemeProvider>
    );
};

export { ThemeProvider, useTheme };