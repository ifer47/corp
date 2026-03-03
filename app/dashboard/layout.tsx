export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-amber-500">
      <h2>我是 Dashboard Layout</h2>
      {children}
    </div>
  );
}
