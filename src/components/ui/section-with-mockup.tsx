'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

const SectionWithMockup: React.FC = () => {
    const title = 'Quản lý tòa nhà thông minh trên một màn hình trực quan';
    const description =
        'Theo dõi vận hành, cư dân và các tác vụ hàng ngày trong một giao diện tập trung, rõ ràng và dễ kiểm soát cho ban quản lý.';
    const primaryImageSrc = '/image3.png';
    const secondaryImageSrc = '/image8.png';
    const reverseLayout = false;

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: 'easeOut' },
        },
    };

    const layoutClasses = reverseLayout
        ? 'md:grid-cols-2 md:grid-flow-col-dense'
        : 'md:grid-cols-2';

    const textOrderClass = reverseLayout ? 'md:col-start-2' : '';
    const imageOrderClass = reverseLayout ? 'md:col-start-1' : '';

    return (
        <section className="relative overflow-visible bg-white py-16 md:py-24 dark:bg-black">
            <div className="relative z-10 container mx-auto w-full max-w-305 px-6 md:px-10">
                <motion.div
                    className={`grid w-full grid-cols-1 items-center gap-16 md:gap-8 ${layoutClasses}`}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Text Content */}
                    <motion.div
                        className={`mx-auto mt-10 flex max-w-136.5 flex-col items-start gap-4 md:mx-0 md:mt-0 ${textOrderClass}`}
                        variants={itemVariants}
                    >
                        <div className="space-y-2 md:space-y-1">
                            <h2 className="text-3xl leading-tight font-semibold text-gray-900 md:text-[40px] md:leading-13.25 dark:text-white">
                                {title}
                            </h2>
                        </div>

                        <p className="text-sm leading-6 text-gray-600 md:text-[15px] dark:text-[#868f97]">
                            {description}
                        </p>
                        {/* Optional: Add a button or link here */}
                        {/* <div>
                            <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md">Learn More</button>
                         </div> */}
                    </motion.div>

                    {/* App mockup/Image Content */}
                    <motion.div
                        className={`relative mx-auto mt-10 md:mt-0 ${imageOrderClass} w-full max-w-75 md:max-w-117.75`}
                        variants={itemVariants}
                    >
                        {/* Decorative Background Element */}
                        <motion.div
                            className={`absolute z-0 h-79.25 w-75 rounded-[32px] bg-gray-100 md:h-125 md:w-118 dark:bg-[#090909]`}
                            style={{
                                top: reverseLayout ? 'auto' : '10%',
                                bottom: reverseLayout ? '10%' : 'auto',
                                left: reverseLayout ? 'auto' : '-20%',
                                right: reverseLayout ? '-20%' : 'auto',
                                transform: reverseLayout
                                    ? 'translate(0, 0)'
                                    : 'translateY(10%)',
                                filter: 'blur(2px)',
                            }}
                            initial={{ y: reverseLayout ? 0 : 0 }}
                            whileInView={{ y: reverseLayout ? -20 : -30 }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div
                                className="relative h-full w-full rounded-[32px] bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${secondaryImageSrc})`,
                                }}
                            />
                        </motion.div>

                        {/* Main Mockup Card */}
                        <motion.div
                            className="relative z-10 h-101.25 w-full overflow-hidden rounded-[32px] border border-gray-200/70 bg-white/80 backdrop-blur-[15px] backdrop-brightness-100 md:h-159.25 dark:border-white/10 dark:bg-[#ffffff0a]"
                            initial={{ y: reverseLayout ? 0 : 0 }}
                            whileInView={{ y: reverseLayout ? 20 : 30 }}
                            transition={{
                                duration: 1.2,
                                ease: 'easeOut',
                                delay: 0.1,
                            }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="h-full p-0">
                                <div
                                    className="relative h-full"
                                    style={{
                                        backgroundSize: '100% 100%',
                                    }}
                                >
                                    {/* Primary Image */}
                                    <div
                                        className="h-full w-full bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url(${primaryImageSrc})`,
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative bottom gradient */}
            <div className="absolute bottom-0 left-0 z-0 h-px w-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(15,23,42,0.22)_0%,rgba(15,23,42,0)_100%)] dark:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0)_100%)]" />
        </section>
    );
};

export default SectionWithMockup;
