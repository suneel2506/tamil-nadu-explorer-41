import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLanguage } from '@/contexts/LanguageContext';
import { places, Place } from '@/data/places';
import { PlaceCard } from './PlaceCard';
import { SearchFilters } from './SearchFilters';

export function PlacesSection() {
  const t = useTranslations();
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Place['category'] | 'all'>('all');

  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      const matchesSearch =
        place.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.description[language].toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = activeCategory === 'all' || place.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, language]);

  return (
    <section id="places" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t.allPlaces}
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-2xl">
            {language === 'en'
              ? 'Explore the diverse landscapes of Tamil Nadu, from ancient temples to pristine beaches and misty hill stations.'
              : 'பழங்கால கோவில்கள் முதல் தூய்மையான கடற்கரைகள் மற்றும் மூடுபனி மலை நிலையங்கள் வரை தமிழ்நாட்டின் பன்முக நிலப்பரப்புகளை ஆராயுங்கள்.'}
          </p>
        </motion.div>

        <SearchFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlaces.map((place, index) => (
            <PlaceCard key={place.id} place={place} index={index} />
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div className="text-center py-12">
            <p className="font-body text-muted-foreground">
              {language === 'en'
                ? 'No places found. Try adjusting your search or filters.'
                : 'இடங்கள் எதுவும் கிடைக்கவில்லை. உங்கள் தேடலை மாற்றி முயற்சிக்கவும்.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
