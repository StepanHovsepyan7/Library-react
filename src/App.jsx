import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App({ searchItem, setSearchItem }) {
  const [data, setData] = useState([]);
  const [selectedSubject, setSubject] = useState('history');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    let timer;

    if (searchItem.trim() !== '') {
      timer = setTimeout(() => {
        fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(searchItem)}&limit=20`)
          .then(res => res.json())
          .then(res => {
            setData(res.docs || []);
            AOS.refresh();
          })
          .catch(console.error);
      }, 1000);
    } else {
      setData([]);
    }

    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    fetch(`https://openlibrary.org/subjects/${selectedSubject}.json?limit=20`)
      .then(res => res.json())
      .then(res => {
        setData(res.works || []);
        AOS.refresh();
      });
  }, [selectedSubject]);

  const subjects = [
    'art',
    'biography',
    'children',
    'fantasy',
    'health',
    'history',
    'mystery',
    'philosophy',
    'religion',
    'science',
    'technology',
  ];

  return (
    <div className="App">
      <div className='max-w-[1440px] m-auto p-3 mt-[100px]'>
        <h2 className='text-center text-4xl font-bold title'>Book genres</h2>
        <div className='flex flex-wrap gap-[20px] justify-center items-center mt-[60px]'>
          {subjects.map((e) => (
            <button
              key={e}
              onClick={() => setSubject(e)}
              className={`btn cursor-pointer ${selectedSubject === e ? `activeBtn` : ''}`}
            >
              {e}
            </button>
          ))}
        </div>
      </div>

      <h1 className='text-center text-4xl font-bold mt-10 title'>Library Books</h1>
      <div className="max-w-[1440px] m-auto p-3 mt-5">
        <div className='flex flex-wrap justify-center items-center gap-[20px] text-start mt-[60px]'>
          {data.map((card, index) => (
            <div key={card.key || index} data-aos="fade-down">
              <Card
                title={card.title}
                author={card.author_name?.[0] || card.authors?.[0]?.name || 'Unknown'}
                editionCount={card.edition_count}
                cover_id={card.cover_id || card.cover_i}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
