import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Mock data for preview
const MOCK_ASTRO = {
  constellation: 'Libra',
  compatibility: '92%',
  moonPhase: 'Waxing Gibbous',
  quote: 'The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.'
};

const calculateDaysTogether = (startDate) => {
  if (!startDate) return 0;
  const start = new Date(startDate);
  const today = new Date();
  const diffTime = Math.abs(today - start);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

const CreatePage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    partner1: '',
    partner2: '',
    date: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form submitted:', formData);
    // Show success message
    alert(t('form.submitSuccess', 'Your love story has been created successfully!'));
  };

  // Calculate derived preview data
  const previewData = {
    daysTogether: calculateDaysTogether(formData.date),
    nextAnniversary: formData.date ?
      new Date(new Date(formData.date).setFullYear(new Date().getFullYear() + 1)).toLocaleDateString() : '',
    ...MOCK_ASTRO
  };

  // Auto-focus first input on mount
  useEffect(() => {
    document.querySelector('input')?.focus();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        <motion.div
          className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">{t('createPage')}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="partner1" className="block mb-2">
                {t('form.partner1', 'Partner 1 Name')}
              </label>
              <input
                type="text"
                id="partner1"
                name="partner1"
                value={formData.partner1}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder={t('form.placeholder', { field: t('form.partner1', 'Partner 1 Name') })}
                required
              />
            </div>

            <div>
              <label htmlFor="partner2" className="block mb-2">
                {t('form.partner2', 'Partner 2 Name')}
              </label>
              <input
                type="text"
                id="partner2"
                name="partner2"
                value={formData.partner2}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder={t('form.placeholder', { field: t('form.partner2', 'Partner 2 Name') })}
                required
              />
            </div>

            <div>
              <label htmlFor="date" className="block mb-2">
                {t('form.date', 'Relationship Start Date')}
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label htmlFor="location" className="block mb-2">
                {t('form.location', 'Location (City, Country)')}
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder={t('form.placeholder', { field: t('form.location', 'Location') })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              {t('form.submit', 'Create Our Story')}
            </button>
          </form>
        </motion.div>

        <motion.div
          className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl"
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 10,
            delay: 0.3
          }}
        >
          <h2 className="text-2xl font-bold mb-6">{t('preview.title', 'Preview')}</h2>
          <div className="space-y-6 relative z-10">
            <div className="text-center py-8 space-y-2">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {formData.partner1 || 'Parceiro 1'} & {formData.partner2 || 'Parceiro 2'}
              </h3>
              {formData.date && (
                <div className="text-lg text-pink-200">
                  {new Date(formData.date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
              )}

            </div>

            {/* Preview content will go here */}
            <div className="mt-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-pink-400">{previewData.daysTogether}</div>
                  <div className="text-sm text-gray-300">{t('preview.daysTogether', 'Dias Juntos')}</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-400">{previewData.compatibility}</div>
                  <div className="text-sm text-gray-300">{t('preview.compatibility', 'Compatibilidade')}</div>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-pink-300 mb-2">{t('preview.constellation', 'Constelação')}</h4>
                <p className="text-sm text-gray-200">{previewData.constellation}</p>
              </div>

              {formData.location && (
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-300 mb-2">{t('preview.location', 'Local')}</h4>
                  <p className="text-sm text-gray-200">{formData.location}</p>
                </div>
              )}

              <div className="text-sm text-gray-400 italic mt-6">
                "{previewData.quote}"
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CreatePage;
