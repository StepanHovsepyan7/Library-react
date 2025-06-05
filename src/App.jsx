import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([]);
  const [selectedSubject, setSubject] = useState('history')


  let subject = [
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
  ]

  useEffect(() => {
    fetch(`https://openlibrary.org/subjects/${selectedSubject}.json?limit=15`)
      .then(res => res.json())
      .then(res => setData(res.works));
  }, [selectedSubject]);





  return (
    <div className="App">

      <div className='max-w-[1440px] m-auto p-3 mt-5'>
        <h2 className='text-center text-4xl font-bold'>Book genres</h2>
        <div className='flex flex-wrap gap-[20px] justify-center items-center mt-[60px]'>
          {subject.map((e) => {
            return (
              <button key={e} onClick={() => setSubject(e)} className={`btn cursor-pointer ${selectedSubject === e ? `activeBtn` : ''}`} >{e}</button>
            )
          })}
        </div>
      </div>

      <h1 className='text-center text-4xl font-bold mt-10'>Library Books</h1>
      <div className="max-w-[1440px] m-auto p-3 mt-5" >
        <div className='flex flex-wrap justify-center items-center gap-[20px] text-start mt-[60px]'>
          {data.map((card) => (
            <Card key={card.key}
              title={card.title}
              author={card.authors}
              editionCount={card.edition_count}
              cover_id={card.cover_id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
