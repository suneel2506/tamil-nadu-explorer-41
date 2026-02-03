import { motion } from 'framer-motion';
import { GraduationCap, Wallet, MapPin, Star } from 'lucide-react';
import { useTranslations, useLanguage } from '@/contexts/LanguageContext';
import { places } from '@/data/places';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function StudentBudgetSection() {
  const t = useTranslations();
  const { language } = useLanguage();

  const studentFriendlyPlaces = places.filter(
    (place) => place.studentFriendly && place.budget === 'low'
  );

  return (
    <section id="budget" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full font-body text-sm mb-4">
            <GraduationCap className="h-4 w-4" />
            {language === 'en' ? 'For Students' : 'மாணவர்களுக்கு'}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t.studentBudget}
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            {language === 'en'
              ? 'Explore Tamil Nadu without breaking the bank. These destinations offer incredible experiences at student-friendly prices.'
              : 'குறைந்த செலவில் தமிழ்நாட்டை கண்டறியுங்கள். இந்த இடங்கள் மாணவர் நட்பு விலையில் நம்பமுடியாத அனுபவங்களை வழங்குகின்றன.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentFriendlyPlaces.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card className="group overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border-secondary/20 hover:border-secondary/40">
                <CardContent className="p-0">
                  <div className="flex gap-4 p-4">
                    <img
                      src={place.image}
                      alt={place.name[language]}
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="font-body text-xs">
                          <Wallet className="h-3 w-3 mr-1" />
                          {t.budgetFriendly}
                        </Badge>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground line-clamp-1">
                        {place.name[language]}
                      </h3>
                      <div className="flex items-center gap-3 text-muted-foreground mt-1">
                        <span className="flex items-center gap-1 font-body text-sm">
                          <MapPin className="h-3.5 w-3.5" />
                          {place.location}
                        </span>
                        <span className="flex items-center gap-1 font-body text-sm">
                          <Star className="h-3.5 w-3.5 fill-temple-gold text-temple-gold" />
                          {place.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
