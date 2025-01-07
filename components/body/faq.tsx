
import React, { useState } from "react";
import { PlusIcon, XIcon} from 'lucide-react'

const faqs = [
    {
      question: "Ally AI là gì?",
      answer:
        "Ally AI là nền tảng trợ lý bán hàng thông minh dành cho các nhà bán lẻ và doanh nghiệp thương mại điện tử, giúp chăm sóc khách hàng 24/7, tư vấn bán hàng, giải quyết khiếu nại và tối ưu hóa doanh số bán hàng qua các tính năng tự động.",
    },
    {
      question: "Ally AI hỗ trợ những tính năng gì?",
      answer:
        "Ally AI có các tính năng nổi bật như: Tạo đơn hàng tự động và đồng bộ hóa vận chuyển, gợi ý sản phẩm phù hợp, phân tích hành vi khách hàng, hỗ trợ giải quyết khiếu nại thông minh và chăm sóc khách hàng 24/7.",
    },
    {
      question: "Ally AI có tích hợp với các nền tảng nào?",
      answer:
        "Ally AI tích hợp với các nền tảng như Facebook, Zalo, Instagram, Shopee, Lazada và các hệ thống quản lý bán hàng (CRM) phổ biến, giúp bạn quản lý mọi hoạt động bán hàng và chăm sóc khách hàng trên một nền tảng duy nhất.",
    },
    {
      question: "Ally AI giúp tôi tăng trưởng doanh số như thế nào?",
      answer:
        "Ally AI giúp tối ưu hóa doanh số qua tính năng gợi ý sản phẩm tự động và cá nhân hóa trải nghiệm khách hàng, từ đó thúc đẩy các cơ hội up-sale và cross-sale.",
    },
    {
      question: "Ally AI có giúp tôi tiết kiệm thời gian không?",
      answer:
        "Có, Ally AI giúp tiết kiệm thời gian và nguồn lực nhờ tự động hóa quy trình tạo đơn hàng và chăm sóc khách hàng, từ đó giảm thiểu công việc thủ công và giúp bạn tập trung vào các hoạt động quan trọng khác.",
    },
  ];
  
 export  const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
      <div className=" flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl font-semibold mb-8 text-center">
            Câu Hỏi Thường Gặp
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index}
                  className="border-b border-gray-500 last:border-b-0 transition-all duration-400"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                  >
                    <span className="text-lg font-medium pr-8">
                      {faq.question}
                    </span>
                    <span className="text-gray flex-shrink-0">
                      {isOpen ? (
                        <XIcon className="w-5 h-5" />
                      ) : (
                        <PlusIcon className="w-5 h-5" />
                      )}
                    </span>
                  </button>
                  <div 
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="text-gray-500 pb-6">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }