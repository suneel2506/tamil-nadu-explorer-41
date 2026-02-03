import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, ta: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    heroTitle: 'Discover Tamil Nadu',
    heroSubtitle: 'Where ancient temples meet pristine beaches',
    searchPlaceholder: 'Search destinations...',
    bestThisMonth: 'Best Places to Visit This Month',
    allPlaces: 'Explore All Destinations',
    festivals: 'Festival Calendar',
    studentBudget: 'Student-Friendly Picks',
    filterAll: 'All',
    filterTemples: 'Temples',
    filterBeaches: 'Beaches',
    filterHillStations: 'Hill Stations',
    filterHeritage: 'Heritage',
    filterWildlife: 'Wildlife',
    budgetFriendly: 'Budget Friendly',
    viewDetails: 'View Details',
    upcomingFestival: 'Upcoming Festival',
    highlights: 'Highlights',
    bestTimeToVisit: 'Best Time to Visit',
    planYourTrip: 'Plan Your Trip',
    exploreMore: 'Explore More',
    navHome: 'Home',
    navPlaces: 'Places',
    navFestivals: 'Festivals',
    navBudget: 'Budget Travel',
  },
  ta: {
    heroTitle: 'தமிழ்நாட்டை கண்டறியுங்கள்',
    heroSubtitle: 'பழங்கால கோவில்கள் தூய்மையான கடற்கரைகளை சந்திக்கும் இடம்',
    searchPlaceholder: 'இடங்களைத் தேடுங்கள்...',
    bestThisMonth: 'இந்த மாதம் பார்க்க வேண்டிய சிறந்த இடங்கள்',
    allPlaces: 'அனைத்து இடங்களையும் ஆராயுங்கள்',
    festivals: 'திருவிழா நாட்காட்டி',
    studentBudget: 'மாணவர் நட்பு தேர்வுகள்',
    filterAll: 'அனைத்தும்',
    filterTemples: 'கோவில்கள்',
    filterBeaches: 'கடற்கரைகள்',
    filterHillStations: 'மலை நிலையங்கள்',
    filterHeritage: 'பாரம்பரியம்',
    filterWildlife: 'வனவிலங்கு',
    budgetFriendly: 'குறைந்த செலவு',
    viewDetails: 'விவரங்களைக் காண',
    upcomingFestival: 'வரவிருக்கும் திருவிழா',
    highlights: 'சிறப்பம்சங்கள்',
    bestTimeToVisit: 'பார்வையிட சிறந்த நேரம்',
    planYourTrip: 'உங்கள் பயணத்தைத் திட்டமிடுங்கள்',
    exploreMore: 'மேலும் ஆராயுங்கள்',
    navHome: 'முகப்பு',
    navPlaces: 'இடங்கள்',
    navFestivals: 'திருவிழாக்கள்',
    navBudget: 'பட்ஜெட் பயணம்',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (en: string, ta: string) => (language === 'en' ? en : ta);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function useTranslations() {
  const { language } = useLanguage();
  return translations[language];
}
