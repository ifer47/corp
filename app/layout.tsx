import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-teal-500">
        <h1>我是 Root Layout</h1>
        {children}
      </body>
    </html>
  );
}
