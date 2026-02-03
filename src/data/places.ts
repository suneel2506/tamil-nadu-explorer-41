export interface Place {
  id: string;
  name: {
    en: string;
    ta: string;
  };
  description: {
    en: string;
    ta: string;
  };
  category: 'temple' | 'beach' | 'hillstation' | 'heritage' | 'wildlife';
  image: string;
  location: string;
  bestMonths: number[];
  budget: 'low' | 'medium' | 'high';
  studentFriendly: boolean;
  rating: number;
  highlights: {
    en: string[];
    ta: string[];
  };
}

export interface Festival {
  id: string;
  name: {
    en: string;
    ta: string;
  };
  description: {
    en: string;
    ta: string;
  };
  month: number;
  location: string;
  image: string;
}

export const places: Place[] = [
  {
    id: 'meenakshi-temple',
    name: {
      en: 'Meenakshi Amman Temple',
      ta: 'மீனாட்சி அம்மன் கோவில்',
    },
    description: {
      en: 'A historic Hindu temple located in Madurai, known for its stunning architecture and 14 gopurams.',
      ta: 'மதுரையில் அமைந்துள்ள வரலாற்று சிறப்புமிக்க இந்து கோவில், அதன் அற்புதமான கட்டிடக்கலை மற்றும் 14 கோபுரங்களுக்கு பிரபலமானது.',
    },
    category: 'temple',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
    location: 'Madurai',
    bestMonths: [10, 11, 12, 1, 2, 3],
    budget: 'low',
    studentFriendly: true,
    rating: 4.8,
    highlights: {
      en: ['14 Gopurams', 'Hall of 1000 Pillars', 'Golden Lotus Tank'],
      ta: ['14 கோபுரங்கள்', '1000 தூண்கள் மண்டபம்', 'பொற்றாமரை குளம்'],
    },
  },
  {
    id: 'marina-beach',
    name: {
      en: 'Marina Beach',
      ta: 'மெரினா கடற்கரை',
    },
    description: {
      en: 'The longest natural urban beach in India, stretching over 13 km along the Bay of Bengal.',
      ta: 'இந்தியாவின் மிக நீளமான இயற்கை நகர்ப்புற கடற்கரை, வங்காள விரிகுடா நெடுகிலும் 13 கி.மீ. நீண்டுள்ளது.',
    },
    category: 'beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    location: 'Chennai',
    bestMonths: [11, 12, 1, 2],
    budget: 'low',
    studentFriendly: true,
    rating: 4.5,
    highlights: {
      en: ['Sunrise Views', 'Street Food', 'Evening Walks'],
      ta: ['சூரிய உதய காட்சிகள்', 'தெரு உணவு', 'மாலை நடைப்பயணம்'],
    },
  },
  {
    id: 'ooty',
    name: {
      en: 'Ooty',
      ta: 'ஊட்டி',
    },
    description: {
      en: 'Queen of Hill Stations, nestled in the Nilgiri Hills with tea gardens and colonial charm.',
      ta: 'மலை நிலையங்களின் ராணி, தேயிலை தோட்டங்கள் மற்றும் காலனித்துவ அழகுடன் நீலகிரி மலைகளில் அமைந்துள்ளது.',
    },
    category: 'hillstation',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800',
    location: 'Nilgiris',
    bestMonths: [3, 4, 5, 6, 9, 10],
    budget: 'medium',
    studentFriendly: true,
    rating: 4.7,
    highlights: {
      en: ['Toy Train', 'Botanical Garden', 'Ooty Lake'],
      ta: ['பொம்மை ரயில்', 'தாவரவியல் பூங்கா', 'ஊட்டி ஏரி'],
    },
  },
  {
    id: 'mahabalipuram',
    name: {
      en: 'Mahabalipuram',
      ta: 'மகாபலிபுரம்',
    },
    description: {
      en: 'UNESCO World Heritage site with ancient rock-cut temples and sculptures from the Pallava dynasty.',
      ta: 'பல்லவ வம்சத்தின் பழங்கால பாறை வெட்டு கோவில்கள் மற்றும் சிற்பங்களுடன் கூடிய யுனெஸ்கோ உலக பாரம்பரிய தளம்.',
    },
    category: 'heritage',
    image: 'https://images.unsplash.com/photo-1621596307678-cf5f02db3885?w=800',
    location: 'Chengalpattu',
    bestMonths: [11, 12, 1, 2, 3],
    budget: 'low',
    studentFriendly: true,
    rating: 4.6,
    highlights: {
      en: ['Shore Temple', "Arjuna's Penance", 'Five Rathas'],
      ta: ['கடற்கரை கோவில்', 'அர்ஜுனன் தவம்', 'ஐந்து ரதங்கள்'],
    },
  },
  {
    id: 'kodaikanal',
    name: {
      en: 'Kodaikanal',
      ta: 'கொடைக்கானல்',
    },
    description: {
      en: 'Princess of Hill Stations, famous for its star-shaped lake and pine forests.',
      ta: 'மலை நிலையங்களின் இளவரசி, அதன் நட்சத்திர வடிவ ஏரி மற்றும் பைன் காடுகளுக்கு பிரபலமானது.',
    },
    category: 'hillstation',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800',
    location: 'Dindigul',
    bestMonths: [4, 5, 6, 9, 10],
    budget: 'medium',
    studentFriendly: true,
    rating: 4.6,
    highlights: {
      en: ['Kodaikanal Lake', "Coaker's Walk", 'Bryant Park'],
      ta: ['கொடைக்கானல் ஏரி', 'கோக்கர் நடைபாதை', 'பிரையன்ட் பூங்கா'],
    },
  },
  {
    id: 'rameshwaram',
    name: {
      en: 'Rameshwaram',
      ta: 'ராமேஸ்வரம்',
    },
    description: {
      en: 'Sacred pilgrimage site with the famous Ramanathaswamy Temple and Pamban Bridge.',
      ta: 'புகழ்பெற்ற ராமநாதசுவாமி கோவில் மற்றும் பாம்பன் பாலத்துடன் கூடிய புனித புனித தலம்.',
    },
    category: 'temple',
    image: 'https://images.unsplash.com/photo-1621427642064-b85f66bf47de?w=800',
    location: 'Ramanathapuram',
    bestMonths: [10, 11, 12, 1, 2, 3, 4],
    budget: 'low',
    studentFriendly: true,
    rating: 4.7,
    highlights: {
      en: ['Ramanathaswamy Temple', 'Pamban Bridge', 'Dhanushkodi'],
      ta: ['ராமநாதசுவாமி கோவில்', 'பாம்பன் பாலம்', 'தனுஷ்கோடி'],
    },
  },
  {
    id: 'mudumalai',
    name: {
      en: 'Mudumalai National Park',
      ta: 'முதுமலை தேசிய பூங்கா',
    },
    description: {
      en: 'Wildlife sanctuary home to elephants, tigers, and diverse flora at the Nilgiri foothills.',
      ta: 'நீலகிரி அடிவாரத்தில் யானைகள், புலிகள் மற்றும் பல்வேறு தாவரங்களுக்கு இருப்பிடமான வன உயிர் சரணாலயம்.',
    },
    category: 'wildlife',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800',
    location: 'Nilgiris',
    bestMonths: [2, 3, 4, 5, 6, 9, 10],
    budget: 'medium',
    studentFriendly: false,
    rating: 4.5,
    highlights: {
      en: ['Elephant Safari', 'Tiger Reserve', 'Nature Trails'],
      ta: ['யானை சபாரி', 'புலி சரணாலயம்', 'இயற்கை பாதைகள்'],
    },
  },
  {
    id: 'thanjavur',
    name: {
      en: 'Thanjavur',
      ta: 'தஞ்சாவூர்',
    },
    description: {
      en: 'Cultural capital of Tamil Nadu, home to the magnificent Brihadeeswarar Temple.',
      ta: 'தமிழ்நாட்டின் கலாச்சார தலைநகரம், பிரகதீஸ்வரர் கோவிலுக்கு இருப்பிடம்.',
    },
    category: 'heritage',
    image: 'https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?w=800',
    location: 'Thanjavur',
    bestMonths: [10, 11, 12, 1, 2, 3],
    budget: 'low',
    studentFriendly: true,
    rating: 4.8,
    highlights: {
      en: ['Brihadeeswarar Temple', 'Thanjavur Palace', 'Saraswathi Mahal Library'],
      ta: ['பிரகதீஸ்வரர் கோவில்', 'தஞ்சாவூர் அரண்மனை', 'சரஸ்வதி மகால் நூலகம்'],
    },
  },
];

