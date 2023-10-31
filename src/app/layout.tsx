import "./globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "./components/ThemeRegistry/ThemeRegistry";
import NavBar from "./components/NavBar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Peter's Portfolio",
  description: "Peter's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <ThemeRegistry>
          <NavBar></NavBar>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
