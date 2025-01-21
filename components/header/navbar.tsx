import Image from "next/image";
import { Menu } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { FC } from "react";

export const Navbar: FC = () => {
    const handleScrollToFeature = () => {
        if (typeof window !== "undefined") {
            const element = document.getElementById("features");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = "/";
            }
        }
    };

    const handleScrollToPricing = () => {
        if (typeof window !== "undefined") {
            const element = document.getElementById("pricing-table");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = "/";
            }
        }
    };

    const handleScrollToFAQ = () => {
        if (typeof window !== "undefined") {
            const element = document.getElementById("faq");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = "/";
            }
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const { hash } = window.location;
            const scrollToElement = (elementId: string) => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            };

            if (hash === "#pricing-table") {
                setTimeout(() => scrollToElement("pricing-table"), 700);
            } else if (hash === "#features") {
                setTimeout(() => scrollToElement("features"), 700);
            } else if (hash === "#faq") {
                setTimeout(() => scrollToElement("faq"), 700);
            }
        }
    }, []);

    return (
        <nav className="flex items-center justify-center">
            <div className="container self-center flex items-center justify-between py-4 gap-8">

                    <Link href="/" className="text-m text-black hover:text-gray-600 hover:underline">
            <Image
                className="mt-2"
                src="/logo/Black.svg"
                alt="Primary Logo"
                width={100}
                height={100}
            />
                    </Link>
            <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-6 whitespace-nowrap">
                    <Link href="/" className="text-m text-black hover:text-gray-600 hover:underline">
                        Trang chủ
                    </Link>
                    {/* Nút "Tính năng" */}
                    <button
                        onClick={handleScrollToFeature}
                        className="text-m text-black hover:text-gray-600 hover:underline"
                    >
                        Tính năng
                    </button>
                    {/* Nút "Bảng giá" */}
                    <button
                        onClick={handleScrollToPricing}
                        className="text-m text-black hover:text-gray-600 hover:underline"
                    >
                        Bảng giá
                    </button>
                    <button
                        onClick={handleScrollToFAQ}
                        className="text-m text-black hover:text-gray-600 hover:underline"
                    >
                        Câu hỏi thường gặp
                    </button>
                    <Button className="bg-[#7C3AED] hover:bg-[#6D28D9]">
                        <Link href={"https://dev.allyai.ai/vi/sign-up"}>
                            Đăng ký dùng thử
                        </Link>
                    </Button>
                </div>
            </div>

            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild className="md:hidden">
                    <Button variant="outline" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                        <Link href="/">Trang chủ</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/">Tính năng</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <button onClick={handleScrollToFeature}>Tính năng</button>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <button onClick={handleScrollToPricing}>Bảng giá</button>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <button onClick={handleScrollToFAQ}>Câu hỏi thường gặp</button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white">
                            Đăng ký dùng thử
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        </nav>
    );
};
