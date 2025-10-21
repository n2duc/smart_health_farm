import { Brain, MessageCircle, QrCode, Sparkles, Star, TrendingUp } from "lucide-react";
import { SectionHeading, SectionWrapper } from "@/components/site";
import { FeatureCard } from "@/components/common";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const techData = [
  {
    icon: Brain,
    title: 'Gợi ý thông minh',
    description: 'AI phân tích thực phẩm trong tủ lạnh và đề xuất rau củ phù hợp cho bữa ăn của bạn.',
    list: [
      'Phân tích thành phần dinh dưỡng',
      'Gợi ý công thức nấu ăn',
      'Giảm lãng phí thực phẩm'
    ],
    href: '/recommendations',
  },
  {
    icon: MessageCircle,
    title: 'Tư vấn sức khỏe AI',
    description: 'Chatbot AI tư vấn rau củ phù hợp với tình trạng sức khỏe và mục tiêu dinh dưỡng.',
    list: [
      'Tư vấn theo tình trạng sức khỏe',
      'Cập nhật dữ liệu dinh dưỡng',
      'Lời khuyên từ chuyên gia'
    ],
    href: '/ai',
  },
  {
    icon: TrendingUp,
    title: 'Dự đoán nhu cầu',
    description: 'AI học thói quen tiêu dùng để dự đoán và đặt hàng tự động rau củ hàng tuần.',
    list: [
      'Học thói quen mua sắm',
      'Đặt hàng tự động',
      'Tối ưu hóa chi phí'
    ],
    href: '/ai',
  }
]

const featureData = [
  {
    icon: Star,
    title: 'Đánh giá & cải thiện',
    description: 'AI phân tích đánh giá và phản hồi để liên tục cải thiện chất lượng sản phẩm và dịch vụ.',
    label: 'Tìm hiểu thêm',
    href: '/',
  },
  {
    icon: QrCode,
    title: 'Truy xuất nguồn gốc',
    description: 'Mỗi sản phẩm có mã QR để xem thông tin trang trại, chứng nhận và ngày thu hoạch.',
    label: 'Quét mã QR',
    href: '/scan',
  }
]

export default function TechSection() {
  return (
    <SectionWrapper>
      <SectionHeading
        badge={<><Sparkles className="mr-1" /> Công nghệ AI tiên tiến</>}
        heading="Trải nghiệm mua sắm thông minh"
        subHeading="Công nghệ AI của GOWA FOOD giúp bạn lựa chọn rau củ phù hợp nhất, tối ưu hóa dinh dưỡng và tiết kiệm thời gian."
      />
      <div className="space-y-8">
        <div className="flex items-center gap-8">
          {techData.map((item) => (
            <FeatureCard key={item.title} feature={item} />
          ))} 
        </div>
        <div className="flex items-center gap-8">
          {featureData.map((item) => (
            <div className="border p-6 flex items-start gap-4" key={item.title}>
              <div className="flex items-center justify-center size-12 bg-secondary flex-shrink-0">
                <item.icon className="size-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-foreground text-sm">{item.description}</p>
                <Button variant="outline" asChild>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
