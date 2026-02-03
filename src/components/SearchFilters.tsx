import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTranslations, useLanguage } from '@/contexts/LanguageContext';
import { Place } from '@/data/places';

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: Place['category'] | 'all';
  setActiveCategory: (category: Place['category'] | 'all') => void;
}

export function SearchFilters({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
}: SearchFiltersProps) {
  const t = useTranslations();
  const { language } = useLanguage();

  const categories: { key: Place['category'] | 'all'; label: string }[] = [
    { key: 'all', label: t.filterAll },
    { key: 'temple', label: t.filterTemples },
    { key: 'beach', label: t.filterBeaches },
    { key: 'hillstation', label: t.filterHillStations },
    { key: 'heritage', label: t.filterHeritage },
    { key: 'wildlife', label: t.filterWildlife },
  ];

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={t.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 font-body"
          aria-label={language === 'en' ? 'Search destinations' : 'இடங்களைத் தேடுங்கள்'}
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Button
            key={cat.key}
            variant={activeCategory === cat.key ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory(cat.key)}
            className="font-body text-sm"
          >
            {cat.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
