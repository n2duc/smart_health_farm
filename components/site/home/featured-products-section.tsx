import { ProductItem } from "@/types/product"
import SectionWrapper from "../section-wrapper"
import SectionHeading from "../section-heading"
import { ProductCard } from "@/components/common"
import { Button } from "@/components/ui/button"

const products: ProductItem[] = [
  {
    id: '1',
    image: '/images/product_item.webp',
    name: 'Rau củ tươi',
    farms: 'Trang trại ABC',
    price: 100000,
    originalPrice: 120000,
    weight: 100,
    rating: 4.5,
    reviewsAmount: 100,
    qrcode: '1234567890',
    discount: true,
    harvestTime: 'Thu hoạch 2 giờ trước',
  },
  {
    id: '2',
    image: '/images/product_item.webp',
    name: 'Rau củ tươi',
    farms: 'Trang trại ABC',
    price: 100000,
    originalPrice: 120000,
    weight: 100,
    rating: 4.5,
    reviewsAmount: 100,
    qrcode: '1234567890',
    discount: true,
    harvestTime: 'Thu hoạch 2 giờ trước',
  },
  {
    id: '3',
    image: '/images/product_item.webp',
    name: 'Rau củ tươi',
    farms: 'Trang trại ABC',
    price: 100000,
    originalPrice: 120000,
    weight: 100,
    rating: 4.5,
    reviewsAmount: 100,
    qrcode: '1234567890',
    discount: true,
    harvestTime: 'Thu hoạch 2 giờ trước',
  },
  {
    id: '4',
    image: '/images/product_item.webp',
    name: 'Rau củ tươi',
    farms: 'Trang trại ABC',
    price: 100000,
    originalPrice: 120000,
    weight: 100,
    rating: 4.5,
    reviewsAmount: 100,
    qrcode: '1234567890',
    discount: true,
    harvestTime: 'Thu hoạch 2 giờ trước',
  }
]

export default function FeaturedProductsSection() {
  return (
    <SectionWrapper>
      <SectionHeading
        heading="Sản phẩm nổi bật"
        subHeading="Những loại rau củ tươi ngon nhất được thu hoạch từ các trang trại hữu cơ tại Đà Lạt"
      />
      <div className="flex flex-col gap-10 items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Button variant="outline" className="w-fit">Xem tất cả sản phẩm</Button>
      </div>
    </SectionWrapper>
  )
}
