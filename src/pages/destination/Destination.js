import React, { useEffect, useState } from 'react';
// import {destinations} from '../../data.json'

const Destination = () => {
  const [Data, setData] = useState([]);
  const [index, setIndex] = useState(0)
  // const [planets] = useState(destinations)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/data.json');
        const data = await response.json();
        // console.log(data);
        setData(data.destinations);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])


  if (Data.length > 0) {
    var { name, images, description, distance, travel } = Data[index]

    var imagePath = images.png;
  }


  return (
    <>
      <section className='home destination px-5 pt-10'>

        <h1 className='text-white text-4xl uppercase mb-10 mx-auto pt-20 lg:pt-40 lg:max-w-7xl'> 01 Pick your destination </h1>

        <div className='md:grid grid-cols-2 gap-5 md:items-center lg:max-w-7xl lg:mx-auto'>
          <article>
            <img src={imagePath}
              alt={name}
              title={name}
              className='block mx-auto w-3/4 mb-10'
            />
          </article>

          <article className='text-center lg:text-left'>
            {
              Data.map((dest, id) => (
                <button key={id}
                  onClick={() => setIndex(id)}
                  className={`uppercase text-white text-2xl pb-2 mr-2 ${id === index && "border-b border-white"}`}
                >
                {dest.name}
                </button>
              ))
            }

            <h2 className='text-5xl font-bold text-white mt-10 mb-5 uppercase tracking-widest'>{name}</h2>
            <p className='text-gray-400 pb-10'>{description}</p>

            <ul className='flex items-center justify-between flex-wrap border-t border-gray-400 pt-10'>
              <li className='text-white'>
                Avg. Distance <span className='text-3xl block'>{distance}</span>
              </li>
              <li className='text-white'>
                Est. Travel Time <span className='text-3xl block'>{travel}</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

    </>
  )
}

export default Destination