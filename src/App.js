import React, { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <div className="hero">
            <img src="/background.jpg" alt="фон" className="hero-bg" />
              <div className="navbar">
                <button onClick={() => setPage('about')}>О НАС</button>
                <button onClick={() => setPage('rooms')}>НОМЕРА</button>
                <button onClick={() => setPage('bath')}>БАНЯ</button>
                <button onClick={() => setPage('pool')}>КУПЕЛЬ</button>
                <button onClick={() => setPage('bbq')}>БАРБЕКЮ</button>
                <button onClick={() => setPage('yard')}>ДВОР</button>
                <button onClick={() => setPage('contacts')}>КОНТАКТЫ</button>
              </div>
            </div>
        );
      case 'about':
        return (
          <>
            <h2>О нас</h2>
            <p>Наш гостевой дом основан в 2010 году. Тёплый приём, удобства для всей семьи и идеальное место для отдыха.</p>
          </>
        );
      case 'rooms':
        return (
          <>
            <h2>Номера</h2>
            <ul>
              <li>Стандарт — 2 места, Wi-Fi, кондиционер</li>
              <li>Семейный — 4 места, кухня, вид на море</li>
              <li>Люкс — 2 места, балкон, джакузи</li>
            </ul>
          </>
        );
      case 'gallery':
        return (
          <>
            <h2>Галерея</h2>
            <div className="photo-grid">
              <div className="photo">[Фото 4]</div>
              <div className="photo">[Фото 5]</div>
              <div className="photo">[Фото 6]</div>
            </div>
          </>
        );
      case 'contacts':
        return (
          <>
            <h2>Контакты</h2>
            <p>Адрес: ул. Воина Шембелиди, 44, с. Витязево</p>
            <p>Телефон: +7 (913) 488-40-11</p>
            <div style={{ marginTop: '10px' }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.270311%2C44.986717&z=16&l=map&pt=37.270311,44.986717,pm2rdm"
                width="100%"
                height="400"
                allowFullScreen={true}
                title="Карта"
              />
            </div>
          </>
        );
      default:
        return <p>Страница не найдена</p>;
    }
    
  };
  

  return (
    <div className="App">
      <main>{renderPage()}</main>
      {/* <footer>
        <p>© 2025 Гостевой дом "ATMOSPHERE". Все права защищены.</p>
      </footer> */}
    </div>
  );
}

export default App;
