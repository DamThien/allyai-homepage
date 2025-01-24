"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import {
  Building2,
  ShoppingCart,
  Plane,
  Heart,
  Utensils,
  Activity,
  Bot,
  Users,
  Eye,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "retail",
    icon: Building2,
    label: "Bán lẻ",
    agents: [
      {
        id: "product-genius",
        title: "AI Tư Vấn Sản Phẩm",
        description: "Tư vấn sản phẩm cá nhân hóa dựa trên sở thích và nhu cầu của khách hàng.",
        provider: "ProductGenius",
        tags: ["Tư vấn", "Cá nhân hóa"],
        metrics: { users: 145300, views: 678900, likes: 589 },
      },
      {
        id: "inventory-pro",
        title: "AI Quản Lý Kho Hàng",
        description: "Tối ưu hóa quản lý kho hàng, dự báo nhu cầu và tự động đặt hàng.",
        provider: "InventoryPro",
        tags: ["Quản lý kho", "Dự báo"],
        metrics: { users: 98700, views: 456200, likes: 412 },
      },
      {
        id: "retail-analytics",
        title: "AI Phân Tích Bán Lẻ",
        description: "Phân tích dữ liệu bán hàng, xu hướng khách hàng và hiệu suất cửa hàng.",
        provider: "RetailInsight",
        tags: ["Analytics", "Báo cáo"],
        metrics: { users: 76500, views: 345600, likes: 298 },
      },
      {
        id: "customer-loyalty",
        title: "AI Quản Lý Khách Hàng Thân Thiết",
        description: "Tự động hóa chương trình khách hàng thân thiết và cá nhân hóa ưu đãi.",
        provider: "LoyaltyMaster",
        tags: ["Khách hàng", "Ưu đãi"],
        metrics: { users: 112300, views: 523400, likes: 456 },
      },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    label: "Thương mại điện tử",
    agents: [
      {
        id: "ecom-assistant",
        title: "AI Hỗ Trợ Bán Hàng Online",
        description: "Tự động hóa chăm sóc khách hàng và tư vấn sản phẩm trực tuyến.",
        provider: "EcomGenius",
        tags: ["Chatbot", "Tư vấn"],
        metrics: { users: 234500, views: 890100, likes: 723 },
      },
      {
        id: "pricing-optimizer",
        title: "AI Tối Ưu Giá",
        description: "Phân tích thị trường và đề xuất giá cạnh tranh theo thời gian thực.",
        provider: "PriceWizard",
        tags: ["Định giá", "Analytics"],
        metrics: { users: 89400, views: 423700, likes: 367 },
      },
      {
        id: "seo-master",
        title: "AI Tối Ưu SEO",
        description: "Phân tích và đề xuất cải thiện SEO cho sản phẩm và danh mục.",
        provider: "SEOPro",
        tags: ["SEO", "Content"],
        metrics: { users: 67800, views: 312500, likes: 289 },
      },
      {
        id: "fraud-detector",
        title: "AI Phát Hiện Gian Lận",
        description: "Tự động phát hiện và ngăn chặn các hoạt động gian lận trong giao dịch online.",
        provider: "FraudShield",
        tags: ["Bảo mật", "Phân tích"],
        metrics: { users: 56700, views: 278900, likes: 234 },
      },
    ],
  },
  {
    id: "travel",
    icon: Plane,
    label: "Du lịch",
    agents: [
      {
        id: "travel-planner",
        title: "AI Lập Kế Hoạch Du Lịch",
        description: "Tạo lịch trình du lịch cá nhân hóa dựa trên sở thích và ngân sách.",
        provider: "TravelMaster",
        tags: ["Lập kế hoạch", "Cá nhân hóa"],
        metrics: { users: 156700, views: 567800, likes: 489 },
      },
      {
        id: "hotel-recommender",
        title: "AI Đề Xuất Khách Sạn",
        description: "Phân tích và đề xuất khách sạn phù hợp dựa trên yêu cầu của khách hàng.",
        provider: "HotelGenius",
        tags: ["Đề xuất", "Đánh giá"],
        metrics: { users: 98400, views: 456700, likes: 378 },
      },
      {
        id: "flight-predictor",
        title: "AI Dự Đoán Giá Vé Máy Bay",
        description: "Dự đoán xu hướng giá vé và đề xuất thời điểm đặt vé tốt nhất.",
        provider: "FlightSaver",
        tags: ["Dự đoán", "Tiết kiệm"],
        metrics: { users: 78900, views: 345600, likes: 289 },
      },
      {
        id: "travel-translator",
        title: "AI Phiên Dịch Du Lịch",
        description: "Hỗ trợ dịch thuật đa ngôn ngữ theo ngữ cảnh du lịch.",
        provider: "LinguaTravel",
        tags: ["Ngôn ngữ", "Hỗ trợ"],
        metrics: { users: 123400, views: 567800, likes: 456 },
      },
    ],
  },
  {
    id: "healthcare",
    icon: Heart,
    label: "Y tế",
    agents: [
      {
        id: "health-assistant",
        title: "AI Tư Vấn Sức Khỏe",
        description: "Hỗ trợ tư vấn sức khỏe cơ bản và đặt lịch khám.",
        provider: "HealthGenius",
        tags: ["Tư vấn", "Đặt lịch"],
        metrics: { users: 189300, views: 678900, likes: 534 },
      },
      {
        id: "medical-imaging",
        title: "AI Phân Tích Hình Ảnh Y Tế",
        description: "Hỗ trợ bác sĩ trong việc phân tích và chẩn đoán qua hình ảnh y tế.",
        provider: "ImageDiagnost",
        tags: ["Chẩn đoán", "Hình ảnh"],
        metrics: { users: 45600, views: 234500, likes: 189 },
      },
      {
        id: "patient-monitor",
        title: "AI Giám Sát Bệnh Nhân",
        description: "Theo dõi và phân tích dữ liệu sức khỏe của bệnh nhân theo thời gian thực.",
        provider: "HealthTrack",
        tags: ["Giám sát", "Phân tích"],
        metrics: { users: 67800, views: 345600, likes: 278 },
      },
      {
        id: "drug-discovery",
        title: "AI Phát Triển Thuốc",
        description: "Hỗ trợ quá trình nghiên cứu và phát triển thuốc mới.",
        provider: "PharmAI",
        tags: ["Nghiên cứu", "Phát triển"],
        metrics: { users: 23400, views: 156700, likes: 145 },
      },
    ],
  },
  {
    id: "food",
    icon: Utensils,
    label: "Ẩm thực",
    agents: [
      {
        id: "menu-optimizer",
        title: "AI Tối Ưu Thực Đơn",
        description: "Phân tích và đề xuất thực đơn dựa trên xu hướng và phản hồi khách hàng.",
        provider: "MenuMaster",
        tags: ["Thực đơn", "Analytics"],
        metrics: { users: 78900, views: 345600, likes: 289 },
      },
      {
        id: "recipe-creator",
        title: "AI Sáng Tạo Công Thức",
        description: "Tạo ra các công thức nấu ăn mới dựa trên nguyên liệu và khẩu vị.",
        provider: "RecipeGenius",
        tags: ["Sáng tạo", "Công thức"],
        metrics: { users: 156700, views: 678900, likes: 534 },
      },
      {
        id: "food-pairing",
        title: "AI Kết Hợp Món Ăn",
        description: "Đề xuất các kết hợp món ăn và đồ uống hoàn hảo.",
        provider: "FlavorMatch",
        tags: ["Kết hợp", "Đề xuất"],
        metrics: { users: 89400, views: 423700, likes: 367 },
      },
      {
        id: "restaurant-optimizer",
        title: "AI Quản Lý Nhà Hàng",
        description: "Tối ưu hóa quy trình vận hành và quản lý nguồn lực nhà hàng.",
        provider: "RestaurantPro",
        tags: ["Quản lý", "Tối ưu hóa"],
        metrics: { users: 45600, views: 234500, likes: 189 },
      },
    ],
  },
  {
    id: "health",
    icon: Activity,
    label: "Thể dục & Sức khỏe",
    agents: [
      {
        id: "fitness-coach",
        title: "AI Huấn Luyện Viên Cá Nhân",
        description: "Tạo và điều chỉnh kế hoạch tập luyện theo mục tiêu cá nhân.",
        provider: "FitGenius",
        tags: ["Tập luyện", "Cá nhân hóa"],
        metrics: { users: 123400, views: 567800, likes: 456 },
      },
      {
        id: "nutrition-advisor",
        title: "AI Tư Vấn Dinh Dưỡng",
        description: "Phân tích chế độ ăn và đề xuất kế hoạch dinh dưỡng cá nhân.",
        provider: "NutriAI",
        tags: ["Dinh dưỡng", "Tư vấn"],
        metrics: { users: 98700, views: 456200, likes: 378 },
      },
      {
        id: "sleep-optimizer",
        title: "AI Tối Ưu Giấc Ngủ",
        description: "Phân tích và đề xuất cải thiện chất lượng giấc ngủ.",
        provider: "SleepWell",
        tags: ["Giấc ngủ", "Sức khỏe"],
        metrics: { users: 67800, views: 345600, likes: 289 },
      },
      {
        id: "mental-wellness",
        title: "AI Hỗ Trợ Sức Khỏe Tinh Thần",
        description: "Cung cấp các bài tập và kỹ thuật để cải thiện sức khỏe tinh thần.",
        provider: "MindfulAI",
        tags: ["Tinh thần", "Wellness"],
        metrics: { users: 89400, views: 423700, likes: 345 },
      },
    ],
  }
]

