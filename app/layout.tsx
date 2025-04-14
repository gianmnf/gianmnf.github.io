import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio Coming Soon',
  description: 'My awesome portfolio that is coming soon.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ background: 'linear-gradient(135deg, #556b2f 0%, #2a4d69 100%)' }}>
        {children}
      </body>
    </html>
  );
}