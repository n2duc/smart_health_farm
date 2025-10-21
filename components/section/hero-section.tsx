import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/site";
import { Heart, Shield, Sparkles, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const heroData = [
  { label: 'Giao hàng nhanh', description: 'Trong 2 - 4 giờ', icon: Truck },
  { label: '100% sạch', description: 'Có chứng nhận', icon: Shield },
  { label: 'Tư vấn AI', description: 'Cá nhân hóa', icon: Heart }
]

export default function HeroSection() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between gap-16">
        <div className="space-y-8 flex-1">
          <div className="space-y-3">
            <Badge variant="secondary">
              <Sparkles className="mr-1" /> Công nghệ AI tiên tiến
            </Badge>
            <h1 className="text-6xl font-bold">Rau sạch từ trang trại đến bàn ăn</h1>
            <p className="text-lg font-medium">Gowa Food kết nối bạn trực tiếp với các trang trại sạch tại Đà Lạt. AI thông minh giúp gợi ý rau củ phù hợp với sức khỏe và sở thích của bạn.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button>Khám phá ngay</Button>
            <Button variant="outline">Tư vấn AI miễn phí</Button>
          </div>
          <div className="flex items-center gap-6">
            {heroData.map((item) => (
              <div className="flex flex-col xl:flex-row items-center gap-3" key={item.label}>
                <div className="size-10 bg-secondary flex items-center justify-center flex-shrink-0">
                  <item.icon className="size-5" />
                </div>
                <div className="text-center xl:text-start">
                  <h3 className="text-base font-semibold">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="overflow-hidden rounded-tr-4xl rounded-bl-4xl rounded-tl-[92px] rounded-br-[120px] w-full h-full">
            <Image src="/images/hero_vegetable.webp" alt="Farm Hero" width={500} height={500} className="w-full h-full object-cover" />
          </div>
          <div className="absolute bg-secondary py-3 px-5 -top-5 -right-5">
            40ha trang trại
          </div>
          <div className="absolute bg-secondary py-3 px-5 -bottom-5 right-1/5">
            AI thông minh
          </div>
          <div className="absolute bg-secondary py-3 px-5 top-12 left-12">
            Nhanh chóng
          </div>
          <div className="max-w-[300px] max-h-[220px] rounded-4xl overflow-hidden absolute -bottom-10 -left-10">
            <Image src="/images/hero_brocoli.webp" width={280} height={220} alt="Hero Brocoli" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}