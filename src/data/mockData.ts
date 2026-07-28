 // cSpell:ignore Shallom shallom Jollof Ofada Ayamase Asun Shaki Kpomo Ugu Semo Efo Riro Iru Ogbono Bitterleaf Ofe Onugbu Oha Nsala Anambra Uda Uziza Miyan Taushe Tuwo Gbegiri Ewedu Amala Elegusi Alasepo Ila Ogunfe Thieboudienne Akara Ogi Koko Bole Zobo Chapman Suya Yaji Edikang Ikong Ukazi Afang Efik Ibibio Calabar Akwu Banga Delta moin Egusi stockfish Waterleaf waterleaf Beletete Oburunbebe cocoyam Ogiri habaneros habanero panla Semovita Mosa Mocktails Mocktail serv beachside Folake Adebayo Ikeja Tunde Ogunleye Wosu Lekki Harcourt Newsu Babatunde Ikoyi Ikorodu Adefowope Odukoya microgreen Absolutely lkorodu Ogun Osun bento Amadi Adeleke Nwosu
 import { MenuItem, ServiceItem, Testimonial, GalleryItem, PricingPackage, FaqItem, BlogPost, TeamMember, AwardItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Local Dishes
  {
    id: 'menu-1',
    name: 'Smokey Party Jollof Rice',
    category: 'Local Dishes',
    description: 'Authentic firewood-infused Nigerian party Jollof rice served with fried plantain (Dodo), moin moin, and juicy peppered chicken or beef.',
    priceNGN: 8500,
    priceUSD: 3.0,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQalUWskyhch6qZLRQOaddI0Da-jFI3CgXpgch8RucBvg&s=10',
    dietaryBadges: ['Chef Special', 'Spicy', 'Popular'],
    servingsInfo: 'Individual / Bulk Catering available',
    popular: true
  },
  {
    id: 'menu-2',
    name: 'Ofada Rice & Ayamase Sauce',
    category: 'Local Dishes',
    description: 'Aromatic unpolished Ofada rice with rich green pepper Ayamase sauce, assorted meats (shaki, kpomo, beef), boiled eggs, and plantain.',
    priceNGN: 9500,
    priceUSD: 3.7,
    image: 'https://diahcuisineonline.co.uk/wp-content/uploads/2021/08/Ofada-Rice.jpg',
    dietaryBadges: ['Spicy', 'Chef Special'],
    servingsInfo: 'Per Plate / Buffet Serving',
    popular: true
  },

  // Soups & Swallows
  {
    id: 'soup-1',
    name: 'Egusi Soup',
    category: 'Soups & Swallows',
    description: 'Slow-cooked toasted melon seed soup with Ugu greens, crayfish, stockfish, dried catfish, and tender beef. Served with choice of Pounded Yam, Eba, or Semo.',
    priceNGN: 9500,
    priceUSD: 3.7,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTvwg6sCwH909NUrvBJLVUu1wmTnjd_jw7A2SCg8Kk9nJhRel1j_SGCiOW4yMrk8Eo7eBpOykTQUr9h6U30mh6KZHW8FmAYcCtmjUdCIvL5t1NJvNrTPM8r&usqp=CAc',
    dietaryBadges: ['Local Legend', 'Gluten-Free', 'Popular'],
    servingsInfo: 'Per Bowl / Event Catering',
    popular: true
  },
  {
    id: 'soup-2',
    name: 'Efo Riro',
    category: 'Soups & Swallows',
    description: 'Rich Yoruba spinach stew cooked with locust beans (Iru), palm oil, dried fish, shaki (tripe), and tender goat meat.',
    priceNGN: 8500,
    priceUSD: 3.7,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwXPLTDkk0bgeSeqIbx8T2sgsao1UAwyBvOgjJbVH2w&s=10',
    dietaryBadges: ['Authentic', 'Spicy', 'Popular'],
    servingsInfo: 'Per Bowl / Swallow Combo',
    popular: true
  },
  {
    id: 'soup-3',
    name: 'amala, ewedu, & gbegiri with Assorted Meat',
    category: 'Soups & Swallows',
    description: 'Fresh crunchy diced okra soup loaded with scotch bonnet peppers, palm oil, crab, prawns, smoked catfish, and cow skin (kpomo).',
    priceNGN: 8000,
    priceUSD: 4.0,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3JsbJp8MkMto-3OohnQ0_Ij00I9Uo86XD_aO6F3t3g&s=10',
    dietaryBadges: ['Seafood Special', 'Nutrient Rich'],
    servingsInfo: 'Per Portion'
  },
  {
    id: 'soup-4',
    name: 'Ogbono Soup (Rich Wild Mango Seed Soup)',
    category: 'Soups & Swallows',
    description: 'Silky draw Ogbono soup infused with bitterleaf, dried crayfish, smoked turkey, shaki, and tender beef.',
    priceNGN: 9000,
    priceUSD: 3.3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwhWw7ETMZ4HbFclNiLRy1qzBj3f9R0JgoSC_9lr2jA&s=10',
    dietaryBadges: ['Traditional', 'Comfort Food'],
    servingsInfo: 'Per Portion'
  },
  {
    id: 'soup-5',
    name: 'Fried Rice & chicken',
    category: 'Local Dishes',
    description: 'Nutrient-dense harvest of fresh fluted pumpkin leaves (Ugu) and soft waterleaf, cooked with dry prawns, stockfish, and beef.',
    priceNGN: 9000,
    priceUSD: 3.3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YaadT1eAdcJNHbQHPX_auMahYVZJp4zcX4tuvKzPqg&s=10',
    dietaryBadges: ['Nutrient Rich', 'Healthy Choice'],
    servingsInfo: 'Per Portion'
  },
  
  {
    id: 'soup-9',
    name: 'Bitterleaf Soup',
    category: 'Soups & Swallows',
    description: 'Thoroughly washed bitterleaf soup thickened with cocoyam paste, loaded with stockfish, dried fish, and tender beef chunks.',
    priceNGN: 5500,
    priceUSD: 3.7,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2B6cOozniXU1LaEWk0UwU3Au3ktkhEqV-kJxdIp3fg&s=10',
    dietaryBadges: ['Igbo Traditional', 'Herbal Heritage'],
    servingsInfo: 'Per Portion'
  },
  {
    id: 'White rice',
    name: 'White rice and stew',
    category: 'Soups & Swallows',
    description: 'Fiery oil-free light soup spiced with Uda, Uziza seeds, and yam paste thickener, served with fresh catfish and chicken.',
    priceNGN: 7000,
    priceUSD: 4.7,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeT-pi-YEOUh6dmJpy_rm7lQpdUOIE3-9yWlAzQ5JyQQ&s=10',
    dietaryBadges: ['Oil-Free', 'Spicy', 'Chef Special'],
    servingsInfo: 'Per Portion',
    popular: true
  },
  {
    id: 'soup-12',
    name: 'Beans & Plantain',
    category: 'Breakfast',
    description: 'Creamy roasted groundnut and pumpkin seed soup flavored with ginger, habaneros, and tender beef. Pairs great with Tuwo or Semo.',
    priceNGN: 5000,
    priceUSD: 3.3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vyYNXVU4_wDoXqq2Ln_aK22R9UhzgOd3kyFq-nUCcg&s=10',
    dietaryBadges: ['Northern Delicacy', 'Rich & Creamy'],
    servingsInfo: 'Per Bowl'
  },
  
  {
    id: 'soup-14',
    name: 'Yam & Egg',
    category: 'Breakfast',
    description: 'Pureed fresh jute leaves seasoned with locust beans (Iru) and crayfish for a silky smooth draw.',
    priceNGN: 3500,
    priceUSD: 2.3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_oJsWcpmzNbmoeJq5rR2ST4fp7Dbe_8TsEOiJYXGWNQ&s=10',
    dietaryBadges: ['Light & Silky', 'Gluten-Free'],
    servingsInfo: 'Per Portion'
  },

];

