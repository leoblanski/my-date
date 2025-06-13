import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './lang/i18n';
import MainLayout from './components/layout/MainLayout';
import HomePage from './views/HomePage';
import CreatePage from './views/CreatePage';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="create" element={<CreatePage />} />
              {/* Add more routes as needed */}
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </I18nextProvider>
  );
}

export default App;
