'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface PolicySection {
  title: string
  content: string[]
}

const policyData: PolicySection[] = [
  {
    title: "1. Chính Sách Bảo Mật Thông Tin",
    content: [
      "Dữ liệu được mã hóa và lưu trữ trên hệ thống bảo mật cao cấp.",
      "Không chia sẻ thông tin khách hàng với bên thứ ba nếu không có sự đồng ý trước.",
      "Khách hàng có quyền yêu cầu xóa dữ liệu cá nhân bất kỳ lúc nào."
    ]
  },
  {
    title: "2. Chính Sách Sử Dụng",
    content: [
      "Ally AI cung cấp các dịch vụ tự động hóa và chăm sóc khách hàng theo đúng thỏa thuận trong hợp đồng.",
      "Người dùng cần đảm bảo sử dụng nền tảng đúng mục đích, không gây gián đoạn hoặc làm hại đến hệ thống.",
      "Mọi hành vi vi phạm có thể dẫn đến việc chấm dứt quyền sử dụng."
    ]
  },
  {
    title: "3. Chính Sách Đổi Trả và Hoàn Tiền",
    content: [
      "Ally AI hỗ trợ chính sách hoàn tiền nếu dịch vụ không đáp ứng đúng như cam kết trong giai đoạn dùng thử.",
      "Trong trường hợp xảy ra sự cố hệ thống, khách hàng được hỗ trợ gia hạn thời gian sử dụng tương ứng."
    ]
  },
  {
    title: "4. Chính Sách Dùng Thử Miễn Phí",
    content: [
      "Khách hàng mới được trải nghiệm miễn phí trong 14 ngày với đầy đủ tính năng.",
      "Sau khi hết thời gian dùng thử, khách hàng có thể chọn các gói dịch vụ phù hợp để tiếp tục sử dụng."
    ]
  },
  {
    title: "5. Chính Sách Hỗ Trợ Kỹ Thuật",
    content: [
      "Ally AI cung cấp dịch vụ hỗ trợ 24/7 qua email, chat trực tuyến và hotline.",
      "Đội ngũ kỹ thuật luôn sẵn sàng xử lý mọi vấn đề trong vòng 4 giờ làm việc."
    ]
  },
  {
    title: "6. Chính Sách Nâng Cấp Dịch Vụ",
    content: [
      "Ally AI thường xuyên cập nhật và cải tiến tính năng để đáp ứng tốt hơn nhu cầu người dùng.",
      "Khách hàng sẽ nhận thông báo trước về bất kỳ thay đổi hoặc nâng cấp nào liên quan đến dịch vụ."
    ]
  },
  {
    title: "7. Chính Sách Đối Tác Tích Hợp",
    content: [
      "Ally AI hỗ trợ tích hợp với các nền tảng thương mại điện tử và vận chuyển phổ biến như Shopee, Lazada, GHN, GHTK...",
      "Cam kết hợp tác bền vững với các đối tác để đảm bảo tính ổn định và hiệu quả của hệ thống."
    ]
  },
  {
    title: "8. Liên Hệ và Phản Hồi",
    content: [
      "Ally AI luôn hoan nghênh mọi phản hồi từ khách hàng để cải thiện dịch vụ.",
      "Để gửi phản hồi hoặc thắc mắc, vui lòng liên hệ qua email: support@allyai.com hoặc hotline: 1900-1234-5678."
    ]
  }
]

export const AllyAIPolicy = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([])

  const toggleSection = (index: number) => {
    setExpandedSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Chính Sách Ally AI</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {policyData.map((section, index) => (
            <div key={index} className="border-t border-gray-200">
              <button
                onClick={() => toggleSection(index)}
                className="px-4 py-5 sm:px-6 w-full flex justify-between items-center hover:bg-gray-50 focus:outline-none"
              >
                <h3 className="text-lg leading-6 font-medium text-gray-900">{section.title}</h3>
                {expandedSections.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedSections.includes(index) && (
                <div className="px-4 py-5 sm:p-6">
                  <ul className="list-disc pl-5 space-y-2">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-base text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-600">
          Chúng tôi mong muốn mang lại trải nghiệm tốt nhất cho khách hàng và luôn đồng hành cùng bạn trên hành trình phát triển kinh doanh!
        </p>
      </div>
    </div>
  )
}

