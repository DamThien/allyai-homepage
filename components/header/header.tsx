import React from "react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { Chat } from "./chat";
import { Navbar } from "./navbar";

export const LandingFormHeaderComponent = () => {
    const gradientTextRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const element = gradientTextRef.current;
        if (!element) return;

        const gradients = [
            'linear-gradient(90deg, #60A5FA, #34D399)',
            'linear-gradient(90deg, #34D399, #60A5FA)',
        ];

        let progress = 0;
        let animationFrameId: number;
        const animate = () => {
            progress += 0.002; // Adjust this value to control animation speed
            if (progress >= 1) progress = 0;

            const index = Math.floor(progress * gradients.length);
            const nextIndex = (index + 1) % gradients.length;
            const interpolation = (progress * gradients.length) % 1;

            element.style.backgroundImage = `linear-gradient(90deg, 
                ${interpolateColor(gradients[index], gradients[nextIndex], interpolation)})`;

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    // Helper function to interpolate between two colors
    const interpolateColor = (gradient1: string, gradient2: string, progress: number) => {
        const color1 = gradient1.match(/#[0-9A-F]{6}/gi) || [];
        const color2 = gradient2.match(/#[0-9A-F]{6}/gi) || [];

        if (color1.length !== color2.length) return gradient1;

        return color1.map((c1, i) => {
            const c2 = color2[i];
            const r1 = parseInt(c1.slice(1, 3), 16);
            const g1 = parseInt(c1.slice(3, 5), 16);
            const b1 = parseInt(c1.slice(5, 7), 16);
            const r2 = parseInt(c2.slice(1, 3), 16);
            const g2 = parseInt(c2.slice(3, 5), 16);
            const b2 = parseInt(c2.slice(5, 7), 16);

            const r = Math.round(r1 + (r2 - r1) * progress);
            const g = Math.round(g1 + (g2 - g1) * progress);
            const b = Math.round(b1 + (b2 - b1) * progress);

            return `rgb(${r}, ${g}, ${b})`;
        }).join(', ');
    };

    return (
        <div className="w-full flex justify-center">
            <div className="container flex flex-col">
            <div className="w-full z-10">
                <Navbar />
            </div>
            <div className="mx-auto mt-32 pb-16 text-left z-10">
                <div className="grid lg:grid-cols-3 gap-10 items-center">
                    <div className="w-full lg:col-span-2">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                            Ally AI -{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-1000">
                                Trợ lý AI
                            </span>{' '}
                            Bán hàng online
                        </h1>
                        <p className="max-w-full mx-auto text-gray-600 font-bold pb-10">
                            Ally AI - Trợ lý bán hàng thông minh cho doanh nghiệp, nhà hàng và các shop online.
                            Hỗ trợ chăm sóc khách hàng 24/7, tư vấn bán hàng, xử lý khiếu nại nhanh chóng.
                            <br />Tích hợp đa kênh, giúp tăng trưởng doanh số vượt trội.
                        </p>
                        <div className="grid item-center sm:justify-center lg:justify-start sm:grid sm:grid-cols-2 gap-8">
                            <Button
                                className="px-6 py-6 text-xs uppercase tracking-widest font-bold text-black bg-white border-none rounded-[45px] shadow-md transition-all duration-300 ease-out hover:bg-[#6D28D9] hover:shadow-lg hover:text-white hover:-translate-y-1 active:-translate-y-[1px] focus:outline-none"
                            >
                                Tạo ngay trợ lý cho bạn
                            </Button>
                            <Button
                                className="px-6 py-6 text-xs uppercase tracking-widest font-bold text-black bg-white border-none rounded-[45px] shadow-md transition-all duration-300 ease-out hover:bg-[#6D28D9] hover:shadow-lg hover:text-white hover:-translate-y-1 active:-translate-y-[1px] focus:outline-none hover:shadow-[0_15px_20px_rgba(156, 93, 222, 0.7)]"
                            >
                                Liên hệ tư vấn
                            </Button>
                        </div>
                    </div>
                    {/* <ChatInterface /> */}
                    <Chat />
                </div>
            </div>
        </div>
            <style>
                {`
                    .header-container {
                        width: 100%;
                        height: 100%;
                        --s: 100px; /* control the size */
                        --c1: #f8b195;
                        --c2: #355c7d;

                        --_g: var(--c2) 6% 14%, var(--c1) 16% 24%, var(--c2) 26% 34%,
                            var(--c1) 36% 44%, var(--c2) 46% 54%, var(--c1) 56% 64%, var(--c2) 66% 74%,
                            var(--c1) 76% 84%, var(--c2) 86% 94%;
                        background: radial-gradient(
                            100% 100% at 100% 0,
                            var(--c1) 4%,
                            var(--_g),
                            #0008 96%,
                            #0000
                            ),
                            radial-gradient(
                                100% 100% at 0 100%,
                                #0000,
                                #0008 4%,
                                var(--_g),
                                var(--c1) 96%
                            )
                            var(--c1);
                        background-size: var(--s) var(--s);
                    }

                    .header-item {
                        position: absolute;
                        background-color: transparent;
                        width: calc(var(--i) * 5vmin);
                        aspect-ratio: 1;
                        border-radius: 50%;
                        border: .9vmin solid rgb(0, 200, 255);
                        transform-style: preserve-3d;
                        transform: rotateX(70deg) translateZ(50px);
                        animation: my-move 3s ease-in-out calc(var(--i) * 0.08s) infinite;
                        box-shadow: 0px 0px 15px rgb(124, 124, 124),
                        inset 0px 0px 15px rgb(124, 124, 124);
                    }

                    @keyframes my-move {
                        0%,
                        100% {
                            transform: rotateX(70deg) translateZ(50px) translateY(0px);
                            filter: hue-rotate(0deg);
                        }

                        50% {
                            transform: rotateX(70deg) translateZ(50px) translateY(-50vmin);
                            filter: hue-rotate(180deg);
                        }
                    }
                `}
            </style>
        </div>
    );
}
