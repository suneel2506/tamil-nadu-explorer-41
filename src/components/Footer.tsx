import { MapPin, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-semibold">TN Tourism</span>
          </div>

          <p className="font-body text-sm text-primary-foreground/70 text-center">
            {language === 'en'
              ? 'Discover the beauty of Tamil Nadu'
              : 'தமிழ்நாட்டின் அழகை கண்டறியுங்கள்'}
          </p>

          <p className="font-body text-sm text-primary-foreground/70 flex items-center gap-1">
            {language === 'en' ? 'Made with' : 'உருவாக்கியது'}
            <Heart className="h-4 w-4 fill-primary text-primary" />
            {language === 'en' ? 'in Tamil Nadu' : 'தமிழ்நாட்டில்'}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="font-body text-xs text-primary-foreground/50">
            © 2024 TN Tourism. {language === 'en' ? 'All rights reserved.' : 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
