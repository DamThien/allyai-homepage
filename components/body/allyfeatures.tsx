import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export const AllyFeatures = () => {
    const features = [
      {
        title: "Tạo đơn hàng tự động và đồng bộ hóa vận chuyển",
        items: [
          "Ally AI tự động tạo đơn hàng online ngay trong quá trình trò chuyện với khách hàng.",
          "Đẩy đơn qua các nền tảng vận chuyển hoặc thương mại điện tử như Shopee, Lazada, GHTK, GHN… chỉ với một cú click.",
        ],
      },
      {
        title: "Chủ động gợi ý sản phẩm",
        items: [
          "Gợi ý hình ảnh và video giới thiệu sản phẩm mới giúp tăng cơ hội up-sale và cross-sale.",
          "Tự động cá nhân hóa sản phẩm phù hợp với từng khách hàng dựa trên dữ liệu lịch sử mua sắm.",
        ],
      },
      {
        title: "Hiểu Insight Khách Hàng",
        items: [
          "Phân tích hành vi và nhu cầu của khách hàng trong thời gian thực.",
          "Đưa ra các báo cáo chi tiết về xu hướng mua sắm, nhu cầu sản phẩm, và điểm cần cải thiện.",
        ],
      },
      {
        title: "Hỗ trợ giải quyết khiếu nại thông minh",
        items: [
          "Xử lý các yêu cầu, khiếu nại của khách hàng với phản hồi nhanh chóng, lịch sự và chính xác.",
          "Tích hợp phản hồi qua email, chat trực tuyến và các nền tảng xã hội.",
        ],
      },
      {
        title: "Chăm sóc khách hàng 24/7",
        items: [
          "Tự động trả lời các câu hỏi thường gặp.",
          "Đảm bảo không bỏ lỡ bất kỳ cơ hội nào để kết nối với khách hàng.",
        ],
      },
      {
        title: "Đa nền tảng và tích hợp",
        items: [
          "Tích hợp liền mạch với các nền tảng như Facebook, Zalo, Instagram, Shopee, Lazada, và các hệ thống quản lý bán hàng (CRM) phổ biến.",
        ],
      },
    ]
  
    return (
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Tính năng nổi bật của Ally AI</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {features.map((feature, index) => (
            <Card key={index} className="h-full min-w-60 p-4 rounded-xl shadow-lg bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-50 transition-all duration-300 border-none">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    )
  }