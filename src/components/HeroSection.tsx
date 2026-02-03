import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations, useLanguage } from '@/contexts/LanguageContext';
import { places, monthNames } from '@/data/places';

export function HeroSection() {
  const t = useTranslations();
  const { language } = useLanguage();
  
  const currentMonth = new Date().getMonth() + 1;
  const featuredPlace = places.find((p) => p.bestMonths.includes(currentMonth)) || places[0];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={featuredPlace.image}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full font-body text-sm mb-6">
              <Sparkles className="h-4 w-4" />
              {t.bestThisMonth} - {monthNames[language][currentMonth - 1]}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4 leading-tight"
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-xl md:text-2xl text-primary-foreground/80 mb-8"
          >
            {t.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card/90 backdrop-blur-md rounded-2xl p-6 shadow-elevated"
          >
            <div className="flex items-start gap-4">
              <img
                src={featuredPlace.image}
                alt={featuredPlace.name[language]}
                className="w-20 h-20 rounded-xl object-cover hidden sm:block"
              />
              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {featuredPlace.name[language]}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-2">
                  {featuredPlace.description[language]}
                </p>
                <Button className="bg-gradient-hero text-primary-foreground hover:opacity-90 font-body">
                  {t.exploreMore}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center"
        >
          <motion.div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
