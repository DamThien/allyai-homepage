import { type LucideIcon } from 'lucide-react'

interface CardProps {
    icon: LucideIcon
    title: string
    detail: string
  }

  export const Card3d = ({ icon: Icon, title, detail }: CardProps) => {
    return (
        <div className="">
            <div className="e-card playing hover:scale-110 hover:rotate-3d">
                <div className="image"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="infotop flex items-center justify-center w-full h-full flex-col gap-2 p-8 transition duration-400">
                    <div className="flex justify-center items-center">
                        <Icon className="w-36 h-36 text-white"/>
                    </div>
                    <h2>{title}</h2>
                    <span className="overflow-hidden h-0 text-sm font-normal transition-all duration-500 ease-in-out opacity-0">{detail}</span>
                </div>
            </div>
            <style jsx>{`
                .e-card {
                    background: transparent;
                    box-shadow: 0px 8px 28px -9px rgba(0,0,0,0.45);
                    position: relative;
                    width: auto;
                    width: 240px;
                    height: 330px;
                    border-radius: 16px;
                    overflow: hidden;
                    transition: transform 0.5s, box-shadow 0.3s;
                }

                .wave {
                    position: absolute;
                    width: 540px;
                    height: 700px;
                    opacity: 0.6;
                    left: 0;
                    top: 0;
                    margin-left: -50%;
                    margin-top: -70%;
                    background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
                }

                .icon {
                    width: 3em;
                    margin-top: -1em;
                    padding-bottom: 1em;
                }

                .infotop {
                    text-align: center;
                    font-size: 20px;
                    position: absolute;
                    width: 100%;
                    left: 0;
                    right: 0;
                    color: rgb(255, 255, 255);
                    font-weight: 600;
                    transform: translateY(0px);
                    transition: opacity 0.4s, transform 0.4s;
                }

                .e-card:hover .infotop {
                    opacity: 1;
                    transform: translateY(-10px);
                }

                .infotop:hover span {
                    height: 60px;
                    transform: translateY(0) scale(1.1);
                    opacity: 1;
                    transition: height 0.4s ease, opacity 0.4s ease, transform 0.4s ease;
                }


                .wave:nth-child(2),
                .wave:nth-child(3) {
                    top: 210px;
                }

                .playing .wave {
                    border-radius: 40%;
                    animation: wave 3000ms infinite linear;
                }

                .wave {
                    border-radius: 40%;
                    animation: wave 55s infinite linear;
                }

                .playing .wave:nth-child(2) {
                    animation-duration: 4000ms;
                }

                .wave:nth-child(2) {
                    animation-duration: 50s;
                }

                .playing .wave:nth-child(3) {
                    animation-duration: 5000ms;
                }

                .wave:nth-child(3) {
                    animation-duration: 45s;
                }

                @keyframes wave {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                .e-card:before {
                    content: '';
                    position: absolute;
                    z-index: -1;
                    top: -16px;
                    right: -16px;
                    background: linear-gradient(135deg, #364a60, #384c6c);
                    height: 32px;
                    width: 32px;
                    border-radius: 32px;
                    transform: scale(1);
                    transform-origin: 50% 50%;
                    transition: transform 0.35s ease-out;
                }

                .e-card:hover:before {
                    transform: scale(28);
                }

                .e-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 255, 0.3);
                }

                .e-card:hover .wave {
                    animation: wave-hover 5s infinite linear;
                }

                @keyframes wave-hover {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

            `}</style>
        </div>
    )
}
