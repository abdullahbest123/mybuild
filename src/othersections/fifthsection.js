import React from 'react';

const link = [
{
    id: 1,
  title : 'Michael Zaccardo',
},
{
    id: 2,
  title : 'Michael Zaccardo',
},
{
    id: 3,
  title : 'Michael Zaccardo',
}
]
function Section_five() {
  return (
    <section>
    <div className='navigation-menu'>
       <Navigation key={link.id}></Navigation>
    </div>
    </section>
  );
}

const Navigation = () => {
    return(
        <div>
            <h1 className='navigation-item'>{link.map((link) =>{
                const {title} = link;
                return(
                    <div className='navigation-links'>
                        <h1>{title}</h1>
                    </div>
                );
            })}</h1>
        </div>
    );
}

export default Section_five;