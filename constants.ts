
import type { Service, Barber, Review } from './types';

export const BUSINESS_INFO = {
  name: "Master P Barbershop",
  slogan: "Prove Them Wrong",
  address: "88 Richards Drive, Halfway House, Midrand, 1685, Gauteng, South Africa",
  phone: "+27624813420",
  phoneDisplay: "+27 62 481 3420",
  email: "bookings@masterp.example.com", // Placeholder
  instagram: "https://www.instagram.com/masterpbarbershop/?hl=en",
  facebook: "https://www.facebook.com/masterpbarbershop/?hl=en",
  whatsapp: "https://wa.me/27624813420?text=Hi%20Master%20P%20Barbershop%2C%20I%E2%80%99d%20like%20to%20book%20a%20cut.",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Master+P+Barbershop+88+Richards+Drive+Midrand",
  googleMapsEmbed: "https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Master+P+Barbershop,88+Richards+Drive,Midrand,South+Africa" // TODO: Replace with actual Google Maps Embed API key
};

export const SERVICES_DATA: Service[] = [
  // TODO: Update prices
  { name: "Fade / Classic Cut", price: "R___", duration: "45–60 min" },
  { name: "Beard Trim & Line-Up", price: "R___", duration: "20–30 min" },
  { name: "Hot Towel Shave", price: "R___", duration: "30–40 min" },
  { name: "Kids Cut", price: "R___", duration: "30–40 min" },
  { name: "Colour / Enhancement", price: "R___", duration: "on consultation" },
];

export const WOMENS_SERVICES_DATA: Service[] = [
  // TODO: Update prices and durations
  { name: "Box Braids", price: "R___", duration: "duration: ___" },
  { name: "Knotless Braids", price: "R___", duration: "duration: ___" },
  { name: "Cornrows", price: "R___", duration: "duration: ___" },
  { name: "Loc Maintenance", price: "R___", duration: "duration: ___" },
  { name: "Silk Press", price: "R___", duration: "duration: ___" },
  { name: "Treatment / Deep Condition", price: "R___", duration: "duration: ___" },
  { name: "Colour (Consultation)", price: "R___", duration: "on consultation" },
];

export const GALLERY_IMAGES: string[] = [ 
  'https://picsum.photos/seed/gal1/800/600', 
  'https://picsum.photos/seed/gal2/800/600', 
  'https://picsum.photos/seed/gal3/800/600', 
  'https://picsum.photos/seed/gal4/800/600' 
];

export const BARBERS_DATA: Barber[] = [
  // TODO: Replace with actual barber details
  { name: "Master P", specialties: "Precision Fades, Beard Work", experience: "10+ years", imageUrl: 'https://picsum.photos/seed/barber1/400/500' },
  { name: "J-Fade", specialties: "Classic Cuts, Razor Art", experience: "7 years", imageUrl: 'https://picsum.photos/seed/barber2/400/500' },
  { name: "The Stylist", specialties: "Modern Styles, Colour", experience: "5 years", imageUrl: 'https://picsum.photos/seed/barber3/400/500' },
];

export const REVIEWS_DATA: Review[] = [
  // TODO: Parse and use actual client reviews when provided
  { quote: "Best fade I've ever had. The attention to detail is insane. Will be back for sure!", name: "Thabo M.", rating: 5 },
  { quote: "Clean shop, professional barbers, and a great atmosphere. Master P is a legend.", name: "David S.", rating: 5, isLocalGuide: true },
  { quote: "I bring my son here for his cuts. They are patient and always do a fantastic job.", name: "Priya K.", rating: 5 },
];

export const OPENING_HOURS = {
  "Tuesday": "9:00 AM - 6:00 PM",
  "Wednesday": "9:00 AM - 6:00 PM",
  "Thursday": "9:00 AM - 6:00 PM",
  "Friday": "9:00 AM - 6:00 PM",
  "Saturday": "9:00 AM - 6:00 PM",
  "Sunday": "9:00 AM - 4:00 PM",
  "Monday": "9:00 AM - 6:00 PM",
};
