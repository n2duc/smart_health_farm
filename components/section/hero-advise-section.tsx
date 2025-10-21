import { Brain, Heart, Sparkles, Users } from "lucide-react";
import { SectionHeading, SectionWrapper } from "../site";
import { FeatureCard } from "../common";

const recommendationsData = [
  {
    icon: Brain,
    title: 'Gợi ý thông minh',
    description: 'AI phân tích thực phẩm trong tủ lạnh và đề xuất rau củ phù hợp cho bữa ăn của bạn.',
    list: [
      'Phân tích thành phần dinh dưỡng',
      'Gợi ý công thức nấu ăn',
      'Giảm lãng phí thực phẩm'
    ],
  },
  {
    icon: Heart,
    title: 'Tư vấn sức khỏe AI',
    description: 'Chatbot AI tư vấn rau củ phù hợp với tình trạng sức khỏe và mục tiêu dinh dưỡng.',
    list: [
      'Tư vấn theo tình trạng sức khỏe',
      'Cập nhật dữ liệu dinh dưỡng',
      'Lời khuyên từ chuyên gia'
    ],
  },
  {
    icon: Users,
    title: 'Tư vấn sức khỏe nhóm',
    description: 'AI tư vấn rau củ phù hợp cho nhóm đối tượng với tình trạng sức khỏe và mục tiêu dinh dưỡng.',
    list: [
      'Tư vấn theo đối tượng',
      'Cập nhật dữ liệu dinh dưỡng',
      'Lời khuyên từ chuyên gia'
    ],
  }
]

export default function HeroAdviseSection() {
  return (
    <SectionWrapper>
      <SectionHeading
        badge={
          <>
            <Sparkles className="mr-1" />
            Tư vấn sức khỏe AI
          </>
        }
        heading="Tư vấn dinh dưỡng thông minh"
        subHeading="Nhận lời khuyên cá nhân hóa về rau củ phù hợp với tình trạng sức khỏe của bạn từ AI và chuyên gia dinh dưỡng"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendationsData.map((item) => (
          <FeatureCard key={item.title} feature={item} />
        ))}
      </div>
    </SectionWrapper>
  )
}
