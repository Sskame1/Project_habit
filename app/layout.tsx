import type { Metadata } from "next";
import "@/scss/globals.scss";

export const metadata: Metadata = {
  title: "Project_habit",
  description: "Приложение для прививание привычек.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
