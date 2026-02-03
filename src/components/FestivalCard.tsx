import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Festival, monthNames } from '@/data/places';

interface FestivalCardProps {
  festival: Festival;
  index?: number;
}

export function FestivalCard({ festival, index = 0 }: FestivalCardProps) {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Card className="group overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 min-w-[280px] border-border/50">
        <div className="relative h-40 overflow-hidden">
          <img
            src={festival.image}
            alt={festival.name[language]}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="font-display text-lg font-semibold text-primary-foreground mb-1">
              {festival.name[language]}
            </h3>
            <div className="flex items-center gap-3 text-primary-foreground/80">
              <span className="flex items-center gap-1 font-body text-sm">
                <Calendar className="h-3.5 w-3.5" />
                {monthNames[language][festival.month - 1]}
              </span>
              <span className="flex items-center gap-1 font-body text-sm">
                <MapPin className="h-3.5 w-3.5" />
                {festival.location}
              </span>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <p className="font-body text-sm text-muted-foreground line-clamp-2">
            {festival.description[language]}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