export const SERVICES: ServiceItem[] = [
  {
    id: 'serv-1',
    title: 'Wedding Catering',
    slug: 'wedding-catering',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Unforgettable culinary banquets tailored to your dream wedding celebration.',
    fullDescription: 'From extravagant multi-course plated receptions to opulent buffet setups, Shallom Kitchen delivers magical wedding menus that leave your guests talking for years.',
    features: ['Custom Menu Tasting Sessions', 'Plated or Buffet Style Service', 'Uniformed VIP Waitstaff', 'Cocktail & Mocktail Bars', 'Custom Cake Coordination'],
    iconName: 'HeartHandshake'
  },
  {
    id: 'serv-2',
    title: 'Corporate Catering',
    slug: 'corporate-catering',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Punctual, sophisticated executive meal packages and conference banquets.',
    fullDescription: 'Elevate your corporate seminars, board meetings, annual general meetings, and product launches with premium, beautifully presented hot lunches, boxed meals, and coffee breaks.',
    features: ['Punctual On-Site Delivery', 'Individual Executive Lunch Boxes', 'Tea & Coffee Break Setup', 'Dietary Customized Menus', 'Corporate Billing Invoicing'],
    iconName: 'Briefcase'
  },
  {
    id: 'serv-3',
    title: 'Birthday Parties',
    slug: 'birthday-parties',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Vibrant party menus, live grilling stations, and crowd-pleasing delights.',
    fullDescription: 'Whether celebrating a milestone 30th, 50th, or kid’s birthday party, we craft fun, mouth-watering food experiences complete with small chops, grills, and signature drinks.',
    features: ['Live Suya & Fish BBQ Grills', 'Interactive Food Stations', 'Small Chops & Cocktail Bar', 'Children-Friendly Menus', 'Themed Food Presentation'],
    iconName: 'Cake'
  },
  {
    id: 'serv-4',
    title: 'Outdoor Events',
    slug: 'outdoor-events',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQalUWskyhch6qZLRQOaddI0Da-jFI3CgXpgch8RucBvg&s=10',
    shortDescription: 'Seamless outdoor banquets, garden parties, and beachside festivities.',
    fullDescription: 'Equipped with heavy-duty mobile kitchen gear, hot holding units, and outdoor serving equipment, Shallom Kitchen handles outdoor events anywhere in Lagos with flawless hygiene.',
    features: ['Mobile Cooking Setup', 'All-Weather Food Warmers', 'Live Cooking Stations', 'High-Capacity Service Teams', 'Eco-Friendly Dinnerware Options'],
    iconName: 'Sun'
  },
  {
    id: 'serv-5',
    title: 'Private Dining & Personal Chef',
    slug: 'private-dining',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Intimate fine dining experiences cooked right in your residence.',
    fullDescription: 'Indulge in an exclusive multi-course restaurant-quality dinner in the comfort of your home. Our Executive Chef handles grocery shopping, cooking, sommelier pairing, and cleanup.',
    features: ['Personalized Menu Design', 'Fresh Premium Ingredient Sourcing', 'Professional Table Setup', 'Sommelier Beverage Recommendations', 'Complete Kitchen Cleanup'],
    iconName: 'Utensils'
  },
  {
    id: 'serv-6',
    title: 'School & Educational Events',
    slug: 'school-events',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Nutritious, tasty, and hygienic catering for graduations, galas, and inter-house sports.',
    fullDescription: 'Balanced and delicious catering for school galas, valedictory services, and sports days tailored for kids, students, teachers, and parents.',
    features: ['Hygienic Kid-Friendly Options', 'Nutritional Balance', 'Fast High-Volume Service', 'Allergy-Conscious Labels', 'Budget-Friendly Packages'],
    iconName: 'GraduationCap'
  },
  {
    id: 'serv-7',
    title: 'Funeral Receptions',
    slug: 'funeral-receptions',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Compassionate, respectful, and dignified catering honoring your loved ones.',
    fullDescription: 'During times of remembrance, allow Shallom Kitchen to take the burden off your family. We manage food supply smoothly so you can focus on honoring your beloved.',
    features: ['Dignified Service Delivery', 'High-Capacity Comfort Menus', 'Takeaway Pack Options', 'Attentive Waiting Service', 'Flexible Guest Adjustments'],
    iconName: 'Flower2'
  },
  {
    id: 'serv-8',
    title: 'Cocktail & Mocktail Services',
    slug: 'cocktail-services',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Sleek mobile bar services with flare mixologists and artisanal beverages.',
    fullDescription: 'Our mobile cocktail bars feature expert mixologists crafting handcrafted cocktails, local hibiscus zobo coolers, virgin Chapman punches, and premium spirits.',
    features: ['Custom Event Drink Menu', 'Professional Mixologists', 'Ice & Glassware Supply', 'Garnish & Fresh Juices', 'Illuminated Bar Counters'],
    iconName: 'Wine'
  },
  {
    id: 'serv-9',
    title: 'Full Event Planning & Coordination',
    slug: 'event-planning',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800',
    shortDescription: 'Turnkey event design, decor, venue setup, and vendor management.',
    fullDescription: 'Beyond food, Shallom Kitchen offers full event planning: venue decoration, lighting, table settings, protocol management, and entertainment coordination.',
    features: ['End-to-End Event Management', 'Decor & Lighting Setup', 'Vendor & Protocol Handling', 'Timeline & Logistics Control', 'On-Day Event Coordinators'],
    iconName: 'CalendarCheck'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mrs. Folake Adebayo',
    role: 'Bride',
    company: 'Lagos Wedding Celebration',
    event: 'Wedding Reception (600 Guests)',
    rating: 5,
    comment: 'Shallom Kitchen made our wedding day in Ikeja completely stress-free! The party Jollof was cooked to perfection with that signature smokey flavor, and the live grill tilapia had everyone raving.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    date: 'June 2026'
  },
  {
    id: 'test-2',
    name: 'Engr. Tunde Ogunleye',
    role: 'Corporate HR Director',
    company: 'First Skyline Group',
    event: 'Annual Executive Summit (250 Guests)',
    rating: 5,
    comment: 'Punctuality and presentation are top priority for our corporate events. Shallom Kitchen delivered warm executive lunch boxes right on schedule. The Ofada rice with Ayamase sauce was incredible!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    date: 'May 2026'
  },
  {
    id: 'test-3',
    name: 'Dr. (Mrs.) Blessing Nwosu',
    role: 'Celebrant',
    company: '50th Jubilee Gala',
    event: '50th Birthday Party in Lekki Phase 1',
    rating: 5,
    comment: 'The small chops platter and cocktail bar from Shallom Kitchen set the vibe for my birthday! The waitstaff were polished, hygienic, and attentive. I will definitely hire them again.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    date: 'April 2026'
  },
  {
    id: 'test-4',
    name: 'Chef Babatunde Williams',
    role: 'Food Critic & Blogger',
    company: 'Lagos Food Digest',
    event: 'Private Tasting Event',
    rating: 5,
    comment: 'Shallom Kitchen balances traditional Nigerian soul food with refined fine dining presentation. Their Egusi soup and herb-crusted salmon show true culinary mastery.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    date: 'March 2026'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Royal Wedding Banquet Setup',
    category: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000',
    description: 'Gold-themed 500-guest wedding reception banquet tables in Victoria Island.'
  },
  {
    id: 'gal-2',
    title: 'Smokey Party Jollof & Plantain Presentation',
    category: 'Food Presentation',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=1000',
    description: 'Plated party Jollof rice topped with fried plantain, moin moin, and peppered chicken.'
  },
  {
    id: 'gal-3',
    title: 'Corporate Executive Gala Dinner',
    category: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000',
    description: 'Plated 3-course dinner for international summit delegates in Ikoyi.'
  },
  {
    id: 'gal-4',
    title: 'Hygienic Commercial Kitchen in Ikorodu',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000',
    description: 'State-of-the-art prep facility at 4 Adefowope Odukoya Street, Ikorodu.'
  },
  {
    id: 'gal-5',
    title: 'Live Charcoal Suya & Tilapia Barbecue',
    category: 'Food Presentation',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000',
    description: 'Live grill station serving hot peppered suya and tilapia fish at a garden party.'
  },
  {
    id: 'gal-6',
    title: 'Uniformed Waitstaff Ready for Service',
    category: 'Staff at Work',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=1000',
    description: 'Professional Shallom Kitchen hospitality personnel before banquet opening.'
  },
  {
    id: 'gal-7',
    title: '50th Jubilee Golden Birthday Gala',
    category: 'Birthdays',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=1000',
    description: 'Buffet spread and mocktail bar at a luxury Lekki residence birthday bash.'
  },
  {
    id: 'gal-8',
    title: 'Master Small Chops & Finger Foods Platter',
    category: 'Food Presentation',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=80&w=1000',
    description: 'Freshly fried Samosas, Spring Rolls, Puff Puff, and Peppered Gizzard.'
  },
  {
    id: 'gal-9',
    title: 'Head Chef Finalizing Fine Dining Dishes',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&q=80&w=1000',
    description: 'Plating precision and microgreen garnishing prior to server dispatch.'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'pkg-basic',
    name: 'Basic',
    tagline: 'Ideal for intimate family gatherings & small birthday celebrations',
    pricePerGuestNGN: 6500,
    pricePerGuestUSD: 4.3,
    minGuests: 30,
    features: [
      'Choice of 2 Main Dishes (e.g. Party Jollof / Fried Rice)',
      'Protein Option: Peppered Chicken or Fried Beef',
      'Fried Plantain (Dodo) & Salad',
      'Small Chops Platter (Puff Puff & Spring Roll)',
      'Chilled Soft Drink / Water',
      'Buffet Setup with Chafing Dishes',
      '1 Professional Server per 25 Guests'
    ],
    recommendedFor: '30 - 100 Guests'
  },
  {
    id: 'pkg-premium',
    name: 'Premium',
    tagline: 'Our most popular package for weddings, AGMs & landmark birthdays',
    pricePerGuestNGN: 11500,
    pricePerGuestUSD: 7.7,
    minGuests: 50,
    badge: 'Most Popular',
    features: [
      'Choice of 4 Main Dishes (Jollof, Ofada, Fried Rice, Swallow)',
      'Premium Proteins: Goat Meat, Peppered Fish & Chicken',
      'Egusi or Vegetable Soup with Pounded Yam / Amala',
      'Master Small Chops Platter (Samosa, Spring Roll, Asun)',
      'Live BBQ Grill Station (Suya Skewers)',
      'Chapman & Fresh Fruit Juice Bar',
      'Uniformed VIP Waitstaff & Table Clearing',
      'Custom Menu Cards & Floral Buffet Decor'
    ],
    recommendedFor: '50 - 500 Guests'
  },
  {
    id: 'pkg-luxury',
    name: 'Luxury',
    tagline: 'Royal multi-course fine dining for high-profile weddings & galas',
    pricePerGuestNGN: 19500,
    pricePerGuestUSD: 13.0,
    minGuests: 50,
    badge: 'VIP Royalty',
    features: [
      'Custom Plated Multi-Course Dinner or Executive Buffet',
      'Pan-African Seafood (Fisherman Soup, Calabar Catfish, Peppered Prawns) + Local Delicacies',
      'Unlimited Live Cooking Stations (Asun, Live Fish BBQ, Suya & Bole)',
      'Gourmet Dessert Table & Ice Cream Station',
      'Full Mobile Cocktail & Mixology Bar',
      'Executive Chef On-Site Lead',
      'Dedicated VIP Butler Service per Table',
      'Complimentary Food Tasting Session for 4 Guests'
    ],
    recommendedFor: '100+ Guests'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Booking & Deposit',
    question: 'How far in advance should I book Shallom Kitchen for my event?',
    answer: 'We recommend booking at least 2 to 4 weeks prior to your event date to secure your date and ensure full menu customization. However, we also accommodate short-notice emergency bookings based on kitchen capacity.'
  },
  {
    id: 'faq-2',
    category: 'Booking & Deposit',
    question: 'What is your payment and deposit schedule?',
    answer: 'We require a 70% deposit upon contract sign-off to lock in date, ingredients, and staff. The remaining 30% balance is payable 48 hours prior to the event date.'
  },
  {
    id: 'faq-3',
    category: 'Menu & Customization',
    question: 'Can we customize the menu or request specific dietary meals?',
    answer: 'Absolutely! We pride ourselves on custom menu development. We cater for vegetarian, vegan, halal, gluten-free, low-sodium, and diabetic dietary needs without compromising taste.'
  },
  {
    id: 'faq-4',
    category: 'Menu & Customization',
    question: 'Do you offer menu tasting sessions before the event?',
    answer: 'Yes! For events exceeding 100 guests or Premium/Luxury packages, we offer complimentary food tasting sessions for up to 4 family members or event planners at our Ikorodu kitchen.'
  },
  {
    id: 'faq-5',
    category: 'Event Setup',
    question: 'Do you provide plates, cutlery, chafing dishes, and serving staff?',
    answer: 'Yes. All our catering packages include stainless steel chafing dishes, serving spoons, quality dinnerware, glass cups, and trained, uniformed serving personnel.'
  },
  {
    id: 'faq-6',
    category: 'Dietary Requirements',
    question: 'Where is Shallom Kitchen located, and do you cater outside Ikorodu / Lagos?',
    answer: 'Our main kitchen is located at 4 Adefowope Odukoya Street, Agric, Ikorodu, Lagos. We service all parts of Lagos (Island & Mainland) and neighboring states (Ogun, Oyo, Osun) with our mobile catering fleets.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: '10 Proven Secrets to Planning an Unforgettable Nigerian Wedding Menu',
    date: 'July 18, 2026',
    author: 'Chef Shallom',
    readTime: '5 min read',
    category: 'Wedding Tips',
    featuredImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Discover how to balance traditional party Jollof, swallow, small chops, and native Pan-African delicacies while keeping food piping hot throughout your wedding reception.',
    content: [
      'Food is arguably the most talked-about aspect of any wedding reception in Nigeria. When guests leave your wedding satisfied with rich, flavorful dishes, your event remains unforgettable.',
      'Key Tip 1: Always estimate guest counts with a 10% safety buffer. Uninvited guests or extra entourage members frequently pop up at Nigerian weddings.',
      'Key Tip 2: Pair a fast-moving buffet with live station snacks like Asun and Small Chops to prevent long queues at the food tables.',
      'Key Tip 3: Hire professional caterers with insulated hot-holding equipment so the party Jollof and Egusi soup remain piping hot from the first to the last guest served.'
    ]
  },
  {
    id: 'blog-2',
    title: 'Why Live Suya & Barbecue Stations Are the Ultimate Party Hit in Lagos',
    date: 'June 28, 2026',
    author: 'Chef Tunde',
    readTime: '4 min read',
    category: 'Party Trends',
    featuredImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Explore why live charcoal grills, aromatic peppered tilapia, and spicy beef suya skewers elevate evening parties and corporate galas.',
    content: [
      'The sizzle of meat over glowing red coals and the intoxicating aroma of ground peanut Yaji spices create instant excitement among event attendees.',
      'Live grilling stations double as entertainment and delicious dining. Guests love watching fresh tilapia, chicken skewers, and spicy Asun sizzle live right before their eyes.',
      'At Shallom Kitchen, our live grill chefs use hygienic stainless setups and smokeless charcoal techniques that allow indoor or outdoor setup seamlessly.'
    ]
  },
  {
    id: 'blog-3',
    title: 'The Art of Executive Boxed Lunches for Corporate Seminars',
    date: 'May 14, 2026',
    author: 'Operations Team',
    readTime: '3 min read',
    category: 'Corporate Events',
    featuredImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    excerpt: 'How individually sealed, eco-friendly executive lunch boxes streamline seminar timing while maintaining gourmet flavor.',
    content: [
      'In high-stakes corporate meetings and training sessions, time management is critical. Traditional long buffet queues can eat into valuable presentation schedules.',
      'Executive bento lunch boxes provide a stylish, hygienic, and swift alternative. Each box contains a balanced meal with protein, sides, dessert, cutlery, and refreshing beverages.',
      'Shallom Kitchen customizes corporate packaging with your company branding and labeled dietary markings.'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Chef Shallom Odukoya',
    role: 'Executive Chef & Founder',
    bio: 'Over 12 years of culinary innovation mastering authentic West African heritage cuisine and regional Pan-African banquets.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400',
    specialty: 'Smokey Party Jollof & Fine Dining Plating'
  },
  {
    id: 'team-2',
    name: 'Chef Mary Amadi',
    role: 'Head Pastry & Small Chops Chef',
    bio: 'Master of light-as-air puff puff, gourmet samosas, and bespoke multi-tier celebration cakes.',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=400',
    specialty: 'Finger Foods, Cocktails & Dessert Displays'
  },
  {
    id: 'team-3',
    name: 'David Adeleke',
    role: 'Director of Event Operations',
    bio: 'Logistics expert managing 50+ staff members and high-capacity banquet setups across Nigeria.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    specialty: 'Banquet Logistics & VIP Guest Protocol'
  }
];

export const AWARDS: AwardItem[] = [
  {
    id: 'award-1',
    title: 'Best Event Caterer in Lagos',
    year: '2025',
    issuer: 'Lagos Hospitality Excellence Awards',
    icon: 'Trophy'
  },
  {
    id: 'award-2',
    title: 'Top 10 Nigerian Jollof Masters',
    year: '2024',
    issuer: 'West Africa Culinary Guild',
    icon: 'Award'
  },
  {
    id: 'award-3',
    title: '5-Star Food Hygiene Certification',
    year: '2026',
    issuer: 'Lagos State Safety Commission',
    icon: 'ShieldCheck'
  }
];
