import React from "react";
import Header from "../../components/Header/Header";
import { AppSidebar } from "../../components/App-sidebare/App-sidebare";
import styles from "./AppShell.module.css";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        <AppSidebar />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
