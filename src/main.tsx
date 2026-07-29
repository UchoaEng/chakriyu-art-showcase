import { createRoot } from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ThemeProvider } from 'next-themes'
import App from './App.tsx'
import './index.css'
import './i18n'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="rebecca-theme">
    <App />
    <SpeedInsights />
  </ThemeProvider>
);
