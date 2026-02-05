import type { Metadata } from 'next';
import { Be_Vietnam_Pro, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/ui/header-3';
import { Footer } from '@/components/ui/footer-section';
import { ThemeProvider } from '@/components/theme-provider';

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
    description: 'Phần mềm quản lý tòa nhà chung cư',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi" suppressHydrationWarning>
            <body
                className={`${beVietnamPro.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {<Header />}
                    {children}
                    {<Footer />}
                </ThemeProvider>
            </body>
        </html>
    );
}
