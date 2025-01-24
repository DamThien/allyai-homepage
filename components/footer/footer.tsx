import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const LandingFormFooterComponent = () => {
    return (
        <footer className="bg-slate-950 text-white">
      {/* Hero CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Trợ lý AI bán hàng online tốt nhất cho bạn</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Hãy để Ally AI đồng hành cùng bạn trong hành trình chinh phục khách hàng và tối ưu hóa doanh số. Đăng ký ngay để dùng thử miễn phí!
        </p>
        <Link href={"https://dev.allyai.ai/vi/sign-up"}>
          <Button variant="outline" className="bg-transparent text-white hover:bg-white hover:text-slate-950">
            Dùng thử miễn phí!
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Navigation Grid */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo */}
            <div className="lg:col-span-1">
              <Link href="/" className="text-2xl font-bold">
                <Image className="mt-2" src="/logo/White.svg" alt="White Logo" width={150} height={150} />
              </Link>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Về Chúng Tôi</h3>
              <ul className="space-y-2">
                {['Ally AI là nền tảng AI hàng đầu để xây dựng agent AI bán hàng.'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shogun For */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Liên Hệ Chúng Tôi</h3>
              <ul className="space-y-2">
                {['hai@allyai.ai','0935 479 122'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Liên Kết Nhanh</h3>
              <ul className="space-y-2">
                {[
                  { text: 'Điều khoản', url: '/terms' },
                  { text: 'Chính sách', url: '/policy' }
                ].map((item) => (
                  <li key={item.text}>
                  <Link href={item.url} className="text-slate-300 hover:text-white transition-colors">
                    {item.text}
                  </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Theo dõi chúng tôi tại</h3>
              <ul className="flex items-center gap-2 flex-row">
                {/* {[{ name: 'Facebook', icon: Facebook }, { name: 'Instagram', icon: Instagram }].map((item) => (
                  <li key={item.name}>
                    <Link href="#" className="text-slate-300 hover:text-white transition-colors flex items-center">
                      <item.icon className="mr-3" color="white" />
                    </Link>
                  </li>
                ))} */}
                    <Link href="https://zalo.me/1663388634589919644" className="text-slate-300 hover:text-white transition-colors flex items-center">
                      <Image src="/logo/zalo-logo.png" alt="Zalo Logo" width={35} height={35} />
                    </Link>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
    );
}