
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export const Planets = () => {
    const planetRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('translate-x-[20%]', 'opacity-0', 'overflow-hidden')
                    entry.target.classList.add('translate-x-[0%]', 'opacity-1')
                }
            },
            { threshold: 0.6 }
        )

        const currentPlanetRef = planetRef.current;

        if (currentPlanetRef) {
            observer.observe(currentPlanetRef)
        }

        return () => {
            if (currentPlanetRef) {
                observer.unobserve(currentPlanetRef)
            }
        }
    }, [])
    useEffect(() => {
        const style = document.createElement('style')
        style.textContent = `
            @keyframes rot-inner {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            @keyframes rot-middle {
                from { transform: rotate(0deg); }
                to { transform: rotate(-360deg); }
            }
            @keyframes rot-outer {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            .orbit:hover {
                animation-play-state: paused;
            }
        `
        document.head.appendChild(style)
        return () => {
            document.head.removeChild(style)
        }
    }, [])

    return (
        <div ref={planetRef} className="transition-all duration-1000 lg:grid-cols-1 opacity-0 translate-x-[20%] overflow-hidden">
            <div className="flex justify-center items-center">
                <div className="relative w-full max-w-[620px] h-auto aspect-square bg-radial-black rounded-full">
                    {/* Orbit paths */}
                    <div className="absolute top-1/2 left-1/2 w-[50%] h-[50%] sm:w-[300px] sm:h-[300px] rounded-full border border-gray-400 opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-[75%] h-[75%] sm:w-[450px] sm:h-[450px] rounded-full border border-gray-400 opacity-45 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full border border-gray-400 opacity-40 transform -translate-x-1/2 -translate-y-1/2"></div>

                    {/* Inner Orbit */}
                    <div className="absolute top-1/4 left-1/4 w-[50%] sm:w-[300px] h-[50%] sm:h-[300px] rounded-full orbit" style={{ animation: 'rot-inner 20s infinite linear' }}>
                        <div className="absolute top-0 left-1/2 w-[40px] sm:w-[60px] h-[40px] sm:h-[60px] rounded-full bg-white text-center leading-[40px] text-xs text-white transform -translate-x-1/2 -translate-y-1/2">
                            <Image style={{ animation: 'rot-middle 20s infinite linear' }} className="orbit" src="/logo/messenger-logo.png" alt="Messenger Logo" width={200} height={200} />
                        </div>
                    <div className="absolute bottom-0 left-1/2 w-[40px] sm:w-[60px] h-[40px] sm:h-[60px] rounded-full bg-white text-center leading-[40px] text-xs text-white transform -translate-x-1/2 translate-y-1/2">
                        <Image style={{ animation: 'rot-middle 20s infinite linear' }} className="orbit" src="/logo/instagram-logo.svg" alt="Instagram Logo" width={200} height={200} />
                    </div>
                </div>

                {/* Middle Orbit */}
                <div className="absolute top-[12.5%] left-[12.5%] w-[75%] sm:w-[450px] h-[75%] sm:h-[450px] rounded-full orbit" style={{ animation: 'rot-middle 15s infinite linear' }}>
                    <div className="absolute top-0 left-1/2 w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] rounded-full bg-white text-center leading-[50px] text-sm text-white transform -translate-x-1/2 -translate-y-1/2">
                        <Image style={{ animation: 'rot-inner 15s infinite linear' }} className="orbit" src="/logo/gmail-logo.png" alt="Gmail Logo" width={200} height={200} />
                    </div>
                    <div className="absolute bottom-[30%] left-[4%] w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] rounded-full bg-white text-center leading-[50px] text-sm text-white transform -translate-x-1/2 translate-y-1/2">
                        <Image style={{ animation: 'rot-inner 15s infinite linear' }} className="orbit" src="/logo/zalo-logo.png" alt="Zalo Logo" width={200} height={200} />
                    </div>
                    <div className="absolute bottom-[18%] left-[97%] w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] rounded-full bg-white text-center leading-[50px] text-sm text-white transform -translate-x-1/2 -translate-y-1/2">
                        <Image style={{ animation: 'rot-inner 15s infinite linear' }} className="orbit" src="/logo/facebook-logo.png" alt="Facebook Logo" width={200} height={200} />
                    </div>
                </div>

                {/* Outer Orbit */}
                <div className="absolute w-full h-full rounded-full orbit" style={{ animation: 'rot-outer 30s infinite linear' }}>
                    <div className="absolute top-0 left-1/2 w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] rounded-full bg-white text-center leading-[60px] text-sm text-white transform -translate-x-1/2 -translate-y-1/2">
                        <Image style={{ animation: 'rot-middle 30s infinite linear' }} className="orbit" src="/logo/shopee-logo.png" alt="Shopee Logo" width={250} height={250} />
                    </div>
                    <div className="absolute bottom-0 left-1/2 w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] rounded-full bg-white text-center leading-[60px] text-sm text-white transform -translate-x-1/2 translate-y-1/2">
                        <Image style={{ animation: 'rot-middle 30s infinite linear' }} className="orbit" src="/logo/tiktok-shop-logo.webp" alt="Tiktok Shop Logo" width={200} height={200} />
                    </div>
                    <div className="absolute left-[100%] top-1/2 w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] rounded-full bg-white text-center leading-[60px] text-sm text-white transform -translate-x-1/2 -translate-y-1/2">
                        <Image style={{ animation: 'rot-middle 30s infinite linear' }} className="orbit" src="/logo/whatsapp-logo.png" alt="Whats app Logo" width={200} height={200} />
                    </div>
                    <div className="absolute left-0 bottom-1/2 w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] rounded-full bg-white text-center leading-[60px] text-sm text-white transform -translate-x-1/2 translate-y-1/2">
                        <Image style={{ animation: 'rot-middle 30s infinite linear' }} className="orbit rounded-full" src="/logo/taobao-logo.png" alt="Taobao Logo" width={200} height={200} />
                    </div>
                </div>
                
                {/* Sun */}
                <div className="absolute flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center leading-[80px] sm:leading-[100px] text-lg sm:text-xl font-bold text-white">
                    <Image src="/logo/Black.svg" alt="Black Logo" width={150} height={150} className="z-3"/>
                </div>
            </div>
        </div>
        </div>
    )
}

