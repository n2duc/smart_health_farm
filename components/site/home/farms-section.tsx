import { Leaf } from "lucide-react";
import SectionHeading from "../section-heading";
import SectionWrapper from "../section-wrapper";
import { FarmItem } from "@/types/farm";
import { FarmCard } from "@/components/common";

const farmsData: FarmItem[] = [
  {
    id: "farm-001",
    name: "Trang trại Sạch Việt",
    location: "Đà Lạt, Lâm Đồng",
    establishedYear: 2019,
    description: "Chuyên cung cấp rau lá xanh tươi ngon với quy trình từ gieo trồng đến thu hoạch được kiểm soát chặt chẽ.",
    rating: 4.7,
    farmerCount: 10,
    certifications: ["VietGAP", "ISO 22000"],
    mainProducts: ["Rau muống", "Rau dền", "Cải ngọt"],
    area: "13 hecta",
    media: {
      image: "/images/farm_item.webp",
      video: "/videos/farm-1.mp4"
    },
    href: "/farms/sach-viet"
  },
  {
    id: "farm-002",
    name: "Nông trại Hữu Cơ Đà Lạt",
    location: "Đà Lạt, Lâm Đồng",
    establishedYear: 2015,
    description: "Nông trại hữu cơ chuyên canh tác các loại rau củ quả theo phương pháp tự nhiên, không sử dụng hóa chất độc hại.",
    rating: 4.8,
    farmerCount: 15,
    certifications: ["Organic", "VietGAP", "GlobalGAP"],
    mainProducts: ["Cà chua", "Dưa chuột", "Ớt chuông"],
    area: "25 hecta",
    media: {
      image: "/images/farm_item.webp",
    },
    href: "/farms/huu-co-da-lat"
  },
  {
    id: "farm-003",
    name: "Trang trại Xanh Minh",
    location: "Đơn Dương, Lâm Đồng",
    establishedYear: 2020,
    description: "Trang trại áp dụng công nghệ cao trong sản xuất rau củ, đảm bảo chất lượng và an toàn thực phẩm.",
    rating: 4.6,
    farmerCount: 8,
    certifications: ["VietGAP", "HACCP"],
    mainProducts: ["Bắp cải", "Súp lơ", "Cà rốt"],
    area: "18 hecta",
    media: {
      image: "/images/farm_item.webp",
      video: "/videos/farm-3.mp4"
    },
    href: "/farms/xanh-minh"
  },
  {
    id: "farm-004",
    name: "Nông trại Thiên Nhiên",
    location: "Lạc Dương, Lâm Đồng",
    establishedYear: 2017,
    description: "Nông trại chuyên sản xuất các loại rau thơm và gia vị, phục vụ cho các nhà hàng và gia đình yêu thích ẩm thực tự nhiên.",
    rating: 4.9,
    farmerCount: 12,
    certifications: ["Organic", "VietGAP", "Fair Trade"],
    mainProducts: ["Húng quế", "Rau mùi", "Tía tô"],
    area: "8 hecta",
    media: {
      image: "/images/farm_item.webp",
    },
    href: "/farms/thien-nhien"
  }
];

export default function FarmsSection() {
  return (
    <SectionWrapper>
      <SectionHeading
        badge={<><Leaf className="mr-1" /> Minh bạch nguồn gốc</>}
        heading="Kết nối trực tiếp với trang trại"
        subHeading="Khám phá hành trình từ trang trại đến bàn ăn. Mỗi sản phẩm đều có mã QR để truy xuất nguồn gốc rõ ràng."
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {farmsData.map((farm) => (
          <FarmCard key={farm.id} farm={farm} />
        ))}
      </div>
      <div className="flex items-center p-8 bg-accent gap-20 w-fit mx-auto">
        <div className="text-center space-y-2 min-w-[160px]">
          <h3 className="text-2xl font-bold">40+</h3>
          <p className="text-sm text-muted-foreground">Hecta canh tác</p>
        </div>
        <div className="text-center space-y-2 min-w-[160px]">
          <h3 className="text-2xl font-bold">100%</h3>
          <p className="text-sm text-muted-foreground">Rau sạch hữu cơ</p>
        </div>
        <div className="text-center space-y-2 min-w-[160px]">
          <h3 className="text-2xl font-bold">30+</h3>
          <p className="text-sm text-muted-foreground">Nông dân đối tác</p>
        </div>
      </div>
    </SectionWrapper>
  )
}
