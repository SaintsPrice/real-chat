import './App.css';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import { FC } from 'react';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter>

      </AppRouter>
      <Footer />
    </BrowserRouter>
  );
};

export default App;