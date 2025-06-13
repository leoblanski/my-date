import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-6">{t('home.welcome', 'Welcome to Our Special Date')}</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        {t('home.description', 'Create and share your special moments with beautiful cosmic insights about your relationship.')}
      </p>
      <div className="space-x-4">
        <Link 
          to="/create" 
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors"
        >
          {t('createPage', 'Create Your Page')}
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
