import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { PlacesSection } from '@/components/PlacesSection';
import { FestivalsSection } from '@/components/FestivalsSection';
import { StudentBudgetSection } from '@/components/StudentBudgetSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <PlacesSection />
          <FestivalsSection />
          <StudentBudgetSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
