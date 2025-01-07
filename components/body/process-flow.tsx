import { MessageCircle, ShoppingBag, Truck, Headphones} from 'lucide-react'
import { Card3d } from './card3d'

const steps = [
    {
      icon: MessageCircle,
      label: "Kết nối",
      description: "Ally AI tương tác tự nhiên với khách hàng qua tin nhắn hoặc email."
    },
    {
      icon: ShoppingBag,
      label: "Tư vấn",
      description: "Gợi ý sản phẩm phù hợp, thúc đẩy up-sale và cross-sale."
    },
    {
      icon: Truck,
      label: "Xử lý",
      description: "Tạo đơn và đẩy thông tin qua nền tảng vận chuyển hoặc TMĐT."
    },
    {
      icon: Headphones,
      label: "Chăm sóc",
      description: "Theo dõi đơn hàng, thu thập phản hồi và giải quyết khiếu nại nếu cần."
    }
  ]
  
export const ProcessFlow = () => {
    return (
      <div>
        <h1 className="w-full text-3xl font-bold mb-12 text-center">
          Ally AI Hoạt Động Như Thế Nào?
        </h1>
        
        <div className="relative w-full mx-auto">
          <div className="w-full flex flex-wrap justify-center gap-8 md:gap-x-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card3d 
                  icon={step.icon}
                  title={step.label}
                  detail={step.description}/>
              </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }