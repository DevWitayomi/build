import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ClientFlow OS | Sales System for Freelancers and Social Media Managers',
  description:
    'ClientFlow OS gives freelancers and social media managers a practical system to onboard clients, price confidently, report clearly, retain longer, and reduce burnout.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
