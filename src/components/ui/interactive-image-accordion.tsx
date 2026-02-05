'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type AccordionDataItem = {
    id: number;
    title: string;
    imageUrl: string;
};

type AccordionItemProps = {
    item: AccordionDataItem;
    isActive: boolean;
    onMouseEnter: () => void;
};

// --- Data for the image accordion ---
const accordionItems: AccordionDataItem[] = [
    {
        id: 1,
        title: 'Quản lý cư dân',
        imageUrl: '/image3.png',
    },
    {
        id: 2,
        title: 'Thu phí & công nợ',
        imageUrl: '/image8.png',
    },
    {
        id: 3,
        title: 'Vận hành & bảo trì',
        imageUrl: '/image6.png',
    },
    {
        id: 4,
        title: 'Thông báo & phản ánh',
        imageUrl: '/image7.png',
    },
    {
        id: 5,
        title: 'Báo cáo tổng hợp',
        imageUrl: '/512.png',
    },
];

// --- Accordion Item Component ---
const AccordionItem = ({
    item,
    isActive,
    onMouseEnter,
}: AccordionItemProps) => {
    const [imgSrc, setImgSrc] = useState(item.imageUrl);

    return (
        <div
            className={`relative h-112.5 cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-in-out ${isActive ? 'w-100' : 'w-15'} `}
            onMouseEnter={onMouseEnter}
        >
            {/* Background Image */}
            <Image
                src={imgSrc}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
                fill
                sizes="400px"
                onError={() =>
                    setImgSrc(
                        'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error',
                    )
                }
            />
        </div>
    );
};

// --- Main App Component ---
export function LandingAccordionItem() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % accordionItems.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const handleItemHover = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="bg-white font-sans dark:bg-black">
            <section className="container mx-auto px-4 py-12 md:py-24">
                <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
                    {/* Left Side: Text Content */}
                    <div className="w-full text-center md:w-5/12 md:text-left">
                        <h1 className="text-3xl leading-tight font-bold tracking-tighter text-gray-900 md:text-5xl dark:text-white">
                            <span className="gradient-animate bg-linear-to-r from-emerald-500 to-lime-400 bg-clip-text text-5xl leading-none text-transparent md:text-7xl">
                                Smart
                            </span>{' '}
                            <span className="gradient-animate bg-linear-to-r from-sky-500 to-blue-600 bg-clip-text text-5xl leading-none text-transparent md:text-7xl">
                                Live
                            </span>
                            <span className="block text-gray-900 dark:text-white">
                                Phần mềm quản lý chung cư toàn diện
                            </span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 md:mx-0 dark:text-gray-200">
                            Quản lý vận hành, cư dân, thu phí và thông báo tập
                            trung trên một nền tảng, giúp ban quản lý tiết kiệm
                            thời gian và nâng cao trải nghiệm sống.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-[#3DDC84] to-[#2EBE73] px-4 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-[#2EBE73] hover:to-[#1FAE62] dark:from-[#3DDC84] dark:to-[#2EBE73] dark:hover:from-[#2EBE73] dark:hover:to-[#1FAE62]"
                            >
                                <span>Tải về cho Android</span>
                                <Image
                                    src="/ggplayicon.png"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="-translate-y-0.2 h-6 w-6 object-contain"
                                />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-[#007AFF] to-[#005FCC] px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-[#005FCC] hover:to-[#0047A6] hover:text-white dark:from-[#007AFF] dark:to-[#005FCC] dark:hover:from-[#005FCC] dark:hover:to-[#0047A6]"
                            >
                                <span>Tải về cho IOS</span>
                                <Image
                                    src="/appleicon.png"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="h-6 w-6 -translate-y-0.5 object-contain"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Image Accordion */}
                    <div className="w-full md:w-7/12">
                        {/* Changed flex-col to flex-row to keep the layout consistent */}
                        <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
                            {accordionItems.map((item, index) => (
                                <AccordionItem
                                    key={item.id}
                                    item={item}
                                    isActive={index === activeIndex}
                                    onMouseEnter={() => handleItemHover(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
