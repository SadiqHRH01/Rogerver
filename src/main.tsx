import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { useState, useEffect } from "react";
import MainApp from "./App";
import SupportPage from "./supportpage";
import Footer from "./Footer";
import AboutRogerPage from "./aboutRoger";

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function App() {
  const [page, setPage] = useState<"home" | "support" | "aboutRoger">("home");
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    if (page === 'home' && hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setHash(null); // Clear hash after scrolling
    }
  }, [page, hash]);

  const navigate = (
    pageName: "home" | "support" | "aboutRoger",
    hashName: string | null = null
  ) => {
    setPage(pageName);
    if (hashName) {
      setHash(hashName);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 text-slate-900 font-sans">
      {page === "home" && <MainApp setPage={navigate} />}
      {page === "support" && <SupportPage setPage={navigate} />}
      {page === "aboutRoger" && <AboutRogerPage setPage={navigate} />}
      <Footer setPage={navigate} />
    </div>
  );
}

export default App;
