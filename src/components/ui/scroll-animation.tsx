'use client';
import React from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';

export function ScrollTablet() {
    return (
        <ContainerScroll
            titleComponent={
                <>
                    <h1 className="text-4xl font-semibold text-black dark:text-white">
                        Vận hành tòa nhà thông minh với <br />
                        <span className="mt-1 text-4xl leading-none font-bold md:text-[6rem]">
                            <span className="gradient-animate bg-linear-to-r from-emerald-500 to-lime-400 bg-clip-text text-transparent">
                                Smart
                            </span>{' '}
                            <span className="gradient-animate bg-linear-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                                Live
                            </span>
                        </span>
                    </h1>
                </>
            }
        >
            <Image
                src={`/screen.jpg`}
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto h-full rounded-2xl object-cover object-top-left"
                draggable={false}
            />
        </ContainerScroll>
    );
}
