import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MainLayout = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <header className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold">{t('appName')}</h1>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      <footer className="container mx-auto px-4 py-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} {t('appName')}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
