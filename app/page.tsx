'use client'

import { useState, useEffect } from "react";
import ComponentMain from "./components/main";

export default function Home() {
  const [theme, setTheme] = useState("light"); // Default 'light' until we can detect user preference on client-side

  useEffect(() => {
    // Esta parte solo se ejecuta en el cliente
    if (typeof window !== "undefined") {
      // Detecta si el usuario prefiere el modo oscuro
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []); // Ejecutar solo al montar el componente

  useEffect(() => {
    // Aplica el tema al elemento <html> basado en el estado de 'theme'
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
      document.querySelector("html")?.classList.remove("light");
    } else {
      document.querySelector("html")?.classList.add("light");
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <ComponentMain />
    </>
  );
}
