import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "MP",
  description: "Manish Phartiyal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
