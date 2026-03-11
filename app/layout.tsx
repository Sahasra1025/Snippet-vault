import React from "react";

export const metadata = {
  title: "Snippet Vault",
  description: "Code snippet manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
