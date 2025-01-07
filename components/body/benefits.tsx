import { Zap, BarChart3, TrendingUp, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Planets } from "./planets";
export const Benefits = () => {
    const features = [
      {
        title: "Tăng doanh số vượt trội",
        description: "Tối ưu hóa các cơ hội bán hàng qua việc tự động gợi ý sản phẩm và cá nhân hóa trải nghiệm khách hàng",
        icon: <TrendingUp className="w-6 h-6" />,
        color: 'purple',
      },
      {
        title: "Tiết kiệm thời gian và nguồn lực",
        description: "Loại bỏ công việc thủ công nhờ tự động hóa quy trình tạo đơn hàng và chăm sóc khách hàng",
        icon: <Zap className="w-6 h-6" />,
        color: 'blue',
      },
      {
        title: "Nâng cao trải nghiệm khách hàng",
        description: "Phản hồi nhanh, chuyên nghiệp và được cá nhân hóa",
        icon: <MessageCircle className="w-6 h-6" />,
        color: 'green',
      },
      {
        title: "Phân tích hiệu suất",
        description: "Hiểu rõ hơn về thị trường và khách hàng thông qua các báo cáo phân tích thông minh",
        icon: <BarChart3 className="w-6 h-6" />,
        color: 'yellow',
      },
    ]
    const colorMap = {
      purple: "bg-purple-400",
      blue: "bg-blue-400",
      green: "bg-green-400",
      yellow: "bg-yellow-400",
    }
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove('translate-x-[-10%]', 'opacity-0', 'overflow-hidden')
              entry.target.classList.add('translate-x-[0%]', 'opacity-1')
            }
          })
        },
        { threshold: 0.9 }
      )
  
      const cards = document.querySelectorAll('.observe-card')
      cards.forEach((card) => observer.observe(card))
  
      return () => {
        cards.forEach((card) => observer.unobserve(card))
      }
    }, [])
  
    return (
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 sm:col-start-1">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight">
                Tất cả những thứ bạn cần để ứng dụng AI cho doanh nghiệp
              </h2>
              <p className="text-lg text-muted-foreground">
                Mở khóa tiềm năng doanh nghiệp của bạn với trí tuệ nhân tạo và tự động hóa doanh nghiệp
              </p>
            </div>
  
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`observe-card h-full transition-all duration-700 min-w-60 p-4 rounded-xl shadow-lg ${colorMap[feature.color as keyof typeof colorMap]} border-none bg-opacity-30 backdrop-blur-md hover:bg-opacity-50 translate-x-[-10%] opacity-0 overflow-hidden`}
                >
                  <CardContent className="p-6 space-y-2">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Planets/>
        </div>
      </section>
    )
  }
  