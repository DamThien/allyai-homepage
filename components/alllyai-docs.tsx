'use client'

interface PolicySection {
  title: string
  content: string[]
}

const policyData: PolicySection[] = [
  {
    title: "1. Sự chấp nhận các điều khoản",
    content: [
      " Bằng cách truy cập và sử dụng các dịch vụ và nền tảng do Ally AI cung cấp, người dùng đang tham gia vào một thỏa thuận ràng buộc về mặt pháp lý dựa trên các Điều khoản và Điều kiện này. Nếu người dùng thấy các điều khoản này không phù hợp, họ được khuyên không nên sử dụng dịch vụ của chúng tôi."
    ]
  },
  {
    title: "2. Mô tả Dịch vụ",
    content: [
      " Ally AI chuyên tạo ra các giải pháp đào tạo được tăng cường bằng AI và gamification. Mục tiêu của chúng tôi là giúp các công ty xây dựng các học viện đào tạo nội bộ hiệu quả. Điều này bao gồm các công cụ phần mềm, nền tảng, nội dung và công nghệ liên quan để cung cấp trải nghiệm đào tạo."
    ]
  },
  {
    title: "3. Đăng ký",
    content: [
      "Người dùng muốn hưởng lợi từ các tính năng và dịch vụ cao cấp của Ally AI có thể cần trải qua một quy trình đăng ký. Điều này bao gồm việc cung cấp các thông tin cá nhân và nghề nghiệp cụ thể. Người dùng có trách nhiệm đảm bảo rằng thông tin này luôn chính xác, cập nhật và đầy đủ."
    ]
  },
  {
    title: "4. Trách nhiệm của người dùng",
    content: [
      "Sau khi đăng ký, người dùng sẽ có thông tin đăng nhập. Họ có trách nhiệm cho tất cả các hoạt động diễn ra dưới tài khoản của mình, bất kể hành động do họ hoặc người khác thực hiện. Việc chia sẻ quyền truy cập với người dùng không được ủy quyền là nghiêm cấm, và cần phải thực hiện các biện pháp để đảm bảo tính bảo mật của thông tin đăng nhập."
    ]
  },
  {
    title: "5. Quyền sở hữu trí tuệ",
    content: [
      " Ally AI là chủ sở hữu hoặc người sử dụng có giấy phép của tất cả nội dung, phần mềm và công nghệ độc quyền trên nền tảng của mình. Điều này bao gồm nhưng không giới hạn ở đồ họa, thiết kế, văn bản và logo. Việc sử dụng, sao chép hoặc phân phối không được phép là nghiêm cấm và có thể dẫn đến các hành động pháp lý."
    ]
  },
  {
    title: "6. Giới hạn trách nhiệm",
    content: [
      " Ally AI nỗ lực cung cấp các dịch vụ xuất sắc, nhưng trong các tình huống người dùng gặp phải sự gián đoạn, lỗi hoặc thiệt hại—dù trực tiếp, ngẫu nhiên hay hậu quả—trách nhiệm của Ally AI sẽ bị giới hạn theo quy định của pháp luật."
    ]
  }
]

export const AllyAIDocs = () => {

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Điều Khoản và Điều Kiện Sử Dụng</h1>
        <div className="overflow-hidden sm:rounded-lg">
          {policyData.map((section, index) => (
            <div key={index}>

                <h3 className="text-lg leading-6 font-medium text-gray-900">{section.title}</h3>

                <div className="px-4 py-5 sm:p-6">
                      <p className="text-base text-gray-700">{section.content}</p>
                </div>
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

