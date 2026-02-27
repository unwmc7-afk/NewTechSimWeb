import React from 'react';
import { BlogPost } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Blog: React.FC = () => {
  const { t, language } = useLanguage();

  const blogPostsData: Record<string, BlogPost[]> = {
    cs: [
      {
        title: "TechSim konference 2023: Shrnutí hlavních událostí",
        excerpt: "Přinášíme vám to nejzajímavější z naší výroční konference. Odhalení nové verze SimSuite 5.0 a inspirativní přednášky hostů z předních technologických firem.",
        date: "15. října 2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJJUlPaEO9KOjdJvuu0LzJL-6bJZmsXBdKZ824JOZaV65cLQ64RDYrVoBtPpSyoWb34IhDkaGU2dK_miqN-CLg5_LrW3uW-ax2ApWwHQh9OYLWcZdjih1qjruD1q0TyyBBRUj-rRADy7MG-f8XLClstjFMe5ioz5S0ZTTEdEahyo_Kkbmxvk6Bem_w7tNuldq7LsNXcQj1ySSFiYt47Seizyosp1iAQnjU-nDPQ8e6XWw-r1TC_GqL88hnviumDNbGtckt_dcDQKs",
        category: "Novinky",
        categoryColor: "bg-tertiary",
        categoryTextColor: "text-slate-900",
        link: "#"
      },
      {
        title: "Mastering FEA: Pokročilé techniky síťování",
        excerpt: "Záznam z našeho oblíbeného webináře zaměřeného na nelineární strukturální analýzy, optimalizaci sítě a řešení konvergenčních problémů.",
        date: "2. listopadu 2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWqLKaVs2_AgCZNw6_Gkke-BTNUVEVQZwU6Y5RpuqIS9h1XczInsvCCgDdR1OeMSEaWYgSG5Jq0ozkv1f3EQjoZfGkew8GnZCjyOKD-B5cwkAABZq9dAH10tmjCmpyN8JS3uuozQMxLGEb3McqgmjY2bgqp6B7zMhfI1ZNsom8S5vM9E7bzM0azQR31t4t9UDIN2rlTciwdlYFfBHYWn-z6GJX9kUTPahsH1R8JHSkG58zTDS3uPaFHO0IizpHtYDjbRddVBkJRso",
        category: "Webináře",
        categoryColor: "bg-secondary",
        categoryTextColor: "text-white",
        link: "#"
      },
      {
        title: "Optimalizace chlazení výkonové elektroniky",
        excerpt: "Případová studie o využití CFD pro návrh efektivního heatsinku pro vysoce výkonné procesory v náročném průmyslovém prostředí.",
        date: "12. listopadu 2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCerHse-xrEFvo2-zJj8l2B8FstbtubLPz5esMUEQBJX2niCiZ62TeKkRx65CupJUwTFwNV4LSq8L4JONGF4TnwcNwG8o6cArCdAE_x1KVWfe4xj8jZXQrO2Cx0dm3ZGHbeUCaUaWhFPlrmY2IxZLaiBmRtzOpTKUBuSZo8WW9pt8CPdo1rjMtQlM8IArnYjvwBP5fzBzOpR5zeYCFC41luQHlcyTGuSAK6bo-UTx78IBMJgloNGWqKYRXaFgYbJubFDFqITf6Dko8",
        category: "Technické články",
        categoryColor: "bg-primary",
        categoryTextColor: "text-white",
        link: "#"
      },
      {
        title: "TechSim navazuje partnerství s ČVUT",
        excerpt: "Nová strategická spolupráce s Fakultou strojní ČVUT si klade za cíl podporu výuky moderních simulačních metod a zapojení studentů do praxe.",
        date: "28. listopadu 2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk9QEAs0jgROcPp7En6YPMtDRnMCy4dwPkjHrQYIN_ymP_RonVjo1zv_T7NZC7g9khbB5Vh7bAsm0cCHCRXa6hgqpRBRKBXoWkhPI7PFaB1sAoRrSrV4DAY4SnmYi3bo43dELkJPfhL1p753pBndzIM4vYTtmJcvnv3ZCZcVBJ5zf1Q7wjVV44Qqmz02ImHu6BvQurK1aqhvnFIAbWJAJ5KF6vFaXjjIMdvDGtNUkaHradbEeb43NjzHPcuQvJo0nehEm2D9rEoKU",
        category: "Novinky",
        categoryColor: "bg-tertiary",
        categoryTextColor: "text-slate-900",
        link: "#"
      },
      {
        title: "Aerodynamika v letectví: Nové trendy",
        excerpt: "Jak kompozitní materiály a nové simulace turbulentního proudění mění design křídel dopravních letadel pro vyšší efektivitu.",
        date: "5. prosince 2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNtfYWq06zwQ4UI76iIXjPUDxAbPiSIW8Z3HubciHqUVEihaGjTf_XIsC37ZhSnofGcwkHH2YW8YN4vWgXTakB5VloN5KqMwvqITbuFYB1Yo9ig_KzOY1sgQN8z6MllTZeeudAlFV-qk1by0ZGHoFQ_JjP2Oa7J_Q85-_cT0P01yOaLirS5er5g1cHTqWlg3o3ZlooSaYJMSvKVlO1h7XGLOXUa38cXyW7lendZJAT826if61e3l56rbyya0Q-A7Lwt5MhAJtlyvQ",
        category: "Technické články",
        categoryColor: "bg-primary",
        categoryTextColor: "text-white",
        link: "#"
      },
      {
        title: "Robotika a automatizace v roce 2024",
        excerpt: "Předpověď trendů v průmyslové robotice a role simulací při programování kolaborativních robotů.",
        date: "10. prosince 2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4YQH3EaiCU3YFONLdA0Xtw837xU9_omXnfLqx3w2NdXtSmZRg6x-sad4jRwHqfKyvyZOO0wNWK6O2V3VOMbymZu62tTES2v3Xb_KPKuQFuY8yndGw1DkXtCJ7TwQk_1xp0E-rzZNOtV5DSrUX4A223DTFXNC48osXnr7svbtnrJgHgbl6lnPAgwaFT_C13gr6MeqWS5fHd_yTGGst6dkh4_AFVinQo1xLGWf3OPbI-QCAOtjLyIeYsp17gj5b645RUm6ELmXmEaY",
        category: "Novinky",
        categoryColor: "bg-tertiary",
        categoryTextColor: "text-slate-900",
        link: "#"
      }
    ],
    en: [
      {
        title: "TechSim Conference 2023: Highlights Recap",
        excerpt: "We bring you the best from our annual conference. Unveiling the new version of SimSuite 5.0 and inspiring lectures by guests from leading tech companies.",
        date: "October 15, 2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJJUlPaEO9KOjdJvuu0LzJL-6bJZmsXBdKZ824JOZaV65cLQ64RDYrVoBtPpSyoWb34IhDkaGU2dK_miqN-CLg5_LrW3uW-ax2ApWwHQh9OYLWcZdjih1qjruD1q0TyyBBRUj-rRADy7MG-f8XLClstjFMe5ioz5S0ZTTEdEahyo_Kkbmxvk6Bem_w7tNuldq7LsNXcQj1ySSFiYt47Seizyosp1iAQnjU-nDPQ8e6XWw-r1TC_GqL88hnviumDNbGtckt_dcDQKs",
        category: "News",
        categoryColor: "bg-tertiary",
        categoryTextColor: "text-slate-900",
        link: "#"
      },
      {
        title: "Mastering FEA: Advanced Meshing Techniques",
        excerpt: "Recording of our popular webinar focused on non-linear structural analysis, mesh optimization, and solving convergence issues.",
        date: "November 2, 2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWqLKaVs2_AgCZNw6_Gkke-BTNUVEVQZwU6Y5RpuqIS9h1XczInsvCCgDdR1OeMSEaWYgSG5Jq0ozkv1f3EQjoZfGkew8GnZCjyOKD-B5cwkAABZq9dAH10tmjCmpyN8JS3uuozQMxLGEb3McqgmjY2bgqp6B7zMhfI1ZNsom8S5vM9E7bzM0azQR31t4t9UDIN2rlTciwdlYFfBHYWn-z6GJX9kUTPahsH1R8JHSkG58zTDS3uPaFHO0IizpHtYDjbRddVBkJRso",
        category: "Webinars",
        categoryColor: "bg-secondary",
        categoryTextColor: "text-white",
        link: "#"
      },
      {
        title: "Cooling Optimization for Power Electronics",
        excerpt: "Case study on using CFD to design an efficient heatsink for high-performance processors in demanding industrial environments.",
        date: "November 12, 2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCerHse-xrEFvo2-zJj8l2B8FstbtubLPz5esMUEQBJX2niCiZ62TeKkRx65CupJUwTFwNV4LSq8L4JONGF4TnwcNwG8o6cArCdAE_x1KVWfe4xj8jZXQrO2Cx0dm3ZGHbeUCaUaWhFPlrmY2IxZLaiBmRtzOpTKUBuSZo8WW9pt8CPdo1rjMtQlM8IArnYjvwBP5fzBzOpR5zeYCFC41luQHlcyTGuSAK6bo-UTx78IBMJgloNGWqKYRXaFgYbJubFDFqITf6Dko8",
        category: "Technical Articles",
        categoryColor: "bg-primary",
        categoryTextColor: "text-white",
        link: "#"
      },
      {
        title: "TechSim Partners with CTU",
        excerpt: "New strategic cooperation with the Faculty of Mechanical Engineering at CTU aims to support teaching modern simulation methods and involving students in practice.",
        date: "November 28, 2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk9QEAs0jgROcPp7En6YPMtDRnMCy4dwPkjHrQYIN_ymP_RonVjo1zv_T7NZC7g9khbB5Vh7bAsm0cCHCRXa6hgqpRBRKBXoWkhPI7PFaB1sAoRrSrV4DAY4SnmYi3bo43dELkJPfhL1p753pBndzIM4vYTtmJcvnv3ZCZcVBJ5zf1Q7wjVV44Qqmz02ImHu6BvQurK1aqhvnFIAbWJAJ5KF6vFaXjjIMdvDGtNUkaHradbEeb43NjzHPcuQvJo0nehEm2D9rEoKU",
        category: "News",
        categoryColor: "bg-tertiary",
        categoryTextColor: "text-slate-900",
        link: "#"
      },
      {
        title: "Aerodynamics in Aviation: New Trends",
        excerpt: "How composite materials and new simulations of turbulent flow are changing the wing design of commercial aircraft for higher efficiency.",
        date: "December 5, 2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNtfYWq06zwQ4UI76iIXjPUDxAbPiSIW8Z3HubciHqUVEihaGjTf_XIsC37ZhSnofGcwkHH2YW8YN4vWgXTakB5VloN5KqMwvqITbuFYB1Yo9ig_KzOY1sgQN8z6MllTZeeudAlFV-qk1by0ZGHoFQ_JjP2Oa7J_Q85-_cT0P01yOaLirS5er5g1cHTqWlg3o3ZlooSaYJMSvKVlO1h7XGLOXUa38cXyW7lendZJAT826if61e3l56rbyya0Q-A7Lwt5MhAJtlyvQ",
        category: "Technical Articles",
        categoryColor: "bg-primary",
        categoryTextColor: "text-white",
        link: "#"
      },
      {
        title: "Robotics and Automation in 2024",
        excerpt: "Forecast of trends in industrial robotics and the role of simulations in programming collaborative robots.",
        date: "December 10, 2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4YQH3EaiCU3YFONLdA0Xtw837xU9_omXnfLqx3w2NdXtSmZRg6x-sad4jRwHqfKyvyZOO0wNWK6O2V3VOMbymZu62tTES2v3Xb_KPKuQFuY8yndGw1DkXtCJ7TwQk_1xp0E-rzZNOtV5DSrUX4A223DTFXNC48osXnr7svbtnrJgHgbl6lnPAgwaFT_C13gr6MeqWS5fHd_yTGGst6dkh4_AFVinQo1xLGWf3OPbI-QCAOtjLyIeYsp17gj5b645RUm6ELmXmEaY",
        category: "News",
        categoryColor: "bg-tertiary",
        categoryTextColor: "text-slate-900",
        link: "#"
      }
    ]
  };

  const blogPosts = blogPostsData[language] || blogPostsData.cs;

  return (
    <div className="flex flex-col flex-grow">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end overflow-hidden group">
        <div className="absolute inset-0">
          <img 
            alt="Featured Simulation Visual" 
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcxoZq829E97fBL9zLjuLLZpt8h-o-iFBSXvylOt0dOyvZIfmMNtNWDxjwM-JXWEtIYUj7-asoIuDYMTe38dWskuC0IcQ_sGnSwZ2fsvn66RX_aGVK96MnDwZMz5H8ejf2PzJEJN3vqnhb7XkCtZ-54lperK9R5gte1fnSM3r88rxm7x7piIGIHGXUpXTy_-8ZCLZHd-_qavEqo--YVHrqo8CgAz7bmn7Jxi1FDbDwokApCtMs6Kv9iJC0zfDm6KJZBN8WTQjoGfI"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 pb-16 md:pb-24">
          <div className="max-w-4xl animate-[fadeInUp_1s_ease-out]">
            <span className="inline-block py-1.5 px-4 rounded bg-primary text-white text-xs font-bold uppercase tracking-wider mb-5 shadow-lg">{t.blog.featuredTag}</span>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-lg">
              {t.blog.featuredTitle}
            </h1>
            <p className="font-body text-lg md:text-xl text-blue-50 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
              {t.blog.featuredDesc}
            </p>
            <a className="inline-flex items-center bg-white text-secondary hover:bg-tertiary hover:text-white px-8 py-4 rounded font-bold transition-all duration-300 shadow-xl group/btn" href="#">
              {t.blog.readFull} <span className="material-symbols-outlined ml-2 transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background-light dark:bg-background-dark flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <main className="lg:w-2/3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 border-b border-slate-200 dark:border-slate-700 pb-4">
                <h2 className="font-display font-bold text-3xl text-slate-800 dark:text-white">{t.blog.latestTitle}</h2>
                <div className="mt-4 sm:mt-0 flex gap-2 text-sm font-medium">
                  <span className="text-slate-400">{t.blog.sortBy}</span>
                  <a className="text-secondary dark:text-tertiary font-bold hover:underline" href="#">{t.blog.date}</a>
                  <span className="text-slate-300">|</span>
                  <a className="text-slate-600 dark:text-slate-400 hover:text-secondary dark:hover:text-tertiary" href="#">{t.blog.popularity}</a>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                {blogPosts.map((post, index) => (
                  <article key={index} className="flex flex-col h-full group">
                    <div className="relative overflow-hidden rounded-xl mb-5 aspect-[4/3] shadow-md group-hover:shadow-xl transition-all duration-300">
                      <img 
                        alt="Blog post thumbnail" 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                        src={post.image}
                      />
                      <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-300"></div>
                      <span className={`absolute top-4 left-4 ${post.categoryColor} ${post.categoryTextColor} text-xs font-bold px-3 py-1.5 rounded shadow-sm uppercase tracking-wide`}>
                        {post.category}
                      </span>
                    </div>
                    <div className="flex items-center text-slate-400 text-xs font-bold mb-3 font-body uppercase tracking-wider">
                      <span className="material-symbols-outlined text-base mr-1.5">event</span>
                      {post.date}
                    </div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-slate-800 dark:text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                      <a href={post.link}>{post.title}</a>
                    </h3>
                    <p className="font-body text-slate-600 dark:text-slate-400 mb-5 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <a className="mt-auto inline-flex items-center font-bold text-secondary dark:text-tertiary hover:text-primary dark:hover:text-white transition-colors uppercase text-sm tracking-wide" href={post.link}>
                      {t.blog.readMore} <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                    </a>
                  </article>
                ))}
              </div>

              <div className="mt-20 flex justify-center">
                <nav className="flex items-center gap-2">
                  <a className="w-12 h-12 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </a>
                  <a className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-md" href="#">1</a>
                  <a className="w-12 h-12 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors" href="#">2</a>
                  <a className="w-12 h-12 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors" href="#">3</a>
                  <span className="text-slate-400 px-2 font-bold tracking-widest">...</span>
                  <a className="w-12 h-12 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </a>
                </nav>
              </div>
            </main>

            <aside className="lg:w-1/3 space-y-8 lg:pl-4">
              {/* Search */}
              <div className="relative group">
                <input 
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white dark:bg-surface-dark border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-secondary text-slate-800 dark:text-white shadow-sm transition-all" 
                  placeholder={t.blog.searchPlaceholder} 
                  type="text" 
                />
                <span className="material-symbols-outlined absolute left-4 top-3.5 text-slate-400 group-focus-within:text-secondary transition-colors">search</span>
              </div>

              {/* Newsletter Box */}
              <div className="bg-tertiary rounded-xl p-8 text-slate-900 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white rounded-full opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-24 h-24 bg-secondary rounded-full opacity-10 blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                    <span className="material-symbols-outlined text-2xl text-tertiary">mail</span>
                  </div>
                  <h3 className="font-display font-black text-2xl mb-3 tracking-tight text-slate-900 whitespace-pre-line">{t.blog.subscribeTitle}</h3>
                  <p className="text-slate-700 mb-6 font-body text-sm leading-relaxed opacity-90">
                    {t.blog.subscribeDesc}
                  </p>
                  <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative">
                      <input 
                        className="w-full rounded-lg bg-white/60 border border-white/50 text-slate-900 placeholder-slate-600 focus:bg-white focus:ring-2 focus:ring-secondary focus:border-transparent transition-all pl-10 pr-4 py-3 text-sm outline-none" 
                        placeholder={t.newsletter.placeholder} 
                        type="email" 
                      />
                      <span className="material-symbols-outlined absolute left-3 top-3 text-slate-600 text-lg">alternate_email</span>
                    </div>
                    <button className="w-full bg-secondary text-white font-bold uppercase tracking-wider text-xs py-3.5 rounded-lg hover:bg-slate-900 transition-all shadow-lg hover:shadow-xl transform active:scale-95 flex items-center justify-center gap-2" type="submit">
                      {t.blog.subscribeBtn} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </form>
                  <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-600 opacity-70">
                    <span className="material-symbols-outlined text-xs">check_circle</span>
                    <span>{t.blog.noSpam}</span>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-700">
                  <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full"></span>
                    {t.blog.categories}
                  </h3>
                </div>
                <div className="p-2">
                  <nav className="space-y-1">
                    <a className="flex justify-between items-center group p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-xl">article</span>
                        <span className="text-slate-600 dark:text-slate-300 font-bold text-sm group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{t.blog.cat.news}</span>
                      </div>
                      <span className="bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold py-1 px-2.5 rounded-md group-hover:bg-primary group-hover:text-white transition-colors">14</span>
                    </a>
                    <a className="flex justify-between items-center group p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-secondary transition-colors text-xl">videocam</span>
                        <span className="text-slate-600 dark:text-slate-300 font-bold text-sm group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{t.blog.cat.webinars}</span>
                      </div>
                      <span className="bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold py-1 px-2.5 rounded-md group-hover:bg-secondary group-hover:text-white transition-colors">8</span>
                    </a>
                    <a className="flex justify-between items-center group p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-xl">engineering</span>
                        <span className="text-slate-600 dark:text-slate-300 font-bold text-sm group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{t.blog.cat.articles}</span>
                      </div>
                      <span className="bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold py-1 px-2.5 rounded-md group-hover:bg-primary group-hover:text-white transition-colors">23</span>
                    </a>
                    <a className="flex justify-between items-center group p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-tertiary transition-colors text-xl">folder_open</span>
                        <span className="text-slate-600 dark:text-slate-300 font-bold text-sm group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{t.blog.cat.cases}</span>
                      </div>
                      <span className="bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold py-1 px-2.5 rounded-md group-hover:bg-tertiary group-hover:text-white transition-colors">5</span>
                    </a>
                  </nav>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/20">
                  <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">calendar_month</span>
                    {t.blog.upcomingEvents}
                  </h3>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-700">
                  <a className="block p-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group" href="#">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-14 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg p-2 border border-slate-200 dark:border-slate-700 group-hover:border-secondary/30 transition-colors">
                        <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Oct</span>
                        <span className="text-xl font-black text-secondary font-display group-hover:scale-110 transition-transform">24</span>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 group-hover:text-primary transition-colors leading-snug">Advanced CFD Workshop 2024</h4>
                        <div className="flex items-center gap-3 text-xs text-slate-500 mt-2">
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> 14:00</span>
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">videocam</span> Online</span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a className="block p-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group" href="#">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-14 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg p-2 border border-slate-200 dark:border-slate-700 group-hover:border-secondary/30 transition-colors">
                        <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Nov</span>
                        <span className="text-xl font-black text-secondary font-display group-hover:scale-110 transition-transform">08</span>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 group-hover:text-primary transition-colors leading-snug">TechSim Annual Summit</h4>
                        <div className="flex items-center gap-3 text-xs text-slate-500 mt-2">
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> 09:00</span>
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">location_on</span> Prague</span>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="p-3 text-center">
                    <a className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-wide" href="#">
                      {t.blog.viewCalendar} <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;