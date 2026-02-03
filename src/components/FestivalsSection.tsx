import { motion } from 'framer-motion';
import { useTranslations } from '@/contexts/LanguageContext';
import { festivals } from '@/data/places';
import { FestivalCard } from './FestivalCard';

export function FestivalsSection() {
  const t = useTranslations();

  // Sort festivals by upcoming month
  const currentMonth = new Date().getMonth() + 1;
  const sortedFestivals = [...festivals].sort((a, b) => {
    const aDistance = (a.month - currentMonth + 12) % 12;
    const bDistance = (b.month - currentMonth + 12) % 12;
    return aDistance - bDistance;
  });

  return (
    <section id="festivals" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t.festivals}
          </h2>
          <p className="font-body text-muted-foreground">
            {t.upcomingFestival}
          </p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {sortedFestivals.map((festival, index) => (
            <FestivalCard key={festival.id} festival={festival} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