export const VerticalAIMarketplace = () => {
  const [primaryTab, setPrimaryTab] = useState("retail")

  const getActiveAgents = () => {
    const primaryCategory = categories.find((c) => c.id === primaryTab)
    // const secondaryCategory = secondaryCategories.find((c) => c.id === secondaryTab)

    return [...(primaryCategory?.agents || [])]
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight">AI Agent bạn có thể thích</h1>
        <p className="text-muted-foreground mt-2">Khám phá các AI Agent cho từng ngành hàng cụ thể</p>
      </div>

      <div className="space-y-4">
        <Tabs value={primaryTab} onValueChange={setPrimaryTab} className="w-full">
          <TabsList className="flex flex-wrap gap-2 h-auto bg-transparent">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 px-4 py-2 rounded-full data-[state=active]:border-primary data-[state=active]:bg-[#66e4dd]"
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>
        </Tabs>
      </div>


      {/* <Card className="relative p-6">
        <div
            className="absolute rounded-lg inset-0 bg-contain bg-center"
            style={{
                backgroundImage: `url("https://digital.fpt.com/wp-content/uploads/2020/03/shutterstock_694579021-copy1.jpg")`,
            }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/90 to-white/100"></div>
            <div class="relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Đẹp</h3>
                  <p className="text-xs">ăfaasgw</p>
                </div>
              </div>

              <p className="mt-4 text-sm">asdfgwergasfd asfk;aslkf kas';dkg' ;ask';gk ';aslkg á</p>

              <div className="flex gap-2 mt-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                    12034912
                  </span>
              </div>

              <div className="flex items-center gap-4 mt-4 text-sm">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>59K</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>78.2K</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>982</span>
                </div>
              </div>
              </div>
            </Card> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {getActiveAgents().map((agent) => (
            <Link key={agent.id} href={"https://dev.allyai.ai/vi/sign-up"}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#66e4dd]/30 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{agent.title}</h3>
                    <p className="text-xs text-muted-foreground">{agent.provider}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">{agent.description}</p>

                <div className="flex gap-2 mt-4">
                  {agent.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full bg-[#66e4dd]/30 text-primary text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{(agent.metrics.users / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{(agent.metrics.views / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{agent.metrics.likes}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
    </div>
  )
}

