import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'general',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you shortly.');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 backdrop-blur-sm">
             <span className="material-symbols-outlined text-3xl">mail</span>
          </div>
          <h1 className="font-display font-black text-4xl md:text-5xl mb-4">{t.contactPage.title}</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto font-light">
            {t.contactPage.desc}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Info Box */}
            <div className="bg-white dark:bg-surface-dark rounded-xl shadow-xl p-8 border-t-4 border-primary">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">contacts</span>
                {t.contactPage.subtitle}
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 flex-shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">{t.contactPage.info.email}</p>
                    <a href="mailto:info@techsim.cz" className="text-primary font-bold hover:underline">info@techsim.cz</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 flex-shrink-0">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">{t.contactPage.info.phone}</p>
                    <a href="tel:+420222286116" className="text-slate-700 dark:text-slate-300 font-bold hover:text-primary transition-colors">+420 222 286 116</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 flex-shrink-0">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">{t.contactPage.info.hours}</p>
                    <p className="text-slate-700 dark:text-slate-300">{t.contactPage.info.hoursValue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* HQ Info & Map */}
            <div className="space-y-4">
               <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white flex items-center gap-2 px-1">
                  <span className="material-symbols-outlined text-secondary">apartment</span>
                  {t.contactPage.info.hq}
               </h3>
               <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-700">
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 font-medium pl-1">
                    {t.contactPage.info.address}
                  </p>
                  <div className="rounded-lg overflow-hidden h-48 border border-slate-100 dark:border-slate-800">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.247963364956!2d14.43956437685934!3d50.04405797151703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93eb10464601%3A0x61665e71887e470d!2sBud%C4%9Bjovick%C3%A1%201550%2F15a%2C%20140%2000%20Praha%204-Michle!5e0!3m2!1scs!2scz" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="TechSim HQ Map"
                    ></iframe>
                  </div>
               </div>
            </div>

            {/* Branch Info & Map */}
            <div className="space-y-4">
               <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white flex items-center gap-2 px-1">
                  <span className="material-symbols-outlined text-tertiary">store</span>
                  {t.contactPage.info.branch}
               </h3>
               <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-700">
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 font-medium pl-1">
                    {t.contactPage.info.addressBrno}
                  </p>
                  <div className="rounded-lg overflow-hidden h-48 border border-slate-100 dark:border-slate-800">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.0716631526484!2d16.57463531616892!3d49.23192077932591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471293f06b276711%3A0x330058e0a3e3518e!2sPurky%C5%88ova%20648%2F125%2C%20612%2000%20Brno-Kr%C3%A1lovo%20Pole!5e0!3m2!1scs!2scz" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="TechSim Brno Branch Map"
                    ></iframe>
                  </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-surface-dark rounded-xl shadow-xl p-8 md:p-10 border border-slate-100 dark:border-slate-700 sticky top-24">
              <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-6">
                {t.contactPage.subtitle}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase text-slate-500 tracking-wide">{t.contactPage.form.name}</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                      placeholder={t.contactPage.form.placeholders.name}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase text-slate-500 tracking-wide">{t.contactPage.form.email}</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                      placeholder={t.contactPage.form.placeholders.email}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase text-slate-500 tracking-wide">{t.contactPage.form.phone}</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                      placeholder={t.contactPage.form.placeholders.phone}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="department" className="text-xs font-bold uppercase text-slate-500 tracking-wide">{t.contactPage.form.department}</label>
                    <div className="relative">
                      <select 
                        id="department" 
                        name="department" 
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none appearance-none transition-colors cursor-pointer"
                      >
                        <option value="general">{t.contactPage.form.departments.general}</option>
                        <option value="sales">{t.contactPage.form.departments.sales}</option>
                        <option value="testing">{t.contactPage.form.departments.testing}</option>
                        <option value="software">{t.contactPage.form.departments.software}</option>
                        <option value="training">{t.contactPage.form.departments.training}</option>
                        <option value="services">{t.contactPage.form.departments.services}</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-3.5 text-slate-400 pointer-events-none">expand_more</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase text-slate-500 tracking-wide">{t.contactPage.form.message}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors resize-none"
                    placeholder="..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-red-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined">send</span>
                    {t.contactPage.form.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;