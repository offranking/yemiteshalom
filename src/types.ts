export interface MenuItem {
  id: string;
  name: string;
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Local Dishes' | 'Soups & Swallows' | 'Pan-African Delicacies' | 'Desserts' | 'Drinks' | 'Small Chops' | 'BBQ';
  description: string;
  priceNGN: number;
  priceUSD: number;
  image: string;
  dietaryBadges: string[]; // e.g. ["Spicy", "Chef Special", "Halal", "Vegetarian", "Gluten-Free"]
  servingsInfo: string;
  popular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  event: string;
  rating: number;
  comment: string;
  image: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Birthdays' | 'Corporate Events' | 'Food Presentation' | 'Kitchen' | 'Staff at Work';
  image: string;
  description: string;
}

export interface PricingPackage {
  id: string;
  name: string; // 'Basic' | 'Premium' | 'Luxury'
  tagline: string;
  pricePerGuestNGN: number;
  pricePerGuestUSD: number;
  minGuests: number;
  badge?: string;
  features: string[];
  recommendedFor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Booking & Deposit' | 'Menu & Customization' | 'Event Setup' | 'Dietary Requirements';
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  featuredImage: string;
  excerpt: string;
  content: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
}

export interface AwardItem {
  id: string;
  title: string;
  year: string;
  issuer: string;
  icon: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventTime: string;
  numberOfGuests: number;
  eventType: string;
  preferredMenuCategory: string;
  venueAddress: string;
  estimatedBudget: string;
  additionalNotes: string;
  selectedItems?: MenuItem[];
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}
