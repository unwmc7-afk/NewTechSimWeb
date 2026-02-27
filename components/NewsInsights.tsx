import React from 'react';
import { NewsItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface NewsInsightsProps {
  onNavigate: (page: 'home' | 'blog') => void;
}

const NewsInsights: React.FC<NewsInsightsProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const newsItems: NewsItem[] = [
    {
      type: t.news.items[0].type,
      typeColor: 'bg-tertiary text-slate-900',
      date: 'Oct 24, 2023',
      title: t.news.items[0].title,
      description: t.news.items[0].desc,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJJUlPaEO9KOjdJvuu0LzJL-6bJZmsXBdKZ824JOZaV65cLQ64RDYrVoBtPpSyoWb34IhDkaGU2dK_miqN-CLg5_LrW3uW-ax2ApWwHQh9OYLWcZdjih1qjruD1q0TyyBBRUj-rRADy7MG-f8XLClstjFMe5ioz5S0ZTTEdEahyo_Kkbmxvk6Bem_w7tNuldq7LsNXcQj1ySSFiYt47Seizyosp1iAQnjU-nDPQ8e6XWw-r1TC_GqL88hnviumDNbGtckt_dcDQKs',
      cta: t.news.ctaRead,
    },
    {
      type: t.news.items[1].type,
      typeColor: 'bg-secondary text-white',
      date: 'Nov 12, 2023',
      title: t.news.items[1].title,
      description: t.news.items[1].desc,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWqLKaVs2_AgCZNw6_Gkke-BTNUVEVQZwU6Y5RpuqIS9h1XczInsvCCgDdR1OeMSEaWYgSG5Jq0ozkv1f3EQjoZfGkew8GnZCjyOKD-B5cwkAABZq9dAH10tmjCmpyN8JS3uuozQMxLGEb3McqgmjY2bgqp6B7zMhfI1ZNsom8S5vM9E7bzM0azQR31t4t9UDIN2rlTciwdlYFfBHYWn-z6GJX9kUTPahsH1R8JHSkG58zTDS3uPaFHO0IizpHtYDjbRddVBkJRso',
      cta: t.news.ctaRegister,
    },
    {
      type: t.news.items[2].type,
      typeColor: 'bg-primary text-white',
      date: 'Dec 05, 2023',
      title: t.news.items[2].title,
      description: t.news.items[2].desc,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCerHse-xrEFvo2-zJj8l2B8FstbtubLPz5esMUEQBJX2niCiZ62TeKkRx65CupJUwTFwNV4LSq8L4JONGF4TnwcNwG8o6cArCdAE_x1KVWfe4xj8jZXQrO2Cx0dm3ZGHbeUCaUaWhFPlrmY2IxZLaiBmRtzOpTKUBuSZo8WW9pt8CPdo1rjMtQlM8IArnYjvwBP5fzBzOpR5zeYCFC41luQHlcyTGuSAK6bo-UTx78IBMJgloNGWqKYRXaFgYbJubFDFqITf6Dko8',
      cta: t.news.ctaFeatures,
    },
  ];

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-display font-black text-3xl text-slate-900 dark:text-white">{t.news.title}</h2>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              onNavigate('blog');
            }}
            className="text-primary hover:text-red-700 font-bold text-sm hidden sm:block"
          >
            {t.news.viewBlog}
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article key={index} className="bg-white dark:bg-surface-dark rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all group h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className={`absolute top-4 left-4 ${item.typeColor} text-xs font-bold px-2 py-1 rounded`}>{item.type}</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-slate-400 text-xs font-medium mb-2 flex items-center">
                  <span className="material-symbols-outlined text-sm mr-1">event</span> {item.date}
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">{item.description}</p>
                <div className="mt-auto">
                  <a href="#" className="text-secondary dark:text-tertiary font-bold text-sm hover:underline">{item.cta}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsInsights;