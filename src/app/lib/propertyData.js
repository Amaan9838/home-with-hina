// Create a new file for property data
export const propertyDetails = {
  id: '1',
  title: 'Luxury Villa in Derabassi',
  location: 'SBP Ambala Chandigarh Highway, Derabassi Mohali',
  price: '1.2Cr',
  pricePerSqFt: '₹4,500/sq.ft',
  images: [
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80',  // Modern villa exterior
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80',  // Luxurious living room
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80',  // Designer kitchen
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80',  // Master bedroom
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80',  // Swimming pool
    'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80',  // Garden view
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80',  // Aerial view
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80'   // Bathroom
  ],
  keyFeatures: [
    { label: 'Living Area', value: '1550 sq.yd' },
    { label: 'Bedrooms', value: '3' },
    { label: 'Bathrooms', value: '3' },
    { label: 'Parking', value: '2 Cars' },
    { label: 'Year Built', value: '2023' },
    { label: 'Property Type', value: 'Villa' }
  ],
  description: `Experience luxury living at its finest in this meticulously designed 3BHK villa. 
  Located in the prestigious SBP Housing Park, this property offers panoramic views and world-class amenities.
  The villa features high ceilings, premium finishes, and smart home automation throughout.`,
  specifications: {
    construction: [
      'Premium Vitrified Tiles',
      'Modular Kitchen',
      'High-end Bathroom Fittings',
      'Double Glazed Windows'
    ],
    amenities: [
      'Club House',
      'Swimming Pool',
      'Gym',
      'Power Backup',
      'Lift Access',
      'Garden',
      'Indoor Games',
      '24/7 Security',
      'Children\'s Play Area'
    ]
  },
  agent: {
    name: 'Hina',
    phone: '9501526153',
    email: 'contact@homewithhina.com',
    photo: '/agent-photo.jpg'
  },
  virtualTour: {
    enabled: true,
    url: 'https://virtualtour.homewithhina.com/property-1'
  },
  location: {
    address: 'SBP Ambala Chandigarh Highway, Derabassi Mohali', // Add a string address property
    coordinates: {
      lat: 30.5928,
      lng: 76.8498
    },
    landmarks: [
      { name: 'Airport', distance: '15 mins' },
      { name: 'City Center', distance: '10 mins' },
      { name: 'Schools', distance: '5 mins' }
    ]
  }
};
