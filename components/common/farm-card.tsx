import { FarmItem } from "@/types/farm";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, Award, Dot, MapPin, Play, Users } from "lucide-react";
import { Badge } from "../ui/badge";

export default function FarmCard({ farm }: { farm: FarmItem }) {
  return (
    <div className='border group'>
      <div className='overflow-hidden relative w-full max-h-[260px]'>
        <Image src={farm.media.image} alt={farm.name} width={300} height={260} className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300' />
        <Button variant="outline" size="sm" className='absolute right-3 top-3'><Play className='size-4' /> Video</Button>
        {farm.area && <Badge variant="secondary" className='absolute bottom-3 left-3'>{farm.area}</Badge>}
      </div>
      <div className='p-4 flex flex-col gap-5'>
        <div className='space-y-2'>
          <h3 className='text-lg font-semibold'>{farm.name}</h3>
          <div className="flex items-center gap-1 text-sm text-foreground">
            <MapPin className='size-3' />
            <span>{farm.location}</span>
            <Dot className='size-4' />
            <span>{farm.establishedYear}</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-3">{farm.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Award className='size-4' />
              <span className="text-sm font-medium">{farm.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className='size-4' />
              <span className="text-sm font-medium">{farm.farmerCount} nông dân</span>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Chứng nhận</p>
            <div className="flex items-center flex-wrap gap-2">
              {farm.certifications.map((item) => <Badge variant="secondary" key={item}>{item}</Badge>)}
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Sản phẩm chính</p>
            <div className="flex items-center flex-wrap gap-2">
              {farm.mainProducts.map((item) => <Badge variant="outline" key={item}>{item}</Badge>)}
            </div>
          </div>
        </div>
        <Button>Xem chi tiết trang trại <ArrowRight className='size-4' /></Button>
      </div>
    </div>
  )
}
