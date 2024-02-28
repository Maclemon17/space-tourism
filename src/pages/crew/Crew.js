import React, { useEffect, useState } from 'react'
import { BsCircle, BsCircleFill } from 'react-icons/bs'

const Crew = () => {
  const [Data, setData] = useState([]);
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/data.json');
        const data = await response.json();
        // console.log(data);
        setData(data.crew);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])


  if (Data.length > 0) {
    var { name, images, bio, role } = Data[index]

    var imagePath = images.png;
  }

  return (
    <>
      <section className='home crew px-5 pt-10'>

        <h1 className='text-white text-4xl uppercase mb-10 mx-auto pt-20 lg:pt-40 lg:max-w-7xl'>02 Pick your crew </h1>

        <div className='flex items-center justify-center flex-col-reverse md:grid grid-cols-2 gap-5 md:items-center lg:max-w-7xl lg:mx-auto'>


          <article className='text-center lg:text-left'>
            <h4 className="text-2xl text-gray-400 mb-5 uppercase">{role}</h4>

            <h2 className='text-5xl font-bold text-white mb-5 uppercase tracking-widest'>{name}</h2>
            <p className='text-gray-400 pb-10'>{bio}</p>

            {
              Data.map((crew, id) => (
                <button key={id}
                  onClick={() => setIndex(id)}
                  className='uppercase text-white text-2xl pb-2 mr-2'
                >
                  {
                    id === index ? <BsCircleFill /> : <BsCircle />
                  }

                </button>
              ))
            }

          </article>

          <article>
            <img src={imagePath}
              alt={name}
              title={name}
              className='block mx-auto w-3/4 '
            />
          </article>

        </div>
      </section>
    </>
  )
}

export default Crew