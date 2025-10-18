export interface ProductItem {
  id: string;
  image: string;
  name: string;
  farms: string;
  price: number;
  weight: number;
  originalPrice?: number;
  discount?: boolean;
  rating: number;
  reviewsAmount: number;
  qrcode: string;
  harvestTime?: string;
}