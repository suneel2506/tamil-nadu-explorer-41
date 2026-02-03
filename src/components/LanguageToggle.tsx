import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
      className="flex items-center gap-2 font-body"
      aria-label={language === 'en' ? 'Switch to Tamil' : 'Switch to English'}
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === 'en' ? 'தமிழ்' : 'English'}</span>
    </Button>
  );
}
