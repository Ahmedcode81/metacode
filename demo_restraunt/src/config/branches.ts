/**
 * BRANCHES DATA
 * Configurable branch list. Will be controlled by the
 * Management System in the future.
 */

export interface Branch {
  id: string;
  name: string;
  nameAr: string;
  address: string;
  addressAr: string;
  phone: string;
  openingHours: string;
  openingHoursAr: string;
  latitude: number;
  longitude: number;
  googleMapsUrl: string;
  image: string;
  featured?: boolean;
}

export const branches: Branch[] = [
  {
    id: 'downtown',
    name: 'Downtown',
    nameAr: 'وسط المدينة',
    address: '123 Main Street, Downtown District',
    addressAr: '١٢٣ الشارع الرئيسي، حي وسط المدينة',
    phone: '+1 234 567 8900',
    openingHours: '11:00 AM – 11:00 PM',
    openingHoursAr: '١١:٠٠ صباحاً – ١١:٠٠ مساءً',
    latitude: 40.7128,
    longitude: -74.0060,
    googleMapsUrl: 'https://maps.google.com/?q=40.7128,-74.0060',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: 'waterfront',
    name: 'Waterfront',
    nameAr: 'الواجهة البحرية',
    address: '456 Harbor Road, Waterfront District',
    addressAr: '٤٥٦ طريق الميناء، حي الواجهة البحرية',
    phone: '+1 234 567 8900',
    openingHours: '12:00 PM – 12:00 AM',
    openingHoursAr: '١٢:٠٠ ظهراً – ١٢:٠٠ منتصف الليل',
    latitude: 40.7580,
    longitude: -73.9855,
    googleMapsUrl: 'https://maps.google.com/?q=40.7580,-73.9855',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop',
    featured: true,
  },
  {
    id: 'airport',
    name: 'Airport',
    nameAr: 'المطار',
    address: '789 Airport Boulevard, Airport Terminal',
    addressAr: '٧٨٩ شارع المطار، محطة المطار',
    phone: '+1 234 567 8900',
    openingHours: '24/7',
    openingHoursAr: '٢٤/٧',
    latitude: 40.6413,
    longitude: -73.7781,
    googleMapsUrl: 'https://maps.google.com/?q=40.6413,-73.7781',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&h=600&fit=crop',
    featured: false,
  },
];

export default branches;
