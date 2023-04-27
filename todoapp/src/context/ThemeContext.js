import React, {useContext} from 'react';

export const ThemeContext = React.createContext(null);
export const useThemeContext = ()=> useContext(ThemeContext);

export function ThemeProvider(props) {
    return(
        <ThemeContext.Provider>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider