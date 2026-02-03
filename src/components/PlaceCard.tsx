import { motion } from 'framer-motion';
import { MapPin, Star, Wallet } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Place, categoryLabels, budgetLabels } from '@/data/places';

interface PlaceCardProps {
  place: Place;
  index?: number;
}

export function PlaceCard({ place, index = 0 }: PlaceCardProps) {
  const { language, t } = useLanguage();

  const categoryColors: Record<Place['category'], string> = {
    temple: 'bg-sunset-orange/10 text-sunset-orange border-sunset-orange/20',
    beach: 'bg-ocean-blue/10 text-ocean-blue border-ocean-blue/20',
    hillstation: 'bg-hill-green/10 text-hill-green border-hill-green/20',
    heritage: 'bg-temple-gold/10 text-temple-gold border-temple-gold/20',
    wildlife: 'bg-hill-green/10 text-hill-green border-hill-green/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Card className="group overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer border-border/50">
        <div className="relative h-48 overflow-hidden">
          <img
            src={place.image}
            alt={place.name[language]}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge className={`${categoryColors[place.category]} border font-body text-xs`}>
              {categoryLabels[place.category][language]}
            </Badge>
            {place.studentFriendly && (
              <Badge variant="secondary" className="font-body text-xs">
                <Wallet className="h-3 w-3 mr-1" />
                {budgetLabels[place.budget][language]}
              </Badge>
            )}
          </div>
          <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-background/90 rounded-full px-2 py-1">
            <Star className="h-3.5 w-3.5 fill-temple-gold text-temple-gold" />
            <span className="font-body text-sm font-medium">{place.rating}</span>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-display text-lg font-semibold text-foreground mb-1 line-clamp-1">
            {place.name[language]}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground mb-2">
            <MapPin className="h-3.5 w-3.5" />
            <span className="font-body text-sm">{place.location}</span>
          </div>
          <p className="font-body text-sm text-muted-foreground line-clamp-2">
            {place.description[language]}
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {place.highlights[language].slice(0, 2).map((highlight, i) => (
              <span
                key={i}
                className="font-body text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
