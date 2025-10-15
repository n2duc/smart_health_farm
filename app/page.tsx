import { SectionHeading } from "@/components/site";
import SectionWrapper from "@/components/site/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <div>
      <SectionWrapper>
        <div className="flex items-center justify-between">
          <div className="space-y-8">
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
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeading
          heading="Sản phẩm nổi bật"
          subHeading="Những loại rau củ tươi ngon nhất được thu hoạch từ các trang trại hữu cơ tại Đà Lạt"
        />
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeading
          badge={<><Sparkles className="mr-1" /> Công nghệ AI tiên tiến</>}
          heading="Trải nghiệm mua sắm thông minh"
          subHeading="Công nghệ AI của GOWA FOOD giúp bạn lựa chọn rau củ phù hợp nhất, tối ưu hóa dinh dưỡng và tiết kiệm thời gian."
        />
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeading
          badge={<><Leaf className="mr-1" /> Minh bạch nguồn gốc</>}
          heading="Kết nối trực tiếp với trang trại"
          subHeading="Khám phá hành trình từ trang trại đến bàn ăn. Mỗi sản phẩm đều có mã QR để truy xuất nguồn gốc rõ ràng."
        />
      </SectionWrapper>
    </div>
  );
}
