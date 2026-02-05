'use client';

import Image from 'next/image';
import React, { useState } from 'react';

// --- Data for the image accordion ---
const accordionItems = [
    {
        id: 1,
        title: 'Quản lý cư dân',
        imageUrl:
            'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1600&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'Thu phí & công nợ',
        imageUrl:
            'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1600&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Vận hành & bảo trì',
        imageUrl:
            'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    },
    {
        id: 4,
        title: 'Thông báo & phản ánh',
        imageUrl:
            'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1600&auto=format&fit=crop',
    },
    {
        id: 5,
        title: 'Báo cáo tổng hợp',
        imageUrl:
            'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=1600&auto=format&fit=crop',
    },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }) => {
    const [imgSrc, setImgSrc] = useState(item.imageUrl);

    return (
        <div
            className={`relative h-[450px] cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-in-out ${isActive ? 'w-[400px]' : 'w-[60px]'} `}
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
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Caption Text */}
            <span
                className={`absolute text-lg font-semibold whitespace-nowrap text-white transition-all duration-300 ease-in-out ${
                    isActive
                        ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
                        : // Inactive state: vertical, positioned at the bottom, for all screen sizes
                          'bottom-24 left-1/2 w-auto -translate-x-1/2 rotate-90 text-left'
                } `}
            >
                {item.title}
            </span>
        </div>
    );
};

// --- Main App Component ---
export function LandingAccordionItem() {
    const [activeIndex, setActiveIndex] = useState(4);

    const handleItemHover = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="bg-white font-sans dark:bg-black">
            <section className="container mx-auto px-4 py-12 md:py-24">
                <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
                    {/* Left Side: Text Content */}
                    <div className="w-full text-center md:w-1/2 md:text-left">
                        <h1 className="text-3xl leading-tight font-bold tracking-tighter text-gray-900 md:text-5xl dark:text-white">
                            <span className="gradient-animate bg-gradient-to-r from-emerald-500 to-lime-400 bg-clip-text text-transparent text-5xl leading-none md:text-7xl">
                                Smart
                            </span>{' '}
                            <span className="gradient-animate bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent text-5xl leading-none md:text-7xl">
                                Live
                            </span>
                            <span className="block text-gray-900 dark:text-white">
                                Phần mềm quản lý chung cư toàn diện
                            </span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 md:mx-0 dark:text-shadow-white">
                            Quản lý vận hành, cư dân, thu phí và thông báo tập
                            trung trên một nền tảng, giúp ban quản lý tiết kiệm
                            thời gian và nâng cao trải nghiệm sống.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                            <a
                                href="#contact"
                                className="inline-block rounded-lg bg-gradient-to-r from-[#3DDC84] to-[#2EBE73] px-8 py-3 font-semibold text-[#0b1f14] shadow-lg transition-all duration-300 hover:from-[#2EBE73] hover:to-[#1FAE62] hover:text-white dark:from-[#3DDC84] dark:to-[#2EBE73] dark:text-[#0b1f14] dark:hover:from-[#2EBE73] dark:hover:to-[#1FAE62] dark:hover:text-white"
                            >
                                Tải về cho Android
                            </a>
                            <a
                                href="#contact"
                                className="inline-block rounded-lg bg-gradient-to-r from-[#007AFF] to-[#005FCC] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-[#005FCC] hover:to-[#0047A6] hover:text-white dark:from-[#007AFF] dark:to-[#005FCC] dark:text-white dark:hover:from-[#005FCC] dark:hover:to-[#0047A6] dark:hover:text-white"
                            >
                                Tải về cho IOS
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Image Accordion */}
                    <div className="w-full md:w-1/2">
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
