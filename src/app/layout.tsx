import type { Metadata } from 'next';
import './globals.css';
import { Layout } from '../components/Layout';

export const metadata: Metadata = {
  title: 'Sri Sri Ravishankar Vidya Mandir',
  description: 'Sri Sri Ravishankar Vidya Mandir, Biratnagar',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white  text-slate-900">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
