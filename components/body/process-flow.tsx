import { Card } from "@/components/ui/card"
import { MessageCircle, ShoppingBag, Truck, Headphones } from 'lucide-react'

interface StepProps {
  icon: React.ReactNode
  title: string
  color: string
  description: React.ReactNode
}

function Step({ icon, title, color, description }: StepProps) {
  return (
    <div className="relative flex-1">
      <Card className={`h-full p-4 flex flex-col items-center justify-center gap-3 ${color} opacity-50 text-white hover:scale-105 hover:opacity-100 transition duration-300`}>
        <div className="rounded-full bg-white/20 p-3">
          {icon}
        </div>
        <h2>

          {title}
        </h2>
        <p className="text-center text-sm font-medium">
          {description}
        </p>
      </Card>
    </div>
  )
}

export const ProcessFlow = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Kết nối",
      description: "Ally AI tương tác tự nhiên với khách hàng qua tin nhắn hoặc email.",
      color: "bg-[#4CAF50]"
    },
    {
      icon: ShoppingBag,
      title: "Tư vấn",
      description: "Gợi ý sản phẩm phù hợp, thúc đẩy up-sale và cross-sale.",
      color: "bg-[#2196F3]"
    },
    {
      icon: Truck,
      title: "Xử lý",
      description: "Tạo đơn và đẩy thông tin qua nền tảng vận chuyển hoặc TMĐT.",
      color: "bg-[#4A148C]"
    },
    {
      icon: Headphones,
      title: "Chăm sóc",
      description: "Theo dõi đơn hàng, thu thập phản hồi và giải quyết khiếu nại nếu cần.",
      color: "bg-[#FF5252]"
    }
  ]
  return (
    <div className="container w-full mx-auto px-4">
      <h1 className="w-full text-4xl font-bold mb-12 text-center">
        Ally AI Hoạt Động Như Thế Nào?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {steps.map((step, index) => (
          <Step
            key={index}
            icon={<step.icon />}
            title={step.title}
            color={step.color}
            description={step.description}
          />
        ))}
      </div>
    </div>
  )
}