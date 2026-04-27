import React, { createContext, useState } from 'react'


export const useThemeContext = createContext();
const ThemeContext = (props) => {
  const [theme, setTheme] = useState("dark")
  return (
    <div>
      <useThemeContext.Provider value={["only head no body", theme, setTheme]}>
        {props.children}
      </useThemeContext.Provider>
    </div>
  )
}

export default ThemeContext