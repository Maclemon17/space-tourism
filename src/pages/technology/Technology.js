import React, { useEffect, useState } from 'react'

const Technology = () => {
  const [Data, setData] = useState([]);
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/data.json');
        const data = await response.json();
        // console.log(data);
        setData(data.technology);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])


  if (Data.length > 0) {
    var { name, images, description } = Data[index]

    var imagePathPortrait = images.portrait;
    var imagePathLandscape = images.landscape;
  }
  return (
    <>
      <section className='home technology px-5 pt-10'>

        <h1 className='text-white text-4xl uppercase mb-10 mx-auto pt-20 lg:pt-40 lg:max-w-7xl'>03 Space launch 101 </h1>

        <div className='flex items-center justify-center flex-col-reverse md:grid grid-cols-2 gap-5 md:items-center lg:max-w-7xl lg:mx-auto'>

          <article className='text-center lg:text-left lg:flex lg:items-center gap-6'>

            <div>
              {
                Data.map((tech, id) => (
                  <button key={id}
                    onClick={() => setIndex(id)}
                    className={`uppercase text-white text-2xl pb-2 mr-2 border rounded-full h-12 w-12 my-3 p-2 ${id === index && "bg-white text-gray-800"}`}
                  >
                    {id + 1}

                  </button>
                ))
              }
            </div>

            <div>
              <h4 className="text-2xl text-gray-400 my-5 uppercase">The terminology...</h4>
              <h2 className='text-5xl font-bold text-white my-5 uppercase tracking-widest'>{name}</h2>
              <p className='text-gray-400 pb-10'>{description}</p>
            </div>

          </article>

          <article>
            <picture>
              <source media="(min-width: 768px)" srcSet={imagePathPortrait} />
              <img src={imagePathLandscape}
                alt={name}
                title={name}
                className='block mx-auto w-3/4 '
              />
            </picture>
          </article>

        </div>
      </section>
    </>
  )
}

export default Technology