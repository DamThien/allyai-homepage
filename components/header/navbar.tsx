import Image from "next/image";
import { Menu } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from "next/link";
import { Button } from "../ui/button";
export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4 md:mx-20 gap-8">
            <Image className="mt-2" src="/logo/Black.svg" alt="Primary Logo" width={100} height={100} />
            <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-6 whitespace-nowrap">
                    <Link href="/" className="text-m text-black hover:text-gray-600 hover:underline">
                        Trang chủ
                    </Link>
                    <Link href="/" className="text-m text-black hover:text-gray-600 hover:underline">
                        Tính năng
                    </Link>
                    <Link href="/" className="text-m text-black hover:text-gray-600 hover:underline">
                        Bảng giá
                    </Link>
                    <Link href="/" className="text-m text-black hover:text-gray-600 hover:underline">
                        Câu hỏi thường gặp
                    </Link>
                    <Button className="bg-[#7C3AED] hover:bg-[#6D28D9]">
                        Đăng ký dùng thử
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
                        <Link href="/">Bảng giá</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/">Câu hỏi thường gặp</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white">
                            Đăng ký dùng thử
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    )
}