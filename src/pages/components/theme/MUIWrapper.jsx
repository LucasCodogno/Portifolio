'use client'
import React, { createContext, useMemo, useState, useEffect } from "react";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export const MUIWrapperContext = createContext({
  toggleColorMode: () => {}
});

const createStyledComponentsTheme = (mode) => ({
  colors: {
    primary: mode === 'dark' ? '#000' : '#fff',
    // outros ajustes de cores com base no modo
  },
  // outros ajustes do tema
});

export default function MUIWrapper({ children }) {
  const [mode, setMode] = useState("light");
  const [isMounted, setIsMounted] = useState(false);
//xs
  useEffect(() => {
    const storedMode = localStorage.getItem("themeMode") || "light";
    setMode(storedMode);
    setIsMounted(true);
  }, []);

  const muiWrapperUtils = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("themeMode", newMode);
          return newMode;
        });
      }
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  );

  const styledTheme = useMemo(() => createStyledComponentsTheme(mode), [mode]);

  if (!isMounted) {
    return null; // ou um fallback, como um spinner
  }

  return (
    <MUIWrapperContext.Provider value={muiWrapperUtils}>
      <MUIThemeProvider theme={theme}>
        <StyledThemeProvider theme={styledTheme}>
          {children}
        </StyledThemeProvider>
      </MUIThemeProvider>
    </MUIWrapperContext.Provider>
  );
}
