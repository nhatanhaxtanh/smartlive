'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import {
    Facebook,
    Instagram,
    Linkedin,
    Moon,
    Send,
    Sun,
    Twitter,
} from 'lucide-react';

function Footer() {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const [isChatOpen, setIsChatOpen] = React.useState(false);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const syncTheme = () => setIsDarkMode(mediaQuery.matches);

        syncTheme();
        mediaQuery.addEventListener('change', syncTheme);

        return () => mediaQuery.removeEventListener('change', syncTheme);
    }, []);

    React.useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <footer className="bg-background text-foreground relative border-t transition-colors duration-300">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="relative">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight">
                            Kết nối cùng chúng tôi
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Đăng ký nhận bản tin để cập nhật mới nhất và ưu đãi
                            độc quyền.
                        </p>
                        <form className="relative">
                            <Input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="pr-12 backdrop-blur-sm"
                            />
                            <Button
                                type="submit"
                                size="icon"
                                className="bg-primary text-primary-foreground absolute top-1 right-1 h-8 w-8 rounded-full transition-transform hover:scale-105"
                            >
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Đăng ký</span>
                            </Button>
                        </form>
                        <div className="bg-primary/10 absolute top-0 -right-4 h-24 w-24 rounded-full blur-2xl" />
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Liên kết nhanh
                        </h3>
                        <nav className="space-y-2 text-sm">
                            <a
                                href="#"
                                className="hover:text-primary block transition-colors"
                            >
                                Trang chủ
                            </a>
                            <a
                                href="#"
                                className="hover:text-primary block transition-colors"
                            >
                                Về chúng tôi
                            </a>
                            <a
                                href="#"
                                className="hover:text-primary block transition-colors"
                            >
                                Dịch vụ
                            </a>
                            <a
                                href="#"
                                className="hover:text-primary block transition-colors"
                            >
                                Sản phẩm
                            </a>
                            <a
                                href="#"
                                className="hover:text-primary block transition-colors"
                            >
                                Liên hệ
                            </a>
                        </nav>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">
                            Liên hệ
                        </h3>
                        <address className="space-y-2 text-sm not-italic">
                            <p>123 Đường Đổi Mới</p>
                            <p>Thành phố Công Nghệ, TC 12345</p>
                            <p>Điện thoại: (123) 456-7890</p>
                            <p>Email: hello@example.com</p>
                        </address>
                    </div>
                    <div className="relative">
                        <h3 className="mb-4 text-lg font-semibold">
                            Theo dõi chúng tôi
                        </h3>
                        <div className="mb-6 flex space-x-4">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full"
                                        >
                                            <Facebook className="h-4 w-4" />
                                            <span className="sr-only">
                                                Facebook
                                            </span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Theo dõi chúng tôi trên Facebook</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full"
                                        >
                                            <Twitter className="h-4 w-4" />
                                            <span className="sr-only">
                                                Twitter
                                            </span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Theo dõi chúng tôi trên Twitter</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full"
                                        >
                                            <Instagram className="h-4 w-4" />
                                            <span className="sr-only">
                                                Instagram
                                            </span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Theo dõi chúng tôi trên Instagram</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full"
                                        >
                                            <Linkedin className="h-4 w-4" />
                                            <span className="sr-only">
                                                LinkedIn
                                            </span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Kết nối với chúng tôi trên LinkedIn</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Sun className="h-4 w-4" />
                            <Switch
                                id="dark-mode"
                                checked={isDarkMode}
                                onCheckedChange={setIsDarkMode}
                            />
                            <Moon className="h-4 w-4" />
                            <Label htmlFor="dark-mode" className="sr-only">
                                Bật/tắt chế độ tối
                            </Label>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
                    <p className="text-muted-foreground text-sm">
                        © 2024 Tên công ty. Đã đăng ký bản quyền.
                    </p>
                    <nav className="flex gap-4 text-sm">
                        <a
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            Chính sách quyền riêng tư
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            Điều khoản dịch vụ
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            Cài đặt cookie
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
