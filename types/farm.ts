export interface FarmItem {
  id: string;
  name: string;
  location: string;
  establishedYear: number;
  description: string;
  rating: number;
  farmerCount: number;
  certifications: string[];
  mainProducts: string[];
  area: string; // e.g., "13 hecta"
  media: {
    image: string;
    video?: string;
  };
  href: string;
}