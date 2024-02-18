import { useEffect, useState } from 'react';
import './App.css';
import { createImageWithInitials } from './utils/generateAvatar/generateAvatar';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

function App() {
  const [imgSrc, setImgSrc] = useState<string>('');
  useEffect(() => {}, [imgSrc]);

  return (
    <div id="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
