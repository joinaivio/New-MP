export interface Service {
  name: string;
  price: string;
  duration: string;
}

export interface Barber {
  name: string;
  specialties: string;
  experience: string;
  imageUrl: string;
}

export interface Review {
  quote: string;
  name: string;
  rating: number;
  isLocalGuide?: boolean;
}