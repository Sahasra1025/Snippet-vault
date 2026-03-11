export const metadata = {
  title: "Snippet Vault",
  description: "Code snippet manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
