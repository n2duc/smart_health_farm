import type { ProductItem } from '@/types/product';
import { Button } from '../ui/button';
import { Heart, MapPin, QrCode, Star } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '../ui/badge';

export default function ProductCard({ product }: { product: ProductItem }) {
  return (
    <div className='border group'>
      <div className='overflow-hidden relative w-full max-h-[260px]'>
        <Image src={product.image} alt={product.name} width={300} height={260} className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300' />
        {product.discount && <Badge variant="secondary" className='absolute top-3 left-3'>Giảm giá</Badge>}
        <Button variant="outline" className='absolute right-3 top-3'><Heart className='size-4' /></Button>
        {product.harvestTime && <Badge variant="secondary" className='absolute bottom-3 left-3'>{product.harvestTime}</Badge>}
      </div>
      <div className='p-4 flex flex-col gap-5'>
        <div className='space-y-2'>
          <h3 className='text-lg font-semibold'>{product.name}</h3>
          <div className='flex items-center gap-1 text-sm text-muted-foreground'>
            <MapPin className='size-3' />
            <span>{product.farms}</span>
          </div>
          <div className='flex items-center gap-2 text-sm font-medium'>
            <Star className='size-4 fill-yellow-500 text-yellow-500' />
            <span>{product.rating}</span>
            <span>({product.reviewsAmount})</span>
            <span>{product.weight}g</span>
          </div>
          <div className='space-x-2'>
            <span className='text-lg font-bold text-primary'>{product.price}đ</span>
            <span className='text-muted-foreground text-sm line-through'>{product.originalPrice}đ</span>
          </div>
          <div className='flex items-center justify-between text-sm text-muted-foreground'>
            <span>Truy xuất nguồn gốc</span>
            <Button variant="ghost" size="icon-sm"><QrCode className='size-4' /></Button>
          </div>
        </div>
        <Button>Thêm vào giỏ</Button>
      </div>
    </div>
  )
}
