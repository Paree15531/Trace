import React from "react";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Button>asd22asd</Button>
      </div>
    </ThemeProvider>
  );
}
