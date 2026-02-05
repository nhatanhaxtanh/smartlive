import type { Metadata } from 'next';
import { Be_Vietnam_Pro, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/ui/header-3';
import { Footer } from '@/components/ui/footer-section';

const beVietnamPro = Be_Vietnam_Pro({
    variable: '--font-be-vietnam-pro',
    subsets: ['latin', 'vietnamese'],
    weight: ['400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Smart Live',
    description: 'Được tạo bằng Create Next App',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body
                className={`${beVietnamPro.variable} ${geistMono.variable} antialiased`}
            >
                {<Header />}
                {children}
                {<Footer />}
            </body>
        </html>
    );
}
