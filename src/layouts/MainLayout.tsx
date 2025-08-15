import React, { useState } from "react";
import Header from "../components/Header/Header";
import { AppSidebar } from "../components/App-sidebare/App-sidebare";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.layout}>
      <Header onToggleSidebar={toggleSidebar} />

      <div className={styles.container}>
        <AppSidebar isOpen={isSidebarOpen} />

        <main
          className={`${styles.main} ${!isSidebarOpen ? styles.fullWidth : ""}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
