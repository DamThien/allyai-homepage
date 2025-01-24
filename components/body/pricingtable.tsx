import { useEffect, useState } from "react"
import { Crown } from 'lucide-react'
import { CardHeader, Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const PricingTable = () => {
    const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly")
  
    const plans = [
      {
        name: "Basic",
        priceMonthly: "499.000 đ/ tháng",
        priceYearly: "4.788.000 đ/ năm",
        features: [
          "1,000,000 credit",
          "Hỗ trợ kỹ thuật: Document",
          "Dữ liệu lưu trữ: 1GB",
          "Nhật ký lịch sử: 3 tháng",
          "Số lượng AI tạo ra: 3",
          "Số lượng page tích hợp: 1",
          "Số lượng phần mềm CRM tích hợp: không hỗ trợ",
          "Chi phí khởi tạo: Miễn phí"
        ],
        buttonText: "Chọn gói",
        color: "#c0d4ec"
      },
      {
        name: "Advance",
        priceMonthly: "1.999.000 đ/ tháng",
        priceYearly: "19.188.000 đ/ năm",
        features: [
          "5,000,000 credit",
          "Hỗ trợ kỹ thuật: Video, Document, Google Meet",
          "Dữ liệu lưu trữ: 10GB",
          "Nhật ký lịch sử: Không giới hạn",
          "Số lượng AI tạo ra: Không giới hạn",
          "Số lượng page tích hợp: 10",
          "Số lượng phần mềm CRM tích hợp: 1",
          "Chi phí khởi tạo: Miễn phí"
        ],
        buttonText: "Chọn gói",
        color: "#c1f0e5"
      },
      {
        name: "Customs",
        priceMonthly: "Liên hệ",
        priceYearly: "Liên hệ",
        features: [
          "Credit: Không giới hạn",
          "Hỗ trợ kỹ thuật qua đội ngũ chuyên gia 24/7",
          "Dữ liệu lưu trữ: Tùy chỉnh theo nhu cầu",
          "Nhật ký lịch sử: Không giới hạn",
          "Số lượng AI tạo ra: Không giới hạn",
          "Số lượng page tích hợp: Không giới hạn",
          "Số lượng phần mềm CRM tích hợp: Tùy chỉnh theo yêu cầu",
          "Tích hợp thêm các hệ thống quản lý doanh nghiệp (ERP, HRM, v.v.)",
          "Chi phí khởi tạo: Thỏa thuận"
        ],
        extraFeatures: [
          "Quyền lợi đặc biệt: Giải pháp tùy chỉnh theo nhu cầu doanh nghiệp"
        ],
        buttonText: "Liên hệ ngay",
        color: "#66e4dd"
      }
    ];

  const [isShaking, setIsShaking] = useState(false)

  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 1000) // Stop shaking after 1 second
    }, 2000) // Trigger shake every 5 seconds

    return () => clearInterval(shakeInterval)
  }, [])

    return (
      <div id="pricing-table" className="flex flex-col px-4 w-full py-8 bg-white mt-12 item-center">
        <div className="text-center mb-12">
          <h1 className="w-full text-4xl font-bold text-center">Bảng giá</h1>
          <div className="mt-6 inline-flex items-center rounded-full border p-1 bg-background">
            <button
              onClick={() => setBillingInterval("monthly")}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                billingInterval === "monthly" ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              Tháng
            </button>
            <button
              onClick={() => setBillingInterval("yearly")}
              className={`rounded-full px-4 py-2 text-sm transition-colors relative ${
                billingInterval === "yearly" ? "bg-primary text-primary-foreground" : ""
              }`}
            >
              Năm
            <span className={`absolute -top-2 left-[100%] transition-all -translate-x-1/2 px-2 py-0.5 text-xs font-semibold bg-red-500 text-white rounded-full shadow-sm ${
            isShaking ? "animate-shake scale-[200%]" : "scale-100"
          }`}>
              -5%
            </span>
            </button>
          </div>
        </div>
  
        <div className="container self-center grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="relative flex flex-col border-[1px]"
              style={{
                background: `linear-gradient(145deg, ${plan.color}40, ${plan.color}60)`,
                borderColor: plan.color
              }}
            >
              <CardHeader className="pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold">{plan.name}</h3>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-bold">{billingInterval === "monthly" ? plan.priceMonthly : plan.priceYearly}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <Button 
                  className="w-full mt-4 mb-6"
                  variant={plan.name === "FREE" ? "secondary" : "default"}
                  style={{
                    backgroundColor: plan.color,
                    color: "#000000",
                    opacity: 0.9
                  }}
                >
                  {plan.buttonText}
                </Button>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="h-4 w-4 mr-2 text-green-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                {plan.extraFeatures && (
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="h-4 w-4" />
                      <span className="font-medium">Everything in {plan.name === "ENTRY" ? "Free" : "Entry"}, plus</span>
                    </div>
                    <ul className="space-y-2">
                      {plan.extraFeatures.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <svg
                            className="h-4 w-4 mr-2 text-green-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }