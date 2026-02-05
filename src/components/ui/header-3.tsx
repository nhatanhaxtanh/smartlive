'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { createPortal } from 'react-dom';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { LucideIcon } from 'lucide-react';
import {
    CodeIcon,
    GlobeIcon,
    LayersIcon,
    UserPlusIcon,
    Users,
    Star,
    FileText,
    Shield,
    RotateCcw,
    Handshake,
    Leaf,
    HelpCircle,
    BarChart,
    PlugIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type LinkItem = {
    title: string;
    href: string;
    icon: LucideIcon;
    description?: string;
};

export function Header() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10);

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 w-full border-b border-transparent',
                {
                    'bg-background/95 supports-backdrop-filter:bg-background/50 border-border backdrop-blur-lg':
                        scrolled,
                },
            )}
        >
            <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4">
                <div className="flex items-center gap-5">
                    <Link
                        href="/"
                        className="hover:bg-accent flex items-center gap-1 rounded-md p-2"
                    >
                        <Image
                            src="/logo.png"
                            alt="Smart Live"
                            width={56}
                            height={56}
                            className="h-12 w-12 md:h-14 md:w-14"
                            priority
                        />
                        <span className="text-2xl font-bold tracking-tight md:text-3xl">
                            <span className="text-emerald-500">Smart</span>{' '}
                            <span className="text-blue-600">Live</span>
                        </span>
                    </Link>
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent">
                                    Sản phẩm
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-background p-1 pr-1.5">
                                    <ul className="bg-popover grid w-lg grid-cols-2 gap-2 rounded-md border p-2 shadow">
                                        {productLinks.map((item, i) => (
                                            <li key={i}>
                                                <ListItem {...item} />
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="p-2">
                                        <p className="text-muted-foreground text-sm">
                                            Quan tâm?{' '}
                                            <a
                                                href="#"
                                                className="text-foreground font-medium hover:underline"
                                            >
                                                Đặt lịch demo
                                            </a>
                                        </p>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent">
                                    Công ty
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-background p-1 pr-1.5 pb-1.5">
                                    <div className="grid w-lg grid-cols-2 gap-2">
                                        <ul className="bg-popover space-y-2 rounded-md border p-2 shadow">
                                            {companyLinks.map((item, i) => (
                                                <li key={i}>
                                                    <ListItem {...item} />
                                                </li>
                                            ))}
                                        </ul>
                                        <ul className="space-y-2 p-3">
                                            {companyLinks2.map((item, i) => (
                                                <li key={i}>
                                                    <NavigationMenuLink
                                                        href={item.href}
                                                        className="hover:bg-accent flex flex-row items-center gap-x-2 rounded-md p-2"
                                                    >
                                                        <item.icon className="text-foreground size-4" />
                                                        <span className="font-medium">
                                                            {item.title}
                                                        </span>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuLink className="px-4" asChild>
                                <a
                                    href="#"
                                    className="hover:bg-accent rounded-md p-2"
                                >
                                    Bảng giá
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="hidden items-center gap-2 md:flex">
                    <Button className="cursor-pointer bg-linear-to-r from-emerald-500 to-blue-600 font-bold text-white transition-all duration-300 hover:scale-[1.06] hover:ring-4 hover:ring-emerald-400/30 hover:brightness-110 active:scale-[1.03]">
                        Đăng ký demo ngay!
                    </Button>
                </div>
                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label="Mở/đóng menu"
                >
                    <MenuToggleIcon
                        open={open}
                        className="size-5"
                        duration={300}
                    />
                </Button>
            </nav>
            <MobileMenu
                open={open}
                className="flex flex-col justify-between gap-2 overflow-y-auto"
            >
                <NavigationMenu className="max-w-full">
                    <div className="flex w-full flex-col gap-y-2">
                        <span className="text-sm">Sản phẩm</span>
                        {productLinks.map((link) => (
                            <ListItem key={link.title} {...link} />
                        ))}
                        <span className="text-sm">Công ty</span>
                        {companyLinks.map((link) => (
                            <ListItem key={link.title} {...link} />
                        ))}
                        {companyLinks2.map((link) => (
                            <ListItem key={link.title} {...link} />
                        ))}
                    </div>
                </NavigationMenu>
                <div className="flex flex-col gap-2">
                    <Button className="w-full bg-linear-to-r from-emerald-500 to-blue-600 font-bold text-white transition-all duration-300 hover:scale-[1.06] hover:ring-4 hover:ring-emerald-400/30 hover:brightness-110 active:scale-[1.03]">
                        Đăng ký demo ngay!
                    </Button>
                </div>
            </MobileMenu>
        </header>
    );
}

type MobileMenuProps = React.ComponentProps<'div'> & {
    open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
    if (!open || typeof window === 'undefined') return null;

    return createPortal(
        <div
            id="mobile-menu"
            className={cn(
                'bg-background/95 supports-backdrop-filter:bg-background/50 backdrop-blur-lg',
                'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
            )}
        >
            <div
                data-slot={open ? 'open' : 'closed'}
                className={cn(
                    'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
                    'size-full p-4',
                    className,
                )}
                {...props}
            >
                {children}
            </div>
        </div>,
        document.body,
    );
}

function ListItem({
    title,
    description,
    icon: Icon,
    className,
    href,
    ...props
}: React.ComponentProps<typeof NavigationMenuLink> & LinkItem) {
    return (
        <NavigationMenuLink
            className={cn(
                'data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex w-full flex-row gap-x-2 rounded-sm p-2',
                className,
            )}
            {...props}
            asChild
        >
            <a href={href}>
                <div className="bg-background/40 flex aspect-square size-12 items-center justify-center rounded-md border shadow-sm">
                    <Icon className="text-foreground size-5" />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <span className="font-medium">{title}</span>
                    <span className="text-muted-foreground text-xs">
                        {description}
                    </span>
                </div>
            </a>
        </NavigationMenuLink>
    );
}

const productLinks: LinkItem[] = [
    {
        title: 'Trình tạo website',
        href: '#',
        description: 'Tạo website đáp ứng dễ dàng',
        icon: GlobeIcon,
    },
    {
        title: 'Nền tảng đám mây',
        href: '#',
        description: 'Triển khai và mở rộng ứng dụng trên đám mây',
        icon: LayersIcon,
    },
    {
        title: 'Cộng tác nhóm',
        href: '#',
        description: 'Công cụ giúp đội ngũ làm việc hiệu quả hơn',
        icon: UserPlusIcon,
    },
    {
        title: 'Phân tích',
        href: '#',
        description: 'Theo dõi và phân tích lưu lượng truy cập website',
        icon: BarChart,
    },
    {
        title: 'Tích hợp',
        href: '#',
        description: 'Kết nối ứng dụng và dịch vụ của bạn',
        icon: PlugIcon,
    },
    {
        title: 'API',
        href: '#',
        description: 'Xây dựng tích hợp tùy chỉnh với API của chúng tôi',
        icon: CodeIcon,
    },
];

const companyLinks: LinkItem[] = [
    {
        title: 'Về chúng tôi',
        href: '#',
        description: 'Tìm hiểu câu chuyện và đội ngũ của chúng tôi',
        icon: Users,
    },
    {
        title: 'Câu chuyện khách hàng',
        href: '#',
        description: 'Xem cách chúng tôi giúp khách hàng thành công',
        icon: Star,
    },
    {
        title: 'Đối tác',
        href: '#',
        icon: Handshake,
        description: 'Hợp tác cùng chúng tôi để cùng phát triển',
    },
];

const companyLinks2: LinkItem[] = [
    {
        title: 'Điều khoản dịch vụ',
        href: '#',
        icon: FileText,
    },
    {
        title: 'Chính sách quyền riêng tư',
        href: '/privacy',
        icon: Shield,
    },
    {
        title: 'Chính sách hoàn tiền',
        href: '#',
        icon: RotateCcw,
    },
    {
        title: 'Tin tức',
        href: '#',
        icon: Leaf,
    },
    {
        title: 'Trung tâm hỗ trợ',
        href: '#',
        icon: HelpCircle,
    },
];

function useScroll(threshold: number) {
    const [scrolled, setScrolled] = React.useState(false);

    const onScroll = React.useCallback(() => {
        setScrolled(window.scrollY > threshold);
    }, [threshold]);

    React.useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [onScroll]);

    // also check on first load
    React.useEffect(() => {
        onScroll();
    }, [onScroll]);

    return scrolled;
}