export const festivals: Festival[] = [
  {
    id: 'pongal',
    name: {
      en: 'Pongal',
      ta: 'பொங்கல்',
    },
    description: {
      en: 'The harvest festival celebrating abundance with traditional rituals and Jallikattu.',
      ta: 'பாரம்பரிய சடங்குகள் மற்றும் ஜல்லிக்கட்டுடன் செழிப்பைக் கொண்டாடும் அறுவடை திருவிழா.',
    },
    month: 1,
    location: 'Statewide',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
  },
  {
    id: 'natyanjali',
    name: {
      en: 'Natyanjali Festival',
      ta: 'நாட்டியாஞ்சலி திருவிழா',
    },
    description: {
      en: 'A dance festival at Chidambaram where artists perform Bharatanatyam at the Nataraja Temple.',
      ta: 'சிதம்பரத்தில் நடராஜர் கோவிலில் கலைஞர்கள் பரதநாட்டியம் நிகழ்த்தும் நடன திருவிழா.',
    },
    month: 2,
    location: 'Chidambaram',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800',
  },
  {
    id: 'chithirai',
    name: {
      en: 'Chithirai Thiruvizha',
      ta: 'சித்திரை திருவிழா',
    },
    description: {
      en: 'Grand temple festival in Madurai celebrating the divine wedding of Meenakshi and Sundareswarar.',
      ta: 'மீனாட்சி மற்றும் சுந்தரேஸ்வரர் திருமணத்தை கொண்டாடும் மதுரையின் பிரமாண்டமான கோவில் திருவிழா.',
    },
    month: 4,
    location: 'Madurai',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
  },
  {
    id: 'karthigai',
    name: {
      en: 'Karthigai Deepam',
      ta: 'கார்த்திகை தீபம்',
    },
    description: {
      en: 'Festival of lights celebrated at Thiruvannamalai with the lighting of the sacred flame.',
      ta: 'திருவண்ணாமலையில் புனித தீபம் ஏற்றுவதுடன் கொண்டாடப்படும் ஒளி திருவிழா.',
    },
    month: 11,
    location: 'Thiruvannamalai',
    image: 'https://images.unsplash.com/photo-1605116959023-8a9e0f5c0f7f?w=800',
  },
];

export const categoryLabels = {
  temple: { en: 'Temples', ta: 'கோவில்கள்' },
  beach: { en: 'Beaches', ta: 'கடற்கரைகள்' },
  hillstation: { en: 'Hill Stations', ta: 'மலை நிலையங்கள்' },
  heritage: { en: 'Heritage', ta: 'பாரம்பரியம்' },
  wildlife: { en: 'Wildlife', ta: 'வனவிலங்கு' },
};

export const budgetLabels = {
  low: { en: 'Budget Friendly', ta: 'குறைந்த செலவு' },
  medium: { en: 'Moderate', ta: 'மிதமான' },
  high: { en: 'Premium', ta: 'பிரீமியம்' },
};

export const monthNames = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  ta: ['ஜனவரி', 'பிப்ரவரி', 'மார்ச்', 'ஏப்ரல்', 'மே', 'ஜூன்', 'ஜூலை', 'ஆகஸ்ட்', 'செப்டம்பர்', 'அக்டோபர்', 'நவம்பர்', 'டிசம்பர்'],
};
