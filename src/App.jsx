import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([]);

  


  useEffect(() => {
    fetch("https://openlibrary.org/subjects/history.json?limit=15")
      .then(res => res.json())
      .then(res => setData(res.works));
  }, []);

  

  return (
    <div className="App">
      <h1 className='text-center text-[50px]'>Library Books</h1>
      <div className="max-w-[1440px] m-auto p-3 mt-5" >
        <div className='flex flex-wrap justify-center items-center gap-[20px] text-start'>
          {data.map((card) => (
            <Card key={card.id}
              title={card.title}
              author={card.authors}
              editionCount={card.edition_count}
              cover_id={card.cover_id  || 'No cover'} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
