import React from 'react';

const link = [
{
    id: 1,
  title1 : 'Turning Fans',
  title2 : 'Into Customers',
  img : `https://micdropagency.com/media/pages/home/4c4c27568b-1655934961/micdrop-image-10-1440x900-q72.jpg`,
//   red : "/src/Screenshot\ 2023-03-06\ 181443.png",
}
]
function Section_six() {
  return (
    <section>
    
       <Banner></Banner>
    
    </section>
  );
}

const Banner = () => {
    return(
        <div>
            <h1 className='ss'>{link.map((link) =>{
                const {title1,title2} = link;
                return(
                    <div className='banner' style={{
                        backgroundImage : `url(${link.img})`
                    }}>
                        <h1 className='banner-title' >{title1}</h1>
                        <h1 className='banner-title' >{title2}</h1>
                    </div>
                );
            })}</h1>
        </div>
    );
}

export default Section_six;