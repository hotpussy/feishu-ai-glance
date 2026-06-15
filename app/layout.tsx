import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '飞书 AI 能力速览',
  description: '2026 年最新飞书 AI 功能一览',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="dark">
      <body>{children}</body>
    </html>
  );
}
